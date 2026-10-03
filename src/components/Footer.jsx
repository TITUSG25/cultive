/* eslint-disable react/prop-types */
import { useState } from 'react'
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Send,
  Quote,
  Sprout,
  Heart,
} from 'lucide-react'
const serviceLinks = [
  { name: 'For Schools', url: '/services#school-programs' },
  { name: 'For Colleges', url: '/services' },
  { name: 'For Universities', url: '/services' },
  { name: 'Training & Workshops', url: '/services#flagship-nav' },
  { name: 'Career Mentorship', url: '/services#career-mentorship' },
  { name: 'Faculty Development', url: '/services' },
  { name: 'Leadership Programs', url: '/services' },
]

const quickLinks = [
  { name: 'Home', url: '/' },
  { name: 'About Us', url: '/about' },
  { name: 'Our Programs', url: '/services' },
  { name: 'Events', url: '/contact' },
  { name: 'Blog', url: '/about' },
  { name: 'Careers', url: 'https://docs.google.com/forms/d/1h_ac-ltcERU8j4cdAYt6tMTsys2Fxmy-qqmNqEsFRDY/edit' },
  { name: 'Contact Us', url: '/contact' },
]

const supportLinks = [
  { name: 'Feedback', url: 'https://docs.google.com/forms/d/1q_wI2jxCaPfw55yLjwve5zsihhaAMVH2Vp8L44NIWio/edit' },
  { name: 'Internship', url: 'https://docs.google.com/forms/d/1luSfOItGpN-Ep7BSbcNr-tq5w6Fn4HFOlUkw8cCsH_I/edit' },
  { name: 'Career Application', url: 'https://docs.google.com/forms/d/1h_ac-ltcERU8j4cdAYt6tMTsys2Fxmy-qqmNqEsFRDY/edit' },
  { name: 'Training', url: 'https://docs.google.com/forms/d/1biihW8UttyOEDo-edpJhRan5lB8DEfnhMVYQPxj4gww/edit' },
  { name: 'Privacy Policy', url: '/privacy' },
  { name: 'Terms of Service', url: '/terms' },
  { name: 'FAQs', url: '/contact' },
]

const socialLinks = [
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: Linkedin },
  { name: 'Instagram', url: 'https://instagram.com', icon: Instagram },
  { name: 'YouTube', url: 'https://youtube.com', icon: Youtube },
  { name: 'Facebook', url: 'https://facebook.com', icon: Facebook },
]

