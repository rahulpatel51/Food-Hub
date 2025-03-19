import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { MapPin, CreditCard, Clock, Settings, User, Heart } from "lucide-react"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="mb-6 text-3xl font-bold">My Profile</h1>

          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-6 grid w-full grid-cols-2 md:grid-cols-6">
              <TabsTrigger value="profile" className="flex items-center gap-2">
                <User className="h-4 w-4" /> Profile
              </TabsTrigger>
              <TabsTrigger value="orders" className="flex items-center gap-2">
                <Clock className="h-4 w-4" /> Orders
              </TabsTrigger>
              <TabsTrigger value="addresses" className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Addresses
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" /> Payments
              </TabsTrigger>
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Heart className="h-4 w-4" /> Favorites
              </TabsTrigger>
              <TabsTrigger value="settings" className="flex items-center gap-2">
                <Settings className="h-4 w-4" /> Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details here.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="space-y-2 md:w-1/2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue="Rahul Patel" />
                    </div>
                    <div className="space-y-2 md:w-1/2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="ra.rahul11131@gmail.com" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-6 md:flex-row">
                    <div className="space-y-2 md:w-1/2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+91 9555240956" readOnly />
                    </div>
                    <div className="space-y-2 md:w-1/2">
                      <Label htmlFor="dob">Date of Birth</Label>
                      <Input id="dob" type="date" defaultValue="2003-03-30" />
                    </div>
                  </div>
                  <Button className="mt-4 bg-orange-600 hover:bg-orange-700">Save Changes</Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="orders">
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>View all your past orders.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((order) => (
                      <div key={order} className="rounded-lg border p-4">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <p className="font-medium">Order #{order}23456</p>
                            <p className="text-sm text-muted-foreground">Placed on {new Date().toLocaleDateString()}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">₹{order * 250}</p>
                            <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                              Delivered
                            </span>
                          </div>
                        </div>
                        <div className="mt-4">
                          <p className="text-sm">Spice Garden • 2 items</p>
                          <p className="text-xs text-muted-foreground">Butter Chicken, Garlic Naan</p>
                        </div>
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-orange-600 text-orange-600 hover:bg-orange-50"
                          >
                            Reorder
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="addresses">
              <Card>
                <CardHeader>
                  <CardTitle>Saved Addresses</CardTitle>
                  <CardDescription>Manage your delivery addresses.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-medium">Home</p>
                            <span className="rounded-full bg-orange-100 px-2 py-0.5 text-xs font-medium text-orange-800">
                              Default
                            </span>
                          </div>
                          <p className="mt-1 text-sm">123 Main Street, Apartment 4B</p>
                          <p className="text-sm">Koramangala, Bangalore, 560034</p>
                          <p className="mt-1 text-sm text-muted-foreground">+91 9876543210</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-medium">Work</p>
                          <p className="mt-1 text-sm">456 Tech Park, 5th Floor</p>
                          <p className="text-sm">Whitefield, Bangalore, 560066</p>
                          <p className="mt-1 text-sm text-muted-foreground">+91 9876543210</p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>

                    <Button className="mt-4 w-full bg-orange-600 hover:bg-orange-700">Add New Address</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="payments">
              <Card>
                <CardHeader>
                  <CardTitle>Payment Methods</CardTitle>
                  <CardDescription>Manage your payment options.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-16 items-center justify-center rounded bg-blue-100">
                            <span className="font-medium text-blue-800">VISA</span>
                          </div>
                          <div>
                            <p className="font-medium">Visa ending in 4242</p>
                            <p className="text-sm text-muted-foreground">Expires 12/25</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-16 items-center justify-center rounded bg-red-100">
                            <span className="font-medium text-red-800">MC</span>
                          </div>
                          <div>
                            <p className="font-medium">Mastercard ending in 8888</p>
                            <p className="text-sm text-muted-foreground">Expires 10/24</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          Remove
                        </Button>
                      </div>
                    </div>

                    <Button className="mt-4 w-full bg-orange-600 hover:bg-orange-700">Add New Payment Method</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="favorites">
              <Card>
                <CardHeader>
                  <CardTitle>Favorite Restaurants & Dishes</CardTitle>
                  <CardDescription>Your saved favorites for quick ordering.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Favorite Restaurants</h3>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="rounded-lg border">
                            <div className="relative h-32">
                              <img
                                src={`https://images.unsplash.com/photo-151424896980-cf78c088247c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3`}
                                alt="Restaurant"
                                className="h-full w-full rounded-t-lg object-cover"
                              />
                              <Button
                                variant="ghost"
                                size="icon"
                                className="absolute right-2 top-2 h-8 w-8 rounded-full bg-white/80"
                              >
                                <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                              </Button>
                            </div>
                            <div className="p-3">
                              <h4 className="font-medium">Spice Garden</h4>
                              <p className="text-sm text-muted-foreground">North Indian • 4.5 ★</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="mb-4 text-lg font-medium">Favorite Dishes</h3>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="flex rounded-lg border">
                            <div className="h-24 w-24 flex-shrink-0">
                              <img
                                src={`https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3`}
                                alt="Dish"
                                className="h-full w-full rounded-l-lg object-cover"
                              />
                            </div>
                            <div className="flex flex-1 flex-col justify-between p-3">
                              <div>
                                <h4 className="font-medium">Butter Chicken</h4>
                                <p className="text-sm text-muted-foreground">Spice Garden</p>
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="font-medium">₹349</span>
                                <Button size="sm" className="h-8 bg-orange-600 hover:bg-orange-700">
                                  Reorder
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account preferences.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select id="language" className="w-full rounded-md border border-input bg-background px-3 py-2">
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Tamil</option>
                      <option>Telugu</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label>Notifications</Label>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <p className="font-medium">Order Updates</p>
                          <p className="text-sm text-muted-foreground">Get notified about your order status</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="order-updates"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-lg border p-3">
                        <div>
                          <p className="font-medium">Promotional Emails</p>
                          <p className="text-sm text-muted-foreground">Receive offers and marketing communications</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            id="promo-emails"
                            className="h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button className="mt-4 bg-orange-600 hover:bg-orange-700">Save Preferences</Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}

