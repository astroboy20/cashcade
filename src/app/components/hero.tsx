import { Button } from "@/components/ui/button"

const Hero = () =>{
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-900 opacity-75"></div>
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Ultimate Arcade Tournament</h1>
        <p className="text-xl mb-8">Compete, Win, and Dominate the Leaderboards!</p>
        <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900">
          Play Now
        </Button>
      </div>
    </section>
  )
}

export {Hero}