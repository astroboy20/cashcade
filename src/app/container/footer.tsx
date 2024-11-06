import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const Footer =()=> {
  return (
    <footer className="bg-gray-950 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">Ultimate gaming experience with exciting tournaments and amazing prizes.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="text-sm hover:text-white">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-sm hover:text-white">Contact Us</Link></li>
              <li><Link href="/help" className="text-sm hover:text-white">Help Center</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm">&copy; 2023 Ultimate Arcade Tournament. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export {Footer}