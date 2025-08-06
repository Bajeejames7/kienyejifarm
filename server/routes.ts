import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertOrderSchema, insertContactSchema } from "@shared/schema";
import { z } from "zod";
import nodemailer from "nodemailer";

// Email configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
});

// Function to send order notification email
async function sendOrderNotification(order: any) {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@kienyejifresh.co.ke',
      to: 'jamesbajee3579@gmail.com',
      subject: `New Kienyeji Chicken Order - ${order.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c2410c; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">
            🐓 New Order Received!
          </h2>
          
          <div style="background: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #92400e;">Customer Details</h3>
            <p><strong>Name:</strong> ${order.name}</p>
            <p><strong>Phone:</strong> ${order.phone}</p>
            <p><strong>Location:</strong> ${order.location}</p>
          </div>

          <div style="background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #065f46;">Order Details</h3>
            <p><strong>Product:</strong> ${order.productType === 'live' ? 'Live Chicken' : 'Cleaned Chicken'}</p>
            <p><strong>Quantity:</strong> ${order.quantity} bird${order.quantity > 1 ? 's' : ''}</p>
            <p><strong>Delivery Date:</strong> ${order.deliveryDate || 'Not specified'}</p>
            ${order.specialRequests ? `<p><strong>Special Requests:</strong> ${order.specialRequests}</p>` : ''}
          </div>

          <div style="background: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e40af;">Quick Actions</h3>
            <p>Contact customer via WhatsApp: 
              <a href="https://wa.me/254${order.phone.replace(/\D/g, '').slice(-9)}?text=Hello ${order.name}! Thank you for your order. We're processing your request for ${order.quantity} ${order.productType} chicken(s). We'll confirm delivery details shortly." 
                 style="color: #16a34a; text-decoration: none; font-weight: bold;">
                Click here to WhatsApp ${order.name}
              </a>
            </p>
            <p>Or call directly: <strong>${order.phone}</strong></p>
          </div>

          <p style="color: #6b7280; font-size: 14px; text-align: center; margin-top: 30px;">
            Order submitted at: ${new Date(order.createdAt).toLocaleString('en-KE', { timeZone: 'Africa/Nairobi' })}<br>
            Kienyeji Fresh Farm - Fresh, Free-Range Chicken
          </p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Order notification email sent successfully');
  } catch (error) {
    console.error('Failed to send order notification email:', error);
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Order submission endpoint
  app.post("/api/orders", async (req, res) => {
    try {
      const orderData = insertOrderSchema.parse(req.body);
      const order = await storage.createOrder(orderData);
      
      // Send email notification
      await sendOrderNotification(order);
      
      res.json({ success: true, order });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid order data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create order" });
      }
    }
  });

  // Contact form submission endpoint
  app.post("/api/contacts", async (req, res) => {
    try {
      const contactData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(contactData);
      res.json({ success: true, contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ error: "Invalid contact data", details: error.errors });
      } else {
        res.status(500).json({ error: "Failed to create contact" });
      }
    }
  });

  // Get orders endpoint (for admin purposes)
  app.get("/api/orders", async (req, res) => {
    try {
      const orders = await storage.getOrders();
      res.json(orders);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch orders" });
    }
  });

  // Get contacts endpoint (for admin purposes)
  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
