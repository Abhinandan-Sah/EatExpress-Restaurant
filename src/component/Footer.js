import { Facebook, Instagram, Twitter } from "lucide-react"
import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-orange-400 text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-black">About Us</Link></li>
              <li><Link href="/team" className="hover:text-black">Team</Link></li>
              <li><Link href="/careers" className="hover:text-black">Careers</Link></li>
              <li><Link href="/blog" className="hover:text-black">Blog</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Contact</h3>
            <ul className="space-y-2">
              <li><Link href="/help" className="hover:text-black">Help & Support</Link></li>
              <li><Link href="/partner" className="hover:text-black">Partner with us</Link></li>
              <li><Link href="/ride" className="hover:text-black">Ride with us</Link></li>
            </ul>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Head Office:</h4>
              <address className="not-italic">
                EatExpress India Pvt. Ltd.<br />
                Phase 8B, Sector 74<br />
                Mohali, Punjab 160055<br />
                India
              </address>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/terms" className="hover:text-black">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-black">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-black">Cookie Policy</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Delivery Cities</h3>
            <ul className="space-y-2">
              <li><Link href="/city/chandigarh" className="hover:text-black">Chandigarh</Link></li>
              <li><Link href="/city/mohali" className="hover:text-black">Mohali</Link></li>
              <li><Link href="/city/jalandhar" className="hover:text-black">Jalandhar</Link></li>
              <li><Link href="/city/ludhiana" className="hover:text-black">Ludhiana</Link></li>
              <li><Link href="/city/ambala" className="hover:text-black">Ambala</Link></li>
              <li><Link href="/cities" className="hover:text-black">View all cities</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-black">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="hover:text-black">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="hover:text-black">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="hover:text-black">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
            <h3 className="text-lg font-semibold text-black mt-6">Get the App</h3>
            <div className="flex space-x-4">
              <Link href="https://apps.apple.com">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/1200px-Download_on_the_App_Store_RGB_blk.svg.png?height=40&width=120" alt="Download on the App Store" width={120} height={40} className="h-10" />
              </Link>
              <Link href="https://play.google.com">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/270px-Google_Play_Store_badge_EN.svg.png?height=40&width=135" alt="Get it on Google Play" width={135} height={40} className="h-10" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800">
          <form className="max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-black mb-4">Subscribe to our Newsletter</h3>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter your email" className="bg-white text-black" />
              <button type="submit" variant="secondary">Subscribe</button>
            </div>
          </form>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} EatExpress. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}