const LinkColumn = ({ title, links }) => (
  <div>
    <h3 className="text-lg font-bold text-white">{title}</h3>
    <span className="mt-2 block h-0.5 w-8 rounded-full bg-[#f5a41d]" aria-hidden="true" />
    <ul className="mt-5 space-y-3">
      {links.map((link) => {
        const external = link.url.startsWith('https://')
        return (
          <li key={link.name}>
            <a
              href={link.url}
              target={external ? '_blank' : '_self'}
              rel={external ? 'noopener noreferrer' : undefined}
              className="group flex items-center text-sm text-blue-200/80 transition-colors duration-300 hover:text-[#fbb040]"
            >
              <ArrowRight className="mr-2.5 h-3.5 w-3.5 shrink-0 text-[#f5a41d] transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              <span className="font-medium">{link.name}</span>
            </a>
          </li>
        )
      })}
    </ul>
  </div>
)

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleParticipationMail = (e) => {
    e.preventDefault()
    if (email) {
      const subject = 'Participation Request from ' + email
      const body = `Hello,\n\nI would like to participate in Cultive programs.\n\nFrom: ${email}\n\nThank you!`
      window.location.href = `mailto:connect@cultive.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }
  }

  return (
    <footer className="font-sans">
      {/* Dark footer */}
      <div className="relative overflow-hidden bg-[#0c1a45]">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-24 top-32 h-96 w-96 rounded-full bg-[#1d3a8f]/25 blur-3xl" />
          <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#f5a41d]/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-[92rem] px-6 pb-10 pt-14 sm:pt-16">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.95fr_0.8fr_0.85fr_1.15fr]">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2">
                <Sprout className="h-7 w-7 -rotate-12 text-[#fbb040]" aria-hidden="true" />
                <span className="font-serif text-3xl font-bold text-white">Cultive</span>
              </div>
              <p className="mt-1 text-xs font-medium tracking-wide text-blue-200/70">The solution stack</p>
              <p className="mt-5 max-w-sm text-sm leading-7 text-blue-200/80">
                Revolutionizing education through innovation, making learning accessible and engaging for everyone around the world.
              </p>

              <ul className="mt-6 space-y-3.5">
                <li className="flex items-center gap-3 text-sm text-blue-200/90">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <Mail className="h-4 w-4 text-[#8fb0ff]" aria-hidden="true" />
                  </span>
                  connect@cultive.in
                </li>
                <li className="flex items-center gap-3 text-sm text-blue-200/90">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <Phone className="h-4 w-4 text-[#8fb0ff]" aria-hidden="true" />
                  </span>
                  8680804060
                </li>
                <li className="flex items-center gap-3 text-sm text-blue-200/90">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
                    <MapPin className="h-4 w-4 text-[#8fb0ff]" aria-hidden="true" />
                  </span>
                  No 5, Veteranlines, Pallavaram, Chennai
                </li>
              </ul>

              <div className="mt-7 flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-blue-200 transition duration-300 hover:-translate-y-1 hover:border-[#fbb040] hover:bg-[#fbb040] hover:text-[#0c1a45]"
                  >
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <LinkColumn title="Our Services" links={serviceLinks} />
            <LinkColumn title="Quick Links" links={quickLinks} />
            <LinkColumn title="Support" links={supportLinks} />

            {/* Quote */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <Quote className="h-6 w-6 rotate-180 text-[#fbb040]" aria-hidden="true" />
              <p className="mt-3 text-xl leading-8 text-white [font-family:'Segoe_Script',cursive]">
                Nurturing Young Minds for a Brighter Tomorrow.
              </p>
              <span className="mt-3 block h-1 w-14 -rotate-3 rounded-full bg-[#fbb040]" aria-hidden="true" />
              <span className="absolute -right-2 top-8 h-4 w-4 rounded-full bg-[#fbb040]" aria-hidden="true" />
            </div>
          </div>

          {/* Simple mail subscribe at the bottom */}
          <div className="mt-14 flex flex-col items-center gap-5 text-center">
            <p className="text-base font-semibold text-white">Join Our Educational Community</p>
            <form onSubmit={handleParticipationMail} className="flex w-full max-w-md gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#fbb040]" aria-hidden="true" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-full border border-white/15 bg-white/10 py-3 pl-11 pr-4 text-sm font-medium text-white placeholder-blue-200/60 transition focus:border-[#fbb040] focus:outline-none focus:ring-2 focus:ring-[#fbb040]/40"
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#f5a41d] to-[#fbb040] px-6 py-3 text-sm font-bold text-[#1b2a63] transition duration-300 hover:-translate-y-0.5 hover:brightness-105"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Subscribe
              </button>
            </form>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-blue-200/75 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <span>&copy; {new Date().getFullYear()} Cultive. All rights reserved.</span>
              <span className="hidden text-white/25 md:inline">|</span>
              <a href="/privacy" className="transition-colors hover:text-[#fbb040]">Privacy Policy</a>
              <span className="hidden text-white/25 md:inline">|</span>
              <a href="/terms" className="transition-colors hover:text-[#fbb040]">Terms of Service</a>
              <span className="hidden text-white/25 md:inline">|</span>
              <a href="/sitemap" className="transition-colors hover:text-[#fbb040]">Sitemap</a>
            </div>
            <p className="flex items-center gap-2">
              Made with
              <Heart className="h-4 w-4 fill-current text-[#fbb040]" aria-hidden="true" />
              for a better learning world.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
