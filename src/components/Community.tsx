
import { Button } from "./ui/button"
import { MessageSquare } from "lucide-react"
import { Link } from "react-router-dom"
export const Community = () => {
  return (
    <div className="bg-[#252859] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Our Investment Community</h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Connect with like-minded investors, share insights, and learn from experts in our growing community.
        </p>
        <Link to ="https://whatsapp.com/channel/0029Va8mc7IEquiJ4UIWgT1X">
        <Button className="bg-[rgb(247,169,45)] hover:bg-white hover:text-[#252859]">
          Join Now <MessageSquare className="ml-2 h-4 w-4" />
        </Button>
        </Link>
      </div>
    </div>
  )
}
