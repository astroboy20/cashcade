import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Play, Trophy, Users, Zap } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="absolute inset-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Hero Background"
          width={1920}
          height={1080}
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/50" />
      </div>
      <div className="relative container mx-auto h-full flex flex-col items-center justify-center text-center px-4 py-16">
        <div className="max-w-4xl space-y-8">
          <div className="inline-block animate-bounce">
            <span className="inline-flex items-center rounded-full bg-yellow-400 px-4 py-1.5 text-sm font-medium text-blue-900">
              New Tournament Starting Soon!
            </span>
          </div>
          <h1 className="text-5xl font-extrabold leading-tight sm:text-6xl lg:text-7xl text-white drop-shadow-lg">
            Unleash Your Gaming <br />
            <span className="text-yellow-400">Potential</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow">
            Join the ultimate gaming experience. Compete with players worldwide, win amazing prizes, and become a legend in the gaming universe.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-6 text-lg rounded-full transition-transform hover:scale-105">
              <Play className="mr-2 h-6 w-6" /> Play Now
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-blue-100 text-blue-100 hover:bg-blue-100/10 font-bold px-8 py-6 text-lg rounded-full transition-transform hover:scale-105">
              View Tournaments
            </Button>
          </div>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white max-w-4xl w-full">
          <div className="flex flex-col items-center space-y-2 bg-blue-800/50 p-6 rounded-lg backdrop-blur-sm">
            <Users className="h-12 w-12 text-yellow-400" />
            <h4 className="text-2xl font-bold">10K+</h4>
            <p className="text-blue-100">Active Players</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-blue-800/50 p-6 rounded-lg backdrop-blur-sm">
            <Trophy className="h-12 w-12 text-yellow-400" />
            <h4 className="text-2xl font-bold">$50K</h4>
            <p className="text-blue-100">Prize Pool</p>
          </div>
          <div className="flex flex-col items-center space-y-2 bg-blue-800/50 p-6 rounded-lg backdrop-blur-sm">
            <Zap className="h-12 w-12 text-yellow-400" />
            <h4 className="text-2xl font-bold">24/7</h4>
            <p className="text-blue-100">Live Support</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export { Hero }

