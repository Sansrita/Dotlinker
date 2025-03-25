import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/seperator"

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="text-xl font-bold mb-4">
              <span className="text-white">Dot</span>
              <span className="text-red-500">linker</span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac commodo augue, eget scelerisque lacus.
            </p>
            <div className="flex space-x-2">
  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 border-white">
    <Facebook className="h-4 w-4 text-white" />
  </Button>
  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 border-white">
    <Twitter className="h-4 w-4 text-white" />
  </Button>
  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 border-white">
    <Instagram className="h-4 w-4 text-white" />
  </Button>
  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 border-white">
    <Linkedin className="h-4 w-4 text-white" />
  </Button>
  <Button variant="outline" size="icon" className="rounded-full h-8 w-8 border-white">
    <Youtube className="h-4 w-4 text-white" />
  </Button>
</div>

          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">QUICK LINKS</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Insights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy & Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">ADDRESS</h4>
            <p className="text-sm text-gray-400 mb-4">
              7782 Sunset Avenue, Montclair,
              <br />
              Maine, 07082, South Africa
            </p>
            <h4 className="text-lg font-medium mb-4 mt-6">CONTACT</h4>
            <p className="text-sm text-gray-400">+91 9123456789</p>
            <p className="text-sm text-gray-400">info@dotlinker.com</p>
          </div>
        </div>
        <Separator className="bg-gray-800 mb-6" />
        <div className="text-xs text-gray-500 text-center">Copyright © 2024. All Rights Reserved.</div>
      </div>
    </footer>
  )
}

