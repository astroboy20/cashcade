import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const CommunityTestimonials = () =>{
  const testimonials = [
    { name: "Alex", comment: "I've won multiple tournaments! The games are so addictive and fun." },
    { name: "Sarah", comment: "Love the community here. It's competitive but always friendly." },
    { name: "Mike", comment: "The weekly prizes keep me coming back. It's a great motivation to improve!" },
  ]

  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Community Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800">
              <CardHeader>
                <CardTitle>{testimonial.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="italic">"{testimonial.comment}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export {CommunityTestimonials}