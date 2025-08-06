import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Eye, EyeOff, Phone, MapPin, Calendar, MessageCircle, Mail, Package, Users, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Order {
  id: string;
  name: string;
  phone: string;
  location: string;
  productType: string;
  quantity: number;
  deliveryDate: string | null;
  specialRequests: string | null;
  createdAt: string;
}

interface Contact {
  id: string;
  name: string;
  phone: string;
  productType: string;
  quantity: number;
  location: string;
  createdAt: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("orders");
  const { toast } = useToast();

  // Check if user is already authenticated
  useEffect(() => {
    const auth = sessionStorage.getItem("adminAuth");
    if (auth === "authenticated") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setIsAuthenticated(true);
      sessionStorage.setItem("adminAuth", "authenticated");
      toast({
        title: "Login Successful",
        description: "Welcome to the admin panel",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("adminAuth");
    setUsername("");
    setPassword("");
  };

  const ordersQuery = useQuery({
    queryKey: ['/api/orders'],
    enabled: isAuthenticated,
  });

  const contactsQuery = useQuery({
    queryKey: ['/api/contacts'],
    enabled: isAuthenticated,
  });

  const orders: Order[] = (ordersQuery.data as Order[]) || [];
  const contacts: Contact[] = (contactsQuery.data as Contact[]) || [];

  const openWhatsApp = (phone: string, name: string, productType: string, quantity: number) => {
    const cleanPhone = phone.replace(/\D/g, '');
    const formattedPhone = cleanPhone.startsWith('254') ? cleanPhone : `254${cleanPhone.slice(-9)}`;
    const message = encodeURIComponent(
      `Hello ${name}! Thank you for your order. We're processing your request for ${quantity} ${productType} chicken(s). We'll confirm delivery details shortly.`
    );
    window.open(`https://wa.me/${formattedPhone}?text=${message}`, '_blank');
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-african-brown via-african-peru to-african-orange flex items-center justify-center p-4">
        <div className="pattern-overlay absolute inset-0"></div>
        <Card className="w-full max-w-md relative z-10">
          <CardHeader className="text-center">
            <div className="relative inline-block mb-4">
              <div className="geometric-accent absolute -top-4 -left-4"></div>
              <CardTitle className="text-2xl font-bold text-african-dark">Admin Login</CardTitle>
            </div>
            <p className="text-gray-600">Access the Kienyeji Fresh Farm admin panel</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <Button type="submit" className="w-full bg-african-orange hover:bg-african-fire">
                Sign In
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-african-dark">Kienyeji Fresh Farm Admin</h1>
            <p className="text-gray-600">Manage orders and customer inquiries</p>
          </div>
          <Button onClick={handleLogout} variant="outline">
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Package className="h-8 w-8 text-african-orange" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-2xl font-bold text-african-dark">{orders.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Contact Inquiries</p>
                  <p className="text-2xl font-bold text-african-dark">{contacts.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Clock className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Today's Orders</p>
                  <p className="text-2xl font-bold text-african-dark">
                    {orders.filter(order => 
                      new Date(order.createdAt).toDateString() === new Date().toDateString()
                    ).length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-200 rounded-lg p-1">
            <Button
              variant={activeTab === "orders" ? "default" : "ghost"}
              onClick={() => setActiveTab("orders")}
              className="flex-1"
            >
              Orders ({orders.length})
            </Button>
            <Button
              variant={activeTab === "contacts" ? "default" : "ghost"}
              onClick={() => setActiveTab("contacts")}
              className="flex-1"
            >
              Contacts ({contacts.length})
            </Button>
          </div>
        </div>

        {/* Orders Tab */}
        {activeTab === "orders" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-african-dark mb-4">Customer Orders</h2>
            {orders.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <Package className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No orders yet. They'll appear here when customers place orders.</p>
                </CardContent>
              </Card>
            ) : (
              orders.map((order: Order) => (
                <Card key={order.id} className="hover:shadow-lg transition duration-200">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-bold text-lg text-african-dark mb-2">{order.name}</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2" />
                            {order.phone}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {order.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {new Date(order.createdAt).toLocaleDateString('en-KE')}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-african-dark mb-2">Order Details</h4>
                        <div className="space-y-2">
                          <Badge variant={order.productType === 'live' ? 'default' : 'secondary'}>
                            {order.productType === 'live' ? 'Live Chicken' : 'Cleaned Chicken'}
                          </Badge>
                          <p className="text-sm">Quantity: <span className="font-semibold">{order.quantity}</span></p>
                          {order.deliveryDate && (
                            <p className="text-sm">Delivery: <span className="font-semibold">{order.deliveryDate}</span></p>
                          )}
                          {order.specialRequests && (
                            <p className="text-sm">Notes: <span className="italic">{order.specialRequests}</span></p>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button
                          onClick={() => openWhatsApp(order.phone, order.name, order.productType, order.quantity)}
                          className="bg-green-600 hover:bg-green-700"
                          size="sm"
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp Customer
                        </Button>
                        <Button
                          onClick={() => window.open(`tel:${order.phone}`)}
                          variant="outline"
                          size="sm"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Call Customer
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}

        {/* Contacts Tab */}
        {activeTab === "contacts" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-african-dark mb-4">Customer Inquiries</h2>
            {contacts.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">No inquiries yet. They'll appear here when customers contact you.</p>
                </CardContent>
              </Card>
            ) : (
              contacts.map((contact: Contact) => (
                <Card key={contact.id} className="hover:shadow-lg transition duration-200">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h3 className="font-bold text-lg text-african-dark mb-2">{contact.name}</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Phone className="h-4 w-4 mr-2" />
                            {contact.phone}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-2" />
                            {contact.location}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2" />
                            {new Date(contact.createdAt).toLocaleDateString('en-KE')}
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-african-dark mb-2">Interest</h4>
                        <div className="space-y-2">
                          <Badge variant={contact.productType === 'live' ? 'default' : 'secondary'}>
                            {contact.productType === 'live' ? 'Live Chicken' : 'Cleaned Chicken'}
                          </Badge>
                          <p className="text-sm">Interested in: <span className="font-semibold">{contact.quantity} bird(s)</span></p>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button
                          onClick={() => openWhatsApp(contact.phone, contact.name, contact.productType, contact.quantity)}
                          className="bg-green-600 hover:bg-green-700"
                          size="sm"
                        >
                          <MessageCircle className="h-4 w-4 mr-2" />
                          WhatsApp Customer
                        </Button>
                        <Button
                          onClick={() => window.open(`tel:${contact.phone}`)}
                          variant="outline"
                          size="sm"
                        >
                          <Phone className="h-4 w-4 mr-2" />
                          Call Customer
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}