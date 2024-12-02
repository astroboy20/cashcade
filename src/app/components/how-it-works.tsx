import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, Trophy, GamepadIcon, Users } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      icon: <GamepadIcon className="h-12 w-12 text-blue-600" />,
      title: "Choose Your Game",
      description: "Select from our curated collection of exciting arcade games"
    },
    {
      icon: <Users className="h-12 w-12 text-blue-600" />,
      title: "Join Tournament",
      description: "Enter competitive tournaments and challenge other players"
    },
    {
      icon: <Trophy className="h-12 w-12 text-blue-600" />,
      title: "Win Prizes",
      description: "Top players earn rewards from our massive prize pool"
    },
    {
      icon: <Coins className="h-12 w-12 text-blue-600" />,
      title: "Earn Credits",
      description: "Collect daily coins and complete special missions"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">How It Works</h2>
          <p className="text-gray-600">
            Get started with our simple process and begin your gaming journey today
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-white border-2 border-gray-200 relative overflow-hidden group hover:border-blue-600 transition-colors">
              <CardHeader className="relative">
                <div className="mx-auto rounded-full p-3 bg-blue-100 group-hover:bg-blue-600 transition-colors">
                  {step.icon}
                </div>
                <CardTitle className="text-xl text-center mt-4 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-gray-600">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export { HowItWorks }

