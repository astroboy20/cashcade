import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, Trophy, GamepadIcon } from "lucide-react"

const HowItWorks =() =>{
  const steps = [
    { icon: <Coins className="h-12 w-12 text-yellow-500" />, title: "Earn Credits", description: "Collect daily coins, watch ads, or complete offers" },
    { icon: <GamepadIcon className="h-12 w-12 text-green-500" />, title: "Play Games", description: "Choose from a variety of exciting arcade games" },
    { icon: <Trophy className="h-12 w-12 text-purple-500" />, title: "Win Prizes", description: "Top players split the prize pot weekly" },
  ]

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-gray-700">
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  {step.icon}
                  <span className="mt-4">{step.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export {HowItWorks}