"use client";

import Image from "next/image"
import { Heart, Share2, Phone, Mail, MessageSquare, Check, ChevronRight, Bell } from "lucide-react"
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import SimilarProjects from "@/components/similar-projects"

export default function PropertyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-white">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="text-xl font-bold">
            <span className="text-black">Dot</span>
            <span className="text-red-500">linker</span>
          </div>
          <nav className="hidden md:flex space-x-6 mx-auto">
            <a href="#" className="text-sm hover:text-red-500">
              For Property
            </a>
            <a href="#" className="text-sm hover:text-red-500">
              About Us
            </a>
            <a href="#" className="text-sm hover:text-red-500">
              Insights
            </a>
            <a href="#" className="text-sm hover:text-red-500">
              Contact Us
            </a>
          </nav>
          <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:flex items-center space-x-2 text-red-500 hover:bg-transparent">
            <Plus className="w-4 h-4 text-orange-500" /> {/* Small orange plus icon */}
              <span>Customize Property</span>
                </Button>
            <div className="relative">
              <Button variant="ghost" size="icon" className="text-red-500">
                <div className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    2
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          {/* Property Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] mb-8">
  <div className="h-[300px] md:h-[500px] relative rounded-lg overflow-hidden">
    <Image
      src="/list1.png"
      alt="Property exterior"
      width={600}
      height={500}
      className="object-cover"
    />
  </div>
  <div className="grid grid-cols-1 md:grid-rows-2 gap-[10px]">
    <div className="h-[150px] md:h-[245px] relative rounded-lg overflow-hidden">
      <Image
        src="/list2.png"
        alt="Modern interior"
        width={600}
        height={500}
        className="object-cover"
      />
    </div>
    <div className="h-[150px] md:h-[245px] relative rounded-lg overflow-hidden">
      <Image
        src="/list3.png"
        alt="Stylish living room"
        width={600}
        height={500}
        className="object-cover"
      />
      <div className="absolute bottom-4 right-4">
        <Button size="sm" variant="outline" className="text-xs">
          View photos (4)
        </Button>
      </div>
    </div>
  </div>
</div>


          {/* Property Title and Actions */}
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-2xl md:text-3xl font-bold">Tulip Wadhwa Wise City</h1>
                <Button variant="ghost" size="icon" className="text-red-500">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm mb-2">
                <div className="flex items-center gap-2">
                  <span>5 beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>4 baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>1,344 sqft</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                <span>Ulwe, Navi Mumbai</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
        <Badge variant="outline" className="text-white border-transparent" style={{ background: 'rgba(0, 168, 132, 1)' }}>
          Verified Listing
        </Badge>
        <Badge variant="outline" className="text-white border-transparent" style={{ background: 'rgba(0, 168, 132, 1)' }}>
          RERA
        </Badge>
        <Badge variant="outline" className="text-white border-transparent" style={{ background: 'rgba(0, 168, 132, 1)' }}>
          25+ Amenities
        </Badge>
      </div>
            </div>

            <div className="p-4 border rounded-lg shadow-md bg-white text-black" style={{ width: '415px', height: '280px' }}>
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full overflow-hidden border border-gray-400">
          <Image src="/user.png" alt="Agent" width={64} height={64} className="object-cover" />
        </div>
        <div>
          <div className="text-lg font-semibold text-indigo-600">Nakshathra</div>
          <div className="text-sm text-gray-600">Pro Advizar</div>
          <div className="text-sm text-gray-600">Real Estate</div>
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <Button className="bg-teal-600 hover:bg-teal-700 text-white" style={{ width: '119.74px', height: '43.06px', borderRadius: '5.82px' }}>
          <Phone className="h-4 w-4 mr-2" /> Call
        </Button>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white" style={{ width: '119.74px', height: '43.06px', borderRadius: '5.82px' }}>
          <Mail className="h-4 w-4 mr-2" /> Email
        </Button>
        <Button className="bg-green-600 hover:bg-green-700 text-white" style={{ width: '119.74px', height: '43.06px', borderRadius: '5.82px' }}>
          <MessageSquare className="h-4 w-4" />
        </Button>
      </div>
      <div className="mt-4 text-sm text-blue-600 flex items-center cursor-pointer" style={{ width: '119.74px', height: '43.06px', borderRadius: '5.82px' }}>
        View all properties <ChevronRight className="h-4 w-4 ml-1" />
      </div>
    </div>
          </div>

          {/* Main Content Area with Left and Right Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Construction Status and Apartment Options */}
            <div className="lg:col-span-2">
              {/* Construction Status */}
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="text-xs uppercase text-gray-500 mb-2">CONSTRUCTION STATUS</div>
                <div className="font-medium">Under Construction</div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-red-500"></div>
                  <h2 className="text-xl font-bold">₹ 1.47 - 3.77 Cr</h2>
                  <span className="text-xs text-red-500">View Tax</span>
                </div>
                <div className="text-sm text-gray-500 mt-1">2,3,4,5 BHK Apartment</div>
              </div>

              {/* Apartment Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="font-medium mb-2">2 BHK Apartment</div>
                  <div className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">₹ 1.47 Cr</span> onwards
                  </div>
                  <div className="text-xs text-gray-500 mb-2">₹ 10,900 / sq ft (₹ 1,17,283 sq.m)</div>
                  <div className="text-sm font-medium">1.47 - 1.56 Cr</div>
                  <div className="text-xs text-red-500">Changes</div>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="font-medium mb-2">3 BHK Apartment</div>
                  <div className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">₹ 2.47 Cr</span> onwards
                  </div>
                  <div className="text-xs text-gray-500 mb-2">₹ 10,900 / sq ft (₹ 1,17,283 sq.m)</div>
                  <div className="text-sm font-medium">2.47 - 2.56 Cr</div>
                  <div className="text-xs text-red-500">Changes</div>
                </div>
                <div className="bg-red-50 rounded-lg p-4">
                  <div className="font-medium mb-2">4 BHK Apartment</div>
                  <div className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">₹ 3.47 Cr</span> onwards
                  </div>
                  <div className="text-xs text-gray-500 mb-2">₹ 10,900 / sq ft (₹ 1,17,283 sq.m)</div>
                  <div className="text-sm font-medium">3.47 - 3.56 Cr</div>
                  <div className="text-xs text-red-500">Changes</div>
                </div>
              </div>
            </div>

            {/* Right Column - Offers and Why Buy */}
            <div className="lg:col-span-1">
              {/* Offers Section */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Offers Popup or blinker</h3>
              </div>

              {/* Why You Should Buy */}
              <div className="mb-6">
                <h3 className="font-medium mb-4">Why you should buy Kalpataru Vienta?</h3>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-red-500 text-white">NEW LAUNCH Benefits</Badge>
                  </div>
                  <div className="text-xs text-gray-600 mb-4">
                    • Special Offer of 2.99% stamp duty + Zero Registration Fees
                  </div>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Just 5 mins to Western Express Highway</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>15 Min International Airport (Proposed)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Excellent connectivity to BKC</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Panoramic podium amenity views from deck</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>Spacious luxury apartments with views</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full mt-4 border-red-500 text-red-500 hover:bg-red-50">
                    Brochure
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Description Tabs - Full Width */}
          <div className="mb-8">
            <Tabs defaultValue="description">
              <TabsList className="border-b w-full justify-start rounded-none bg-transparent p-0 mb-4">
                <TabsTrigger
                  value="description"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-500 data-[state=active]:text-red-500 data-[state=active]:shadow-none px-4 py-2"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="overview"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-500 data-[state=active]:text-red-500 data-[state=active]:shadow-none px-4 py-2"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger
                  value="amenities"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-500 data-[state=active]:text-red-500 data-[state=active]:shadow-none px-4 py-2"
                >
                  Amenities
                </TabsTrigger>
                <TabsTrigger
                  value="floorplans"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-500 data-[state=active]:text-red-500 data-[state=active]:shadow-none px-4 py-2"
                >
                  Floor Plans
                </TabsTrigger>
                <TabsTrigger
                  value="propertyinfo"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-red-500 data-[state=active]:text-red-500 data-[state=active]:shadow-none px-4 py-2"
                >
                  Property Info
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description">
                <div className="space-y-4">
                  <h3 className="font-medium text-lg">Description</h3>
                  <p className="text-sm text-gray-600">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industrys standard dummy text ever since the 1500s when a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries, but also the leap into electronic
                    typesetting, remaining essentially unchanged. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s when a galley of type and scrambled it to make a type specimen book. It
                    has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged since the 1500s.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="overview">
                <div className="space-y-6">
                  <h3 className="font-medium text-lg">Property Overview</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6">
                    <div>
                      <div className="text-xs text-gray-500">Carpet Area</div>
                      <div className="font-medium">936 sq.ft</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Bedrooms</div>
                      <div className="font-medium">3</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">No. of Balcony</div>
                      <div className="font-medium">No Balcony</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Bathrooms</div>
                      <div className="font-medium">2</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Parking</div>
                      <div className="font-medium">1 Open Parking</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Added</div>
                      <div className="font-medium">December 2023</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Property ID</div>
                      <div className="font-medium">12345</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Rera Number</div>
                      <div className="font-medium">MH/REG/12345</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Possession Date</div>
                      <div className="font-medium">Dec 2025</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500">Property Type</div>
                      <div className="font-medium">Apartment</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="amenities">
                <div className="space-y-6">
                  <h3 className="font-medium text-lg">Amenities</h3>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-6">
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </div>
                      <div className="text-xs text-center">Car Parking</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                      <div className="text-xs text-center">CCTV</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
                          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
                          <line x1="12" y1="20" x2="12" y2="20" />
                        </svg>
                      </div>
                      <div className="text-xs text-center">Wifi</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </div>
                      <div className="text-xs text-center">Security</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-10 w-10 flex items-center justify-center bg-gray-100 rounded-full mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                      </div>
                      <div className="text-xs text-center">Parks</div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="floorplans">
                <div className="space-y-6">
                  <h3 className="font-medium text-lg">Floor Plans</h3>
                  <div className="flex gap-2 mb-4">
                    <Button variant="outline" className="bg-blue-500 text-white hover:bg-blue-600">
                      1 BHK
                    </Button>
                    <Button variant="outline">2 BHK</Button>
                  </div>
                  <div className="border p-4 rounded-lg">
                    <div className="relative h-[300px] w-full">
                      <Image
                        src="/placeholder.svg?height=300&width=600"
                        alt="Floor plan"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="propertyinfo">
                <div className="space-y-6">
                  <h3 className="font-medium text-lg">Property Information</h3>
                  <div className="relative h-[300px] w-full rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=600"
                      alt="Property map"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Similar Projects Section */}
          <SimilarProjects />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

