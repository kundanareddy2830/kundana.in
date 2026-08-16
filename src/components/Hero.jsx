import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail, Trophy, Sparkles, MapPin } from 'lucide-react'

const stats = [
  { value: '20+', label: 'Projects' },
  { value: '9.4', label: 'CGPA / 10' },
  { value: '5',   label: 'Internships' },
  { value: 'Winner', label: 'National Hackathon' },
]

const ease = [0.22, 1, 0.36, 1]

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void/60 pointer-events-none" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-20 w-full"
      >
        <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* ── Left: Text — slides in from LEFT ── */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -80, y: 30 }}
            animate={{ opacity: 1, x: 0,   y: 0  }}
            transition={{ duration: 1.0, delay: 0.15, ease }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-violet/30 bg-violet/[0.08] text-violet-soft text-[11px] font-mono tracking-widest uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-violet-soft" />
                </span>
                <Trophy size={10} />
                National Hackathon Winner · AQVH 2025
              </span>
            </motion.div>

            {/* Hi I'm + Name */}
            <motion.div
              initial={{ opacity: 0, filter: 'blur(8px)' }}
              animate={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.0, delay: 0.75, ease }}
              className="mt-5"
            >
              <p className="font-mono text-sm text-faint mb-2 tracking-widest">Hi, I'm</p>
              <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
                <span className="text-ink">Kundana Reddy</span><br />
                <span className="text-violet-soft">Tamma</span>
              </h1>
            </motion.div>

            {/* Role + location */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0, ease }}
              className="mt-4 flex flex-wrap items-center gap-2 text-xs text-faint font-mono"
            >
              <span className="px-3 py-1 rounded-full border border-violet/25 bg-violet/[0.07] text-violet-soft text-[11px] tracking-wide">
                AI/ML Engineer &amp; Software Developer
              </span>
              <span className="flex items-center gap-1.5"><MapPin size={12} /> Vijayawada, India</span>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.15, ease }}
              className="mt-5 text-[15px] text-muted leading-relaxed max-w-md"
            >
              I build intelligent software systems that combine AI/ML, data,
              and modern software engineering to solve real-world problems —
              spanning machine learning, generative AI, backend systems, and full-stack applications.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="mt-7 grid grid-cols-4 gap-2 sm:gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.3, ease }}
            >
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0  }}
                  transition={{ duration: 0.6, delay: 1.3 + i * 0.1, ease }}
                  whileHover={{ y: -2, borderColor: 'rgba(124,58,237,0.4)' }}
                  className="flex flex-col p-2.5 sm:p-3 rounded-xl bg-surface border border-line transition-colors"
                >
                  <span className="font-display text-lg sm:text-xl font-bold text-violet-soft">{s.value}</span>
                  <span className="text-[9px] sm:text-[10px] text-faint mt-0.5 font-mono leading-snug">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.65, ease }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <MagneticBtn href="#work">
                <Sparkles size={13} /> View my work
              </MagneticBtn>
              <a
                href="/resume.pdf" target="_blank" rel="noreferrer noopener"
                className="px-5 py-2.5 rounded-full border border-line text-sm text-muted hover:text-ink hover:border-faint transition-all duration-200"
              >
                Download CV
              </a>
              <div className="flex items-center gap-2">
                <SocialBtn href="https://github.com/kundanareddy2830" label="GitHub"><Github size={16} /></SocialBtn>
                <SocialBtn href="https://linkedin.com/in/kundanareddytamma" label="LinkedIn"><Linkedin size={16} /></SocialBtn>
                <SocialBtn href="mailto:kundanareddytamma@gmail.com" label="Email"><Mail size={16} /></SocialBtn>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Photo — slides in from RIGHT ── */}
          <motion.div
            initial={{ opacity: 0, x: 80, y: 30 }}
            animate={{ opacity: 1, x: 0,  y: 0  }}
            transition={{ duration: 1.0, delay: 0.25, ease }}
            className="order-1 md:order-2 flex justify-center items-center"
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-30"
                style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.7) 0%, transparent 70%)', transform: 'scale(1.3)' }}
              />
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-violet/25 shadow-2xl"
              >
                <img
                  src="/photo.jpg"
                  alt="Kundana Reddy Tamma"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div className="absolute inset-0 rounded-full shadow-[inset_0_-40px_60px_rgba(5,5,10,0.5)]" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.a
        href="#work" aria-label="Scroll down"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 text-faint hover:text-violet-soft transition-colors"
        animate={{ y: [0, 7, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="font-mono text-[9px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={14} />
      </motion.a>
    </section>
  )
}

function MagneticBtn({ href, children }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current; if (!el) return
    const r  = el.getBoundingClientRect()
    el.style.transform = `translate(${(e.clientX-(r.left+r.width/2))*0.18}px,${(e.clientY-(r.top+r.height/2))*0.18}px)`
  }
  const onLeave = () => { if (ref.current) ref.current.style.transform = 'translate(0,0)' }
  return (
    <a ref={ref} href={href} onMouseMove={onMove} onMouseLeave={onLeave}
      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-violet text-white text-sm font-medium glow-violet hover:bg-violet-deep transition-all"
      style={{ transition: 'transform 0.15s cubic-bezier(0.22,1,0.36,1), background 0.2s, box-shadow 0.2s' }}
    >
      {children}
    </a>
  )
}

function SocialBtn({ href, label, children }) {
  return (
    <motion.a href={href} target={href.startsWith('mailto') ? undefined : '_blank'} rel="noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.15, y: -2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="w-9 h-9 rounded-full border border-line flex items-center justify-center text-muted hover:text-violet-soft hover:border-violet/40 hover:bg-violet/10 transition-colors"
    >
      {children}
    </motion.a>
  )
}
