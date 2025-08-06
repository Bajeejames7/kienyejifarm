import { useState } from "react";
import { MessageCircle, Phone, Laptop, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertOrderSchema, type InsertOrder } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function OrderSection() {
  const { toast } = useToast();
  
  const orderMutation = useMutation({
    mutationFn: async (data: InsertOrder) => {
      return await apiRequest("POST", "/api/orders", data);
    },
    onSuccess: () => {
      toast({
        title: "Order Submitted!",
        description: "We'll contact you shortly via WhatsApp to confirm your order.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Order Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const form = useForm<InsertOrder>({
    resolver: zodResolver(insertOrderSchema),
    defaultValues: {
      name: "",
      phone: "",
      location: "",
      productType: "",
      quantity: 1,
      deliveryDate: "",
      specialRequests: "",
    },
  });

  const onSubmit = (data: InsertOrder) => {
    orderMutation.mutate(data);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hello! I'd like to place an order for Kienyeji chicken. Please send me more details.");
    window.open(`https://wa.me/254702073509?text=${message}`, '_blank');
  };

  return (
    <section id="order" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="geometric-accent absolute -top-4 -left-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-african-dark mb-4">How to Order</h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ordering fresh Kienyeji chicken is simple and convenient. Choose your preferred method below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center bg-african-cream shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-african-dark mb-3">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick and easy ordering through WhatsApp chat</p>
              <p className="text-sm text-african-brown font-semibold">+254 702 073 509</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-african-cream shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-african-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-african-dark mb-3">Phone Call</h3>
              <p className="text-gray-600 mb-4">Speak directly with our farm team</p>
              <p className="text-sm text-african-brown font-semibold">Available 7 AM - 7 PM</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-african-cream shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-african-red rounded-full flex items-center justify-center mx-auto mb-6">
                <Laptop className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-african-dark mb-3">Online Form</h3>
              <p className="text-gray-600 mb-4">Fill out our simple order form below</p>
              <p className="text-sm text-african-brown font-semibold">Get instant confirmation</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-african-cream shadow-lg hover:shadow-xl transition duration-300">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-african-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-african-dark mb-3">Farm Pickup</h3>
              <p className="text-gray-600 mb-4">Visit our farm and pick up directly</p>
              <p className="text-sm text-african-brown font-semibold">By appointment only</p>
            </CardContent>
          </Card>
        </div>

        {/* Order Form */}
        <div className="bg-gradient-to-br from-african-brown to-african-peru rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white text-center mb-8">Place Your Order</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-african-cream font-semibold">Full Name</Label>
                <Input 
                  id="name"
                  {...form.register("name")}
                  placeholder="Enter your full name" 
                  className="mt-2"
                />
                {form.formState.errors.name && (
                  <p className="text-red-300 text-sm mt-1">{form.formState.errors.name.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-african-cream font-semibold">Phone Number</Label>
                <Input 
                  id="phone"
                  {...form.register("phone")}
                  placeholder="254XXXXXXXXX" 
                  className="mt-2"
                />
                {form.formState.errors.phone && (
                  <p className="text-red-300 text-sm mt-1">{form.formState.errors.phone.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="location" className="text-african-cream font-semibold">Delivery Location</Label>
                <Input 
                  id="location"
                  {...form.register("location")}
                  placeholder="Area, Estate, Landmark" 
                  className="mt-2"
                />
                {form.formState.errors.location && (
                  <p className="text-red-300 text-sm mt-1">{form.formState.errors.location.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="productType" className="text-african-cream font-semibold">Product Type</Label>
                <Select onValueChange={(value) => form.setValue("productType", value)}>
                  <SelectTrigger className="mt-2">
                    <SelectValue placeholder="Select product type" />
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
              
              <div>
                <Label htmlFor="quantity" className="text-african-cream font-semibold">Quantity</Label>
                <Input 
                  id="quantity"
                  type="number" 
                  min="1"
                  {...form.register("quantity", { valueAsNumber: true })}
                  placeholder="Number of chickens" 
                  className="mt-2"
                />
                {form.formState.errors.quantity && (
                  <p className="text-red-300 text-sm mt-1">{form.formState.errors.quantity.message}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="deliveryDate" className="text-african-cream font-semibold">Preferred Delivery Date</Label>
                <Input 
                  id="deliveryDate"
                  type="date"
                  {...form.register("deliveryDate")}
                  className="mt-2"
                />
              </div>
              
              <div className="md:col-span-2">
                <Label htmlFor="specialRequests" className="text-african-cream font-semibold">Special Requests</Label>
                <Textarea 
                  id="specialRequests"
                  rows={3}
                  {...form.register("specialRequests")}
                  placeholder="Any special requirements or questions?" 
                  className="mt-2"
                />
              </div>
              
              <div className="md:col-span-2 text-center space-y-4">
                <Button 
                  type="submit" 
                  disabled={orderMutation.isPending}
                  className="bg-african-red hover:bg-african-fire text-white px-12 py-4 text-lg h-auto"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  {orderMutation.isPending ? "Submitting..." : "Submit Order"}
                </Button>
                
                <div className="text-african-cream text-sm">
                  Or order directly via WhatsApp
                </div>
                
                <Button 
                  type="button"
                  onClick={openWhatsApp}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 h-auto"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Order
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
