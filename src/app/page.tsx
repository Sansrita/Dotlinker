"use client";

import Image from "next/image"
import { Heart, Share2, Phone, Mail, ArrowRight, Check } from "lucide-react"
import { Plus } from "lucide-react";
import { User } from "lucide-react";
import { Button } from "@/components/ui/button"
import Description from "@/components/description";
import { Badge } from "@/components/ui/badge"
import Footer from "@/components/footer"
import SimilarProjects from "@/components/similar-projects"
import Link from "next/link"

export default function PropertyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b sticky top-0 z-50 bg-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="text-black">Dot</span>
          <span className="text-red-500">linker</span>
        </div>

        {/* Nav */}
        <nav className="hidden md:flex space-x-6 mx-auto">
          <a href="#" className="text-sm hover:text-red-500">For Property</a>
          <a href="#about-us" className="text-sm hover:text-red-500">About Us</a>
          <a href="#similar-projects" className="text-sm hover:text-red-500">Insights</a>
          <a href="#footer" className="text-sm hover:text-red-500">Contact Us</a>
        </nav>

        {/* Right-side Buttons */}
        <div className="flex items-center space-x-4">
          {/* Customize Property Button */}
          <Button variant="ghost" className="hidden md:flex items-center space-x-2 text-red-500 hover:bg-transparent">
            <Plus className="w-4 h-4 text-[rgba(229,68,36,1)]" />
            <span>Customize Property</span>
          </Button>
          <div className="relative">
            <Button variant="ghost" size="icon" className="text-black relative">
              <User className="w-[18px] h-[18px]" />

              <span className="absolute top-[3px] right-[-5px] w-[9px] h-[9px] bg-[rgba(255,13,13,1)] rounded-full"></span>
            </Button>
          </div>
        </div>
      </div>
    </header>

    <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          {/* Property Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8">
            <div className="h-[300px] md:h-[500px] relative rounded-lg overflow-hidden">
              <Image
                src="/list1.png?height=500&width=600"
                alt="Property exterior"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-rows-2 gap-2">
              <div className="h-[150px] md:h-[245px] relative rounded-lg overflow-hidden">
                <Image
                  src="/list2.png?height=245&width=600"
                  alt="Property interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="h-[150px] md:h-[245px] relative rounded-lg overflow-hidden">
                <Image
                  src="/list3.png?height=245&width=600"
                  alt="Property interior"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-4 right-4">
                  <Button size="sm" variant="secondary" className="text-xs">
                    View photos (4)
                  </Button>
                </div>
              </div>
            </div>
          </div>

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
              <div className="flex flex-wrap gap-2 mb-4 items-center">
  
  <div
    className="flex items-center gap-2 px-4 py-1 bg-white shadow-md border border-gray-300"
    style={{
      width: "180px",
      height: "31px",
      borderRadius: "23.27px",
      boxShadow: "0px 4.65px 9.31px 0px rgba(0, 0, 0, 0.12)",
    }}
  >
    <div
      style={{
        width: "8.14px",
        height: "8.14px",
        borderRadius: "4.07px",
        background: "rgba(0, 178, 147, 1)",
      }}
    />
    <span className="text-black text-sm font-medium">For Sale</span>
  </div>

  {["Verified Listing", "RERA", "25+ Amenities"].map((text, index) => (
    <Badge
      key={index}
      variant="outline"
      className="text-white border-transparent flex items-center justify-center"
      style={{
        background: "rgba(0, 168, 132, 1)",
        width: "190px",
        height: "36px",
        borderRadius: "23.27px",
      }}
    >
      {text}
    </Badge>
  ))}
</div>

            </div>

            <div
  className="p-5 border rounded-[11.64px] shadow-md bg-white text-black"
  style={{ width: "415px", height: "254px", borderWidth: "1.16px" }}
>
  <div className="flex items-center gap-4">
    {/* Agent Profile Image */}
    <div className="h-16 w-16 rounded-full overflow-hidden border border-gray-400">
      <Image src="/user.png" alt="Agent" width={64} height={64} className="object-cover" />
    </div>
    {/* Agent Info */}
    <div>
      <div className="text-lg font-semibold text-indigo-600">Nakshathra</div>
      <div className="text-sm text-gray-600">Pro Advizar</div>
      <div className="text-sm text-gray-600">Real Estate</div>
    </div>
  </div>

  {/* Spacer Before Buttons */}
  <div className="h-2"></div>

  {/* Buttons */}
  <div className="grid grid-cols-3 gap-3 mb-4">
    {/* Call Button */}
    <Button
      className="bg-[#006169] hover:bg-opacity-80 text-white flex items-center justify-center gap-2 rounded-md"
    >
      <Phone className="h-4 w-4" />
      Call
    </Button>

    {/* Email Button */}
    <Button
      className="bg-[#4081FF] hover:bg-opacity-80 text-white flex items-center justify-center gap-2 rounded-md"
    >
      <Mail className="h-4 w-4" />
      Email
    </Button>

    {/* WhatsApp Button */}
    <Button
      className="bg-[#25B26E] hover:bg-opacity-80 text-white flex items-center justify-center gap-2 rounded-md"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="white"
        className="h-4 w-4"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </Button>
  </div>

  {/* View All Properties Link */}
  <div className="flex justify-end">
    <Link href="#" className="text-blue-500 flex items-center text-sm font-medium">
      View all properties <ArrowRight className="ml-1 h-4 w-4" />
    </Link>
  </div>
</div>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="text-xs uppercase text-gray-500 mb-2">CONSTRUCTION STATUS</div>
                <div className="font-medium">Under Construction</div>
              </div>

              
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

          
            <div className="lg:col-span-1 relative bg-white p-6 rounded-lg shadow-md">
              <div className="mb-6">
                <h3 className="font-medium mb-4">Offers Popup or blinker</h3>
              </div>
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

          {/* Description Tab */}

          <Description />
          

          {/* Similar Projects  */}
          <SimilarProjects />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

