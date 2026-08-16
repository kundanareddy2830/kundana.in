import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { TechTag } from './TechTag.jsx'

const skillGroups = [
  {
    label: 'Languages',
    items: ['Python', 'Java', 'C', 'SQL', 'JavaScript'],
  },
  {
    label: 'Software Development',
    items: ['React.js', 'FastAPI', 'Django', 'REST APIs', 'HTML', 'CSS'],
  },
  {
    label: 'AI / ML',
    items: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Generative AI', 'LLMs', 'RAG'],
  },
  {
    label: 'Databases & Tools',
    items: ['PostgreSQL', 'Neo4j', 'ChromaDB', 'Git', 'GitHub'],
  },
  {
    label: 'Core CS',
    items: ['Data Structures & Algorithms', 'DBMS', 'Operating Systems', 'Computer Networks'],
  },
]

const GALLERY = [
  {
    src: '/hackathon_1.jpg',
    title: 'National Winner — AQVH 2025',
    desc: 'Awarded by Chief Minister & Quantum Industry Leaders for hybrid GNN+QML fraud detection system.',
  },
  {
    src: '/hackathon_2.jpg',
    title: 'ISRO Finalist — BAH 2025',
    desc: 'Presented Mosdac assistant RAG pipeline at ISRO space application center.',
  },
  {
    src: '/hackathon_3.jpg',
    title: 'Adobe Hackathon Presentation',
    desc: 'Collaborative development and pitching during the Adobe University Hackathon.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } }
const pill    = { hidden: { opacity: 0, scale: 0.88 }, show: { opacity: 1, scale: 1, transition: { duration: 0.3 } } }

export default function About() {
  const [imgIndex, setImgIndex] = useState(0)
  const [selectedImg, setSelectedImg] = useState(null)
  const [imgErrors, setImgErrors] = useState({})

  const nextImg = (e) => {
    e.stopPropagation()
    setImgIndex((prev) => (prev + 1) % GALLERY.length)
  }

  const prevImg = (e) => {
    e.stopPropagation()
    setImgIndex((prev) => (prev - 1 + GALLERY.length) % GALLERY.length)
  }

  const handleImgError = (idx) => {
    setImgErrors((prev) => ({ ...prev, [idx]: true }))
  }

  return (
    <section id="about" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show"
          viewport={{ once: true, margin: '-80px' }} variants={fadeUp}
          className="mb-14"
        >
          <span className="font-mono text-xs text-violet-soft tracking-widest uppercase">About</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mt-3 leading-tight text-balance">
            AI/ML Engineer &amp;<br />Software Developer
          </h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid md:grid-cols-12 gap-12 items-start">

          {/* Left: bio */}
          <motion.div
            className="md:col-span-7 space-y-6"
            initial="hidden" whileInView="show"
            viewport={{ once: true, margin: '-80px' }} variants={fadeUp}
          >
            <p className="text-muted text-base md:text-[15px] leading-relaxed">
              I'm a B.Tech Artificial Intelligence &amp; Machine Learning student at <strong className="text-ink font-semibold">Dhanekula Institute of Engineering &amp; Technology</strong>, focused on building intelligent, reliable, and user-centered software systems.
            </p>
            <p className="text-muted text-base md:text-[15px] leading-relaxed">
              My work spans <strong className="text-ink font-semibold">Machine Learning, Deep Learning, Generative AI, NLP, Computer Vision, Data Science, and Full-Stack Development</strong>. I enjoy combining AI models with strong software engineering to turn ideas into practical applications — from intelligent prediction and detection systems to AI-powered platforms and full-stack products.
            </p>
            <p className="text-muted text-base md:text-[15px] leading-relaxed">
              I've built and worked on projects involving <strong className="text-ink font-semibold">LLMs, RAG, knowledge graphs, recommendation systems, computer vision, multi-agent AI systems, and backend services</strong>. I've also explored <strong className="text-ink font-semibold">Quantum Machine Learning</strong> through research-oriented projects, combining classical machine learning with quantum algorithms to investigate new approaches to fraud detection.
            </p>
            <p className="text-muted text-base md:text-[15px] leading-relaxed">
              What I enjoy most is working at the intersection of <strong className="text-ink font-semibold">AI and real-world software</strong> — taking a problem from data and model development through APIs, backend systems, databases, and user-facing applications. I focus on building solutions that are <strong className="text-ink font-semibold">efficient, maintainable, scalable, and intuitive to use</strong>.
            </p>
            <p className="text-muted text-base md:text-[15px] leading-relaxed">
              I'm currently focused on growing as an <strong className="text-ink font-semibold">AI/ML Engineer and Software Engineer</strong>, with a strong interest in building production-oriented AI applications and intelligent software systems that solve meaningful real-world problems.
            </p>

            {/* Skill pills with icons — 5 groups */}
            <div className="pt-4 space-y-6">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {skillGroups.slice(0, 4).map((g, gi) => (
                  <motion.div
                    key={g.label}
                    initial="hidden" whileInView="show"
                    viewport={{ once: true, margin: '-40px' }}
                    variants={stagger}
                    transition={{ delayChildren: gi * 0.05 }}
                  >
                    <p className="font-mono text-[10px] text-faint uppercase tracking-wider mb-2.5">{g.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {g.items.map(s => (
                        <motion.div key={s} variants={pill}><TechTag label={s} size={12} /></motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              {/* Core CS — full width row */}
              {skillGroups[4] && (
                <motion.div
                  initial="hidden" whileInView="show"
                  viewport={{ once: true, margin: '-40px' }}
                  variants={stagger}
                >
                  <p className="font-mono text-[10px] text-faint uppercase tracking-wider mb-2.5">{skillGroups[4].label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroups[4].items.map(s => (
                      <motion.div key={s} variants={pill}><TechTag label={s} size={12} /></motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right: education card + achievements gallery */}
          <motion.div
            className="md:col-span-5 space-y-6 md:sticky md:top-24"
            initial="hidden" whileInView="show"
            viewport={{ once: true, margin: '-80px' }} variants={fadeUp}
          >
            {/* Education Card */}
            <div className="p-6 rounded-2xl border border-line bg-surface/70 backdrop-blur-sm space-y-4">
              <p className="font-mono text-[10px] text-faint uppercase tracking-wider">Education</p>

              <div className="space-y-1">
                <p className="text-base text-ink font-semibold leading-snug">
                  Dhanekula Institute of Engineering &amp; Technology
                </p>
                <p className="text-sm text-muted">B.Tech Artificial Intelligence &amp; Machine Learning</p>
                <p className="text-xs text-faint font-mono">2023 – 2027</p>
              </div>

              <span className="inline-block text-xs px-3 py-1.5 rounded-full bg-violet/15 border border-violet/30 text-violet-soft font-mono">
                CGPA 9.4 / 10
              </span>

              <div className="pt-2 border-t border-line space-y-2">
                <p className="font-mono text-[10px] text-faint uppercase tracking-wider">Core Competencies</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Machine Learning',
                    'Deep Learning',
                    'Generative AI',
                    'NLP',
                    'Computer Vision',
                    'AI Engineering',
                    'Full-Stack Engineering',
                    'Quantum ML'
                  ].map(c => (
                    <span key={c} className="text-[11px] px-2.5 py-1 rounded-lg bg-void border border-line text-muted font-mono hover:text-violet-soft hover:border-violet/35 transition-colors cursor-default">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Achievements Gallery Card */}
            <div className="p-6 rounded-2xl border border-line bg-surface/70 backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-2">
                <Trophy size={14} className="text-violet-soft" />
                <p className="font-mono text-[10px] text-faint uppercase tracking-wider">Hackathon Moments</p>
              </div>

              {/* Carousel Container */}
              <div 
                className="relative h-48 rounded-xl bg-void/80 border border-line overflow-hidden group cursor-pointer"
                onClick={() => !imgErrors[imgIndex] && setSelectedImg(GALLERY[imgIndex])}
              >
                {imgErrors[imgIndex] ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-void/90 text-faint font-mono text-[10px] space-y-2">
                    <Trophy size={20} className="text-violet/30" />
                    <p className="text-muted text-xs font-sans font-semibold">Award Ceremony Moment</p>
                    <p className="max-w-[180px] leading-relaxed">Save photo as {GALLERY[imgIndex].src} in public/ folder to view</p>
                  </div>
                ) : (
                  <>
                    <img 
                      src={GALLERY[imgIndex].src} 
                      alt={GALLERY[imgIndex].title}
                      onError={() => handleImgError(imgIndex)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/30 to-transparent" />
                    <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-void/70 border border-line flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 size={11} className="text-muted" />
                    </div>
                  </>
                )}

                {/* Left/Right Buttons */}
                <button 
                  onClick={prevImg}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-void/70 border border-line flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-violet/40 hover:bg-void"
                >
                  <ChevronLeft size={14} className="text-muted" />
                </button>
                <button 
                  onClick={nextImg}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-void/70 border border-line flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-violet/40 hover:bg-void"
                >
                  <ChevronRight size={14} className="text-muted" />
                </button>

                {/* Index Dots */}
                <div className="absolute bottom-3 right-3 flex gap-1 z-10">
                  {GALLERY.map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1.5 h-1.5 rounded-full transition-all ${i === imgIndex ? 'bg-violet-soft w-3' : 'bg-faint/60'}`}
                    />
                  ))}
                </div>
              </div>

              {/* Title & Caption */}
              <div className="space-y-1 min-h-[48px]">
                <p className="text-xs font-semibold text-ink leading-snug">{GALLERY[imgIndex].title}</p>
                <p className="text-[11px] text-muted leading-relaxed">{GALLERY[imgIndex].desc}</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-void/95 backdrop-blur-md flex flex-col items-center justify-center p-4 cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-surface border border-line flex items-center justify-center text-muted hover:text-ink transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={20} />
            </button>
            <motion.div 
              initial={{ scale: 0.95, y: 10 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 10 }}
              transition={{ type: 'spring', damping: 25 }}
              className="max-w-4xl w-full text-center space-y-4"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedImg.src} 
                alt={selectedImg.title}
                className="max-h-[70vh] mx-auto rounded-xl border border-line shadow-2xl object-contain"
              />
              <div>
                <h4 className="text-base font-bold text-ink">{selectedImg.title}</h4>
                <p className="text-xs text-muted max-w-lg mx-auto mt-1 leading-relaxed">{selectedImg.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
