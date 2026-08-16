import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Copy, Check, ArrowUpRight, MessageCircle } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const CONTACT_CARDS = [
  {
    id:      'email',
    icon:    Mail,
    label:   'Email',
    handle:  'kundanareddytamma@gmail.com',
    href:    'mailto:kundanareddytamma@gmail.com',
    action:  'copy',
    color:   'from-violet/20 to-violet/5',
    border:  'hover:border-violet/50',
    glow:    'rgba(124,58,237,0.3)',
    desc:    'Best for opportunities & collaborations',
  },
  {
    id:      'github',
    icon:    Github,
    label:   'GitHub',
    handle:  '@kundanareddy2830',
    href:    'https://github.com/kundanareddy2830',
    action:  'open',
    color:   'from-white/10 to-white/5',
    border:  'hover:border-white/30',
    glow:    'rgba(255,255,255,0.15)',
    desc:    'Check out my projects & contributions',
  },
  {
    id:      'linkedin',
    icon:    Linkedin,
    label:   'LinkedIn',
    handle:  'Kundana Reddy Tamma',
    href:    'https://linkedin.com/in/kundanareddytamma',
    action:  'open',
    color:   'from-blue-500/20 to-blue-600/5',
    border:  'hover:border-blue-500/40',
    glow:    'rgba(59,130,246,0.25)',
    desc:    'Let\'s connect professionally',
  },
]

const QUICK_LINKS = [
  { label: 'Home',       href: '#top' },
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

const SOCIALS = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/kundanareddy2830' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/kundanareddytamma' },
  { icon: Mail,     label: 'Email',    href: 'mailto:kundanareddytamma@gmail.com' },
]

/* ── Typewriter words ── */
const WORDS = ['collaborate', 'build', 'create', 'innovate', 'connect']

export default function Contact() {
  const [copied,   setCopied]   = useState(false)
  const [wordIdx,  setWordIdx]  = useState(0)
  const [hovered,  setHovered]  = useState(null)

  // Smooth word cycling on a steady interval
  useEffect(() => {
    const timer = setInterval(() => setWordIdx(i => (i + 1) % WORDS.length), 2800)
    return () => clearInterval(timer)
  }, [])

  const copyEmail = () => {
    navigator.clipboard.writeText('kundanareddytamma@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleCardClick = (card) => {
    if (card.action === 'copy') { copyEmail(); return }
    window.open(card.href, '_blank', 'noreferrer')
  }

  return (
    <section id="contact" className="border-t border-line">

      {/* ── Main area ── */}
      <div className="py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-violet/[0.04] to-transparent pointer-events-none" />
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-violet blur-3xl pointer-events-none opacity-[0.05]"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <div className="relative max-w-5xl mx-auto px-6 md:px-10">

          {/* ── Header ── */}
          <motion.div
            initial="hidden" whileInView="show"
            viewport={{ once: true }} variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs text-violet-soft tracking-widest uppercase">Get In Touch</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mt-3 leading-tight">
              Let's{' '}
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIdx}
                  initial={{ opacity: 0, y: 14, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
                  exit={{    opacity: 0, y: -14, filter: 'blur(6px)' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block text-violet-soft"
                  style={{ minWidth: '220px', textAlign: 'left' }}
                >
                  {WORDS[wordIdx]}
                </motion.span>
              </AnimatePresence>
            </h2>
            <p className="text-muted text-base mt-4 max-w-md mx-auto">
              I'm always open to new opportunities and interesting projects.
              Pick your preferred way to reach me below.
            </p>
          </motion.div>

          {/* ── Contact cards ── */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {CONTACT_CARDS.map((card, i) => (
              <motion.button
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onHoverStart={() => setHovered(card.id)}
                onHoverEnd={() => setHovered(null)}
                onClick={() => handleCardClick(card)}
                className={`relative text-left p-6 rounded-2xl border border-line bg-gradient-to-br ${card.color} ${card.border} transition-all duration-300 overflow-hidden group cursor-pointer w-full`}
              >
                {/* Glow on hover */}
                <AnimatePresence>
                  {hovered === card.id && (
                    <motion.div
                      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                      className="absolute inset-0 rounded-2xl pointer-events-none"
                      style={{ boxShadow: `inset 0 0 40px ${card.glow}` }}
                    />
                  )}
                </AnimatePresence>

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-void/60 border border-line flex items-center justify-center mb-4 group-hover:border-current transition-colors">
                  {card.id === 'email' && copied
                    ? <Check size={18} className="text-green-400" />
                    : <card.icon size={18} className="text-muted group-hover:text-ink transition-colors" />
                  }
                </div>

                <p className="font-display font-semibold text-ink text-base mb-1">{card.label}</p>
                <p className="font-mono text-xs text-violet-soft truncate mb-2">{card.handle}</p>
                <p className="text-[11px] text-faint leading-snug">{card.desc}</p>

                {/* Arrow / copy indicator */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {card.action === 'copy'
                    ? copied
                      ? <Check size={14} className="text-green-400" />
                      : <Copy size={14} className="text-faint" />
                    : <ArrowUpRight size={14} className="text-faint" />
                  }
                </div>

                {/* Copied toast */}
                <AnimatePresence>
                  {card.id === 'email' && copied && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.9 }}
                      className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-green-500/20 border border-green-500/30 text-green-400 text-[10px] font-mono"
                    >
                      Copied!
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            ))}
          </div>



        </div>
      </div>

      {/* ── Footer ── */}
      <footer className="border-t border-line bg-surface/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start">
            <span className="font-display font-bold text-ink text-sm">
              KRT<span className="text-violet-bright">.</span>
            </span>
            <div className="flex items-center gap-1">
              {QUICK_LINKS.map((l, i) => (
                <span key={l.label} className="flex items-center">
                  <a href={l.href} className="text-xs text-faint hover:text-violet-soft transition-colors px-2 py-1">
                    {l.label}
                  </a>
                  {i < QUICK_LINKS.length - 1 && <span className="text-faint/30">·</span>}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-xs text-faint flex items-center gap-1">
              © {new Date().getFullYear()} Made with <span className="text-red-400">♥</span> by Kundana Reddy
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <motion.a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-faint hover:text-violet-soft transition-colors"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </footer>

    </section>
  )
}
