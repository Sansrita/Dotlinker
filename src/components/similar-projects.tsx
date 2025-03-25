import Image from "next/image";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SimilarProjects() {
  const projectImages = ["/Img1.png", "/Img2.png", "/Img3.png"];

  return (
    <div className="mb-8">
      <h3 className="font-medium text-lg mb-4">Similar Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectImages.map((imageSrc, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <div className="relative h-[150px]">
              <Image
                src={imageSrc}
                alt={`Similar property ${index + 1}`}
                fill
                className="object-cover"
              />
              <Button variant="ghost" size="icon" className="absolute top-2 right-2 bg-white/80 rounded-full h-8 w-8">
                <Heart className="h-4 w-4" />
              </Button>
            </div>
            <div className="p-3">
              <h4 className="font-medium text-sm mb-1">Tulip Wadhwa Wise City</h4>
              <div className="text-xs text-gray-500 mb-2">Ulwe, Navi Mumbai</div>
              <div className="flex justify-between items-center">
                <div>
                  <div className="text-xs text-gray-500">Starting From</div>
                  <div className="font-medium text-sm">₹ 1.47 Cr</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Area</div>
                  <div className="font-medium text-sm">936 sq.ft</div>
                </div>
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
