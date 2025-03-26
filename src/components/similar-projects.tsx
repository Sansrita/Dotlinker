'use client';

import Image from "next/image";
import { Heart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SimilarProjects() {
  const projects = [
    {
      name: "Tulip Wadhwa Wise City",
      location: "Ulwe, Navi Mumbai",
      image: "/Img2.png",
      price1BHK: "₹15 - 25 L",
      price2BHK: "₹25 L - 30 L",
      verified: true,
    },
    {
      name: "Balaji Symphony",
      location: "Karwar, Navi Mumbai",
      image: "/Img3.png",
      price1BHK: "₹11 - 25 L",
      price2BHK: "₹25 L - 40 L",
      verified: false,
    },
    {
      name: "Marathon",
      location: "Ulwe, Navi Mumbai",
      image: "/Img1.png",
      price1BHK: "₹16 - 26 L",
      price2BHK: "₹26 L - 30 L",
      verified: false,
    },
    {
      name: "Olympia",
      location: "Navi Mumbai",
      image: "/Img4.png",
      price1BHK: "₹16 - 26 L",
      price2BHK: "₹26 L - 30 L",
      verified: true,
    },
    {
      name: "Tulip Wadhwa Wise City",
      location: "Ulwe, Navi Mumbai",
      image: "/Img2.png",
      price1BHK: "₹15 - 25 L",
      price2BHK: "₹25 L - 30 L",
      verified: true,
    },
  ];

  return (
    <div className="pt-8 mb-8"> {/* Added padding-top */}
      <h3 className="font-medium text-lg mb-4">Similar Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="relative h-[200px] w-full">
              <Image
                src={project.image}
                alt={project.name}
                layout="fill"
                objectFit="cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-white/80 rounded-full h-8 w-8"
              >
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-3">
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-medium text-sm">{project.name}</h4>
                {project.verified && index === 0 ? (
                  <div className="flex items-center space-x-1">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-xs text-black font-medium">Verified</span>
                  </div>
                ) : project.verified ? (
                  <div>
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  </div>
                ) : null}
              </div>
              <div className="text-xs text-gray-500 mb-2">{project.location}</div>
              <div className="text-xs">
                <div>1 BHK Apartment: <span className="font-medium">{project.price1BHK}</span></div>
                <div>2 BHK Apartment: <span className="font-medium">{project.price2BHK}</span></div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-3 text-xs">
                View more details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
