import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  
  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      return await apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll contact you shortly via WhatsApp.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Message Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      phone: "",
      productType: "",
      quantity: 1,
      location: "",
    },
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to know more about your Kienyeji chickens. Please send me details.");
    window.open(`https://wa.me/254XXXXXXXXX?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-african-brown via-african-peru to-african-orange">
      <div className="pattern-overlay absolute inset-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="geometric-accent absolute -top-4 -left-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          </div>
          <p className="text-xl text-african-cream max-w-3xl mx-auto">
            Ready to order fresh Kienyeji chicken? Contact us today and taste the difference of authentic, naturally-raised poultry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-african-cream font-semibold">WhatsApp</p>
                  <p className="text-white text-lg">+254 XXX XXX XXX</p>
                  <p className="text-african-cream text-sm">Available 6 AM - 8 PM</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-african-orange rounded-full flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-african-cream font-semibold">Phone Call</p>
                  <p className="text-white text-lg">+254 XXX XXX XXX</p>
                  <p className="text-african-cream text-sm">Call us directly for orders</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-african-red rounded-full flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-african-cream font-semibold">Email</p>
                  <p className="text-white text-lg">orders@kienyejifresh.co.ke</p>
                  <p className="text-african-cream text-sm">We respond within 2 hours</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-african-gold rounded-full flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-african-cream font-semibold">Delivery Areas</p>
                  <p className="text-white text-lg">Nairobi & Surrounding Counties</p>
                  <p className="text-african-cream text-sm">Same day delivery available</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold text-white mb-4">Operating Hours</h4>
              <div className="bg-white bg-opacity-20 rounded-lg p-4 space-y-2">
                <div className="flex justify-between text-african-cream">
                  <span>Monday - Friday:</span>
                  <span>6:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-african-cream">
                  <span>Saturday:</span>
                  <span>7:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-african-cream">
                  <span>Sunday:</span>
                  <span>8:00 AM - 4:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Order Form */}
          <div className="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-6">Quick Order Form</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input 
                  {...form.register("name")}
                  placeholder="Your Name" 
                  className="bg-white bg-opacity-90"
                />
                {form.formState.errors.name && (
                  <p className="text-red-300 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              <div>
                <Input 
                  {...form.register("phone")}
                  placeholder="Phone Number (254XXXXXXXXX)" 
                  className="bg-white bg-opacity-90"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-300 text-sm mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>
              <div>
                <Select onValueChange={(value) => form.setValue("productType", value)}>
                  <SelectTrigger className="bg-white bg-opacity-90">
                    <SelectValue placeholder="Select Product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="live">Live Chicken</SelectItem>
                    <SelectItem value="cleaned">Slaughtered & Cleaned</SelectItem>
                    <SelectItem value="bulk">Bulk Order</SelectItem>
                  </SelectContent>
                </Select>
                {form.formState.errors.productType && (
                  <p className="text-red-300 text-sm mt-1">{form.formState.errors.productType.message}</p>
                )}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  type="number"
                  {...form.register("quantity", { valueAsNumber: true })}
                  placeholder="Quantity" 
                  className="bg-white bg-opacity-90"
                />
                <Input 
                  {...form.register("location")}
                  placeholder="Location" 
                  className="bg-white bg-opacity-90"
                />
              </div>
              {form.formState.errors.quantity && (
                <p className="text-red-300 text-sm">{form.formState.errors.quantity.message}</p>
              )}
              {form.formState.errors.location && (
                <p className="text-red-300 text-sm">{form.formState.errors.location.message}</p>
              )}
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-african-red hover:bg-african-fire text-white py-4 text-lg h-auto"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                {contactMutation.isPending ? "Sending..." : "Send WhatsApp Order"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
