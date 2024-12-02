import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'
// import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">GameWar</h3>
            <p className="text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-600">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-blue-600">About Us</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-blue-600">FAQ</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-blue-600">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-sm hover:text-blue-600">Contact Us</Link></li>
              <li><Link href="/sitemap" className="text-sm hover:text-blue-600">Sitemap</Link></li>
              <li><Link href="/careers" className="text-sm hover:text-blue-600">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter to get our news & deals delivered to you.</p>
            <form className="flex flex-col space-y-2">
              <input type="email" placeholder="Email Address" className="bg-white border-gray-300" />
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm">&copy; 2023 GameWar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }

