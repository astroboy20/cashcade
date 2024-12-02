import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, ShoppingCart, User } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white py-4 px-6 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-blue-600">
            GameWar
          </span>
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            Home
          </Link>
          <Link href="/features" className="text-gray-600 hover:text-blue-600">
            Features
          </Link>
          <Link href="/elements" className="text-gray-600 hover:text-blue-600">
            Elements
          </Link>
          <Link href="/games" className="text-gray-600 hover:text-blue-600">
            Games
          </Link>
          <Link href="/streamers" className="text-gray-600 hover:text-blue-600">
            Streamers
          </Link>
          <Link href="/news" className="text-gray-600 hover:text-blue-600">
            News
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-600 hover:text-blue-600">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export { Header }

