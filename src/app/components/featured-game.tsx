"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

interface Player {
  rank: number
  name: string
  score: number
}

interface Game {
  id: number
  title: string
  image: string
  silverPrize: string
  goldPrize: string
}

const games: Game[] = [
  {
    id: 1,
    title: "Space Warriors",
    image: "/placeholder.svg?height=400&width=600",
    silverPrize: "$1,000",
    goldPrize: "$5,000"
  },
  {
    id: 2,
    title: "Cyber Racers",
    image: "/placeholder.svg?height=400&width=600",
    silverPrize: "$800",
    goldPrize: "$4,000"
  },
  {
    id: 3,
    title: "Fantasy Legends",
    image: "/placeholder.svg?height=400&width=600",
    silverPrize: "$1,200",
    goldPrize: "$6,000"
  }
]

const samplePlayers: Player[] = [
  { rank: 1, name: "Player1", score: 10000 },
  { rank: 2, name: "Player2", score: 9500 },
  { rank: 3, name: "Player3", score: 9000 },
  { rank: 4, name: "Player4", score: 8500 },
  { rank: 5, name: "Player5", score: 8000 }
]

export function FeaturedGames() {
  const [currentGameIndex, setCurrentGameIndex] = useState(0)

  const nextGame = () => {
    setCurrentGameIndex((prevIndex) => (prevIndex + 1) % games.length)
  }

  const prevGame = () => {
    setCurrentGameIndex((prevIndex) => (prevIndex - 1 + games.length) % games.length)
  }

  const currentGame = games[currentGameIndex]

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Featured Games</h2>
          <p className="text-gray-600">
            Check out our most popular games and their current leaderboards
          </p>
        </div>
        <Card className="bg-white border-2 border-gray-200 overflow-hidden">
          <CardHeader className="bg-gray-50 p-4 flex flex-row items-center justify-between">
            <Button variant="ghost" onClick={prevGame}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <h3 className="text-2xl font-bold text-center text-gray-800">{currentGame.title}</h3>
            <Button variant="ghost" onClick={nextGame}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={currentGame.image}
                    alt={currentGame.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex justify-center">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <Play className="mr-2 h-5 w-5" /> Play Now
                  </Button>
                </div>
              </div>
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-center text-gray-800">Silver League</h4>
                    <div className="text-center p-3 bg-gray-100 rounded-lg">
                      <p className="text-sm text-gray-600">Prize Pool</p>
                      <p className="text-xl font-bold text-blue-600">{currentGame.silverPrize}</p>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[60px]">Rank</TableHead>
                          <TableHead>Player</TableHead>
                          <TableHead className="text-right">Score</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {samplePlayers.map((player) => (
                          <TableRow key={player.rank}>
                            <TableCell className="font-medium">{player.rank}</TableCell>
                            <TableCell>{player.name}</TableCell>
                            <TableCell className="text-right">{player.score}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-center text-gray-800">Gold League</h4>
                    <div className="text-center p-3 bg-gray-100 rounded-lg">
                      <p className="text-sm text-gray-600">Prize Pool</p>
                      <p className="text-xl font-bold text-blue-600">{currentGame.goldPrize}</p>
                    </div>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[60px]">Rank</TableHead>
                          <TableHead>Player</TableHead>
                          <TableHead className="text-right">Score</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {samplePlayers.map((player) => (
                          <TableRow key={player.rank}>
                            <TableCell className="font-medium">{player.rank}</TableCell>
                            <TableCell>{player.name}</TableCell>
                            <TableCell className="text-right">{player.score}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

