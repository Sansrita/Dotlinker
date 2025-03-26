import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Share, Heart } from "lucide-react";

export default function Description() {
  const [showMap] = useState(true)
  return (
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
              industrys standard dummy text ever since the 1500s when a galley of type and scrambled it to make a type
              specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. Lorem Ipsum has been the industrys standard dummy text ever since the
              1500s when a galley of type and scrambled it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting, remaining essentially unchanged since the 1500s.
            </p>
          </div>

          {/* Overview  */}
          <div className="mt-8 pt-8 border-t">
  <h3 className="font-medium text-lg mb-6">Property Overview</h3>
  <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6">
    <div>
      <div className="text-xs text-gray-500">Carpet Area</div>
      <div className="font-medium">530 sq.ft</div>
    </div>
    <div>
      <div className="text-xs text-gray-500">Bedrooms</div>
      <div className="font-medium">1</div>
    </div>
    <div>
      <div className="text-xs text-gray-500">No. of Balcony</div>
      <div className="font-medium">No Balcony</div>
    </div>
    <div>
      <div className="text-xs text-gray-500">Bathrooms</div>
      <div className="font-medium">1</div>
    </div>
    <div>
      <div className="text-xs text-gray-500">Parking</div>
      <div className="font-medium">1 Open Parking</div>
    </div>
    <div>
      <div className="text-xs text-gray-500">Added</div>
      <div className="font-medium">December 2024</div>
    </div>
    <div>
      <div className="text-xs text-gray-500">Property ID</div>
      <div className="font-medium">12345</div>
    </div>
    <div>
      <div className="text-xs text-gray-500">Rera Number</div>
      <div className="font-medium">987654321</div>
    </div>
    <div>
      <div className="text-xs text-gray-500">Possession Date</div>
      <div className="font-medium">31-12-2025</div>
    </div>
    <div>
      <div className="text-xs text-gray-500">Property Floor</div>
      <div className="font-medium">4 out of 7</div>
    </div>
  </div>
  <div className="flex gap-4 mt-4">
  <Button 
    className="w-[160px] h-[42px] rounded-[4px] bg-[rgba(244,226,222,1)] text-[rgba(229,68,36,1)] flex items-center justify-center gap-2"
  >
    <Share className="w-5 h-5 text-[rgba(229,68,36,1)]" />
    Share
  </Button>

  <Button 
    className="w-[160px] h-[42px] rounded-[4px] bg-[rgba(244,226,222,1)] text-[rgba(229,68,36,1)] flex items-center justify-center gap-2"
  >
    <Heart className="w-5 h-5 text-[rgba(229,68,36,1)]" />
    Save
  </Button>
</div>
</div>


          {/* Amenities*/}

          <div className="mt-8 pt-8 border-t">
  <h3 className="font-bold text-lg mb-4">Amenities</h3> 
  <div className="grid grid-cols-3 md:grid-cols-15 gap-4"> 
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
      <div className="text-sm font-medium text-center">Car Parking</div> 
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
      <div className="text-sm font-medium text-center">Lift</div>
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
      <div className="text-sm font-medium text-center">Power Backup</div>
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
      <div className="text-sm font-medium text-center">Gymnasium</div>
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
            <div className="text-sm font-medium text-center">Park</div>
          </div>
        </div>
      </div>

      {/* Floorplans */ }

<div className="mt-8 pt-8 border-t">
  <h3 className="font-medium text-lg mb-2">Floor Plans</h3>
  <div className="flex gap-2 mb-4">
    <Button
      variant="outline"
      className="bg-blue-500 text-white hover:bg-blue-600 w-[156.14px] h-[37.24px] rounded-[5.82px]"
    >
      1 BHK
    </Button>
    <Button variant="outline" className="w-[156.14px] h-[37.24px] rounded-[5.82px]">
      2 BHK
    </Button>
  </div>
  <div
    className="border border-gray-300 rounded-[11.64px] p-4"
    style={{
      width: "756.07px",
      height: "407.31px",
      borderWidth: "1.16px",
    }}
  >
    <div
      className="relative"
      style={{
        width: "600px",
        height: "407px", 
        top: "100px",
        left: "30px",
      }}
    >
      <Image
        src="/floor-map.png.png"
        alt="Floor plan"
        width={600}
        height={407}
        className="object-contain"
      />
    </div>
  </div>
</div>


          {/* Property Information */ }

          <div className="mt-8 pt-8 border-t">
      <h3 className="font-bold text-lg mb-2">Property Information</h3> {/* Reduced margin-bottom */}
      
      <div
        className="relative rounded-[11.64px] overflow-hidden"
        style={{
          width: "858.07px",
          height: "325.85px",
          top: "79.13px",
          left: "0px",
        }}
      >
       
        <a
          href="https://www.google.com/maps"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 left-2 bg-white px-3 py-1 text-sm font-medium shadow-md rounded-md hover:bg-gray-100"
        >
          View Larger Map
        </a>
        {showMap ? (
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537363153157!3d-37.816279279751524!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%2C%20Australia!5e0!3m2!1sen!2sin!4v1648012906292!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "11.64px" }}
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100">
            <p className="text-gray-500">Map is unavailable</p>
          </div>
        )}
      </div>
    </div>

        </TabsContent>

        
      </Tabs>
    </div>
  )
}
