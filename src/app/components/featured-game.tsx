import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const FeaturedGames=() =>{
  const games = [
    { title: "Space Invaders", image: "/placeholder.svg?height=200&width=300" },
    { title: "Pac-Man", image: "/placeholder.svg?height=200&width=300" },
    { title: "Tetris", image: "/placeholder.svg?height=200&width=300" },
    { title: "Snake", image: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Games</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {games.map((game, index) => (
            <Card key={index} className="bg-gray-800">
              <CardContent className="p-4">
                <Image src={game.image} alt={game.title} width={300} height={200} className="rounded-lg" />
                <h3 className="text-xl font-semibold mt-4 mb-2">{game.title}</h3>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Play Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export {FeaturedGames}