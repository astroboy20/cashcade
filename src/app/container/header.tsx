import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GamepadIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gray-900 py-4 px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <GamepadIcon className="h-8 w-8 text-yellow-500" />
          <span className="text-2xl font-bold text-white">
            CashCade
          </span>
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="/games" className="text-gray-300 hover:text-white">
            Games
          </Link>
          <Link href="/tournaments" className="text-gray-300 hover:text-white">
            Tournaments
          </Link>
          <Link href="/leaderboard" className="text-gray-300 hover:text-white">
            Leaderboard
          </Link>
          <Link href="/shop" className="text-gray-300 hover:text-white">
            Shop
          </Link>
        </nav>
        <div className="flex space-x-2">
          <Button variant="outline" className="hidden md:inline-flex">
            Log In
          </Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export { Header };
