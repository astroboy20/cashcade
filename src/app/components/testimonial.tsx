import { Card, CardContent } from "@/components/ui/card"
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Alex Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Pro Gamer",
    content: "GameWar has revolutionized my gaming experience. The tournaments are thrilling, and the prizes are amazing!",
    rating: 5
  },
  {
    name: "Sarah Lee",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Casual Player",
    content: "I never thought I could compete at this level. GameWar made it possible and fun!",
    rating: 5
  },
  {
    name: "Mike Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Esports Enthusiast",
    content: "The variety of games and the competitive atmosphere keep me coming back. It's addictive!",
    rating: 4
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Gamers Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what our community has to say about GameWar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-2 border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {/* <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar> */}
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.content}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

