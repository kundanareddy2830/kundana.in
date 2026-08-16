import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#work',       label: 'Work'       },
  { href: '#about',      label: 'About'      },
  { href: '#experience', label: 'Experience' },
  { href: '#contact',    label: 'Contact'    },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open,     setOpen]     = useState(false)
  const [active,   setActive]   = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActive('#' + e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-void/60 backdrop-blur-2xl border-b border-violet/10 shadow-[0_4px_24px_0_rgba(0,0,0,0.4)]'
          : 'bg-void/30 backdrop-blur-xl border-b border-white/[0.04]'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">

        <motion.a
          href="#top"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="font-display font-semibold text-ink tracking-tight z-50"
        >
          KRT<span className="text-violet-bright">.</span>
        </motion.a>

        {/* Desktop links */}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className={`relative text-sm transition-colors duration-200 group ${
                active === l.href ? 'text-ink' : 'text-muted hover:text-ink'
              }`}
            >
              {l.label}
              <span className={`absolute -bottom-0.5 left-0 h-px bg-violet-soft transition-all duration-300 ${
                active === l.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </a>
          ))}

        </motion.div>

        {/* Mobile hamburger */}
        <motion.button
          className="md:hidden text-ink p-1 z-50"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {open
              ? <motion.div key="x"    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X size={22} /></motion.div>
              : <motion.div key="menu" initial={{ rotate: 90,  opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu size={22} /></motion.div>
            }
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-void/90 backdrop-blur-2xl border-b border-line"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((l, i) => (
                <motion.a
                  key={l.href} href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className={`text-base font-medium transition-colors ${
                    active === l.href ? 'text-violet-soft' : 'text-muted hover:text-ink'
                  }`}
                >
                  {l.label}
                </motion.a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
