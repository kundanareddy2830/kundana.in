import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { Briefcase, Award, Trophy, GraduationCap, Calendar, Star, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { TechTag } from './TechTag.jsx'

/* ── Data ──────────────────────────────────────────────────────────────── */
const roles = [
  {
    period: 'Jun 2026 — Present',
    title: 'AI-ML Intern',
    org: 'Google via EduSkills Foundation (AICTE)',
    description: 'Built and evaluated TensorFlow models across object detection, custom image classification, and product-image search pipelines.',
    tags: ['TensorFlow', 'Python'],
  },
  {
    period: 'Dec 2025 — Feb 2026',
    title: 'Quantum Portfolio Optimization Intern',
    org: 'QuEdX',
    description: 'Implemented and benchmarked quantum portfolio optimization algorithms through simulation, maintaining full experiment documentation.',
    tags: ['Qiskit', 'Python'],
  },
  {
    period: 'Sep 2025 — Dec 2025',
    title: 'R&D Intern',
    org: 'Storefinity',
    description: 'Conducted AI research experiments and optimized backend ML pipelines for applied machine learning systems.',
    tags: ['Python'],
  },
  {
    period: 'Jul 2025 — Aug 2025',
    title: 'Full Stack Developer Intern',
    org: 'CodeAlpha',
    description: 'Built and integrated full-stack application components, connecting REST API-driven backend services with React frontend workflows.',
    tags: ['React', 'FastAPI'],
  },
  {
    period: 'Jun 2025 — Jul 2025',
    title: 'Data Science Intern',
    org: 'InternPro',
    description: 'Conducted exploratory data analysis and built predictive ML models using Python, Pandas, and Scikit-learn.',
    tags: ['Python', 'Pandas', 'Scikit-learn'],
  },
]

const achievements = [
  { text: 'Winner — Amaravati Quantum Valley Hackathon 2025 (National Level)', highlight: true },
  { text: 'Finalist — Bharatiya Antariksh Hackathon 2025 (ISRO)', highlight: true },
  { text: 'Participant — Adobe University Hackathon (Adobe)', award: true },
]

const certs = [
  { text: 'Neural Networks and Deep Learning — Great Learning' },
  { text: 'OpenCV Certification — OpenCV University' },
  { text: 'Introduction to Large Language Models — Google Cloud' },
  { text: 'Artificial Intelligence Fundamentals — IBM' },
  { text: 'Prepare to Develop AI Solutions on Azure — Microsoft' },
  { text: 'Fundamentals of Generative AI — Microsoft' },
  { text: 'ChatGPT for Beginners — Great Learning' },
  { text: 'GenAI Powered Data Analytics Job Simulation — Tata (Forage)' },
  { text: 'Data Analytics — Google Cloud Career Launchpad' },
  { text: 'Big Data Technologies and Applications — Coursera' },
  { text: 'Data Structures — Infosys' },
]

const GALLERY = [
  {
    src: '/hackathon_1.jpg',
    title: 'AQVH 2025 — National Winner',
    desc: 'Awarded by Chief Minister & Quantum Industry Leaders for hybrid GNN+QML fraud detection system.',
  },
  {
    src: '/hackathon_2.jpg',
    title: 'BAH 2025 — ISRO Finalist',
    desc: 'Presented Mosdac assistant RAG pipeline at ISRO space application center.',
  },
  {
    src: '/hackathon_3.jpg',
    title: 'Adobe Hackathon Presentation',
    desc: 'Collaborative development and pitching during the Adobe University Hackathon.',
  },
]

/* ── Timeline Item ─────────────────────────────────────────────────────── */
function TimelineItem({ role, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-7 pb-6 last:pb-0"
    >
      <div className="absolute left-0 top-0 bottom-0 w-px bg-line">
        <motion.div className="absolute top-0 w-full bg-gradient-to-b from-violet to-transparent"
          initial={{ height: 0 }} animate={inView ? { height: '100%' } : {}}
          transition={{ duration: 0.7, delay: index * 0.08 + 0.1 }}
        />
      </div>
      <motion.div className="absolute left-[-4px] top-[7px] w-[9px] h-[9px] rounded-full border-2 border-violet bg-void"
        initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.25, delay: index * 0.08 }}
      />
      <div className="p-4 rounded-xl bg-surface/60 border border-line hover:border-violet/35 transition-colors backdrop-blur-sm group">
        <p className="font-mono text-[10px] text-faint mb-1">{role.period}</p>
        <h3 className="font-display text-[14px] font-semibold text-ink group-hover:text-violet-soft transition-colors">{role.title}</h3>
        <p className="text-xs text-violet-soft mt-0.5 mb-2.5 flex items-center gap-1.5">
          <Briefcase size={10} className="shrink-0" />{role.org}
        </p>
        <p className="text-[12px] text-muted leading-relaxed mb-2.5">{role.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {role.tags.map(t => <TechTag key={t} label={t} size={11} />)}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Achievements Box with Optional Gallery ────────────────────────────── */
function AchievementsBox({ onZoomImage }) {
  const [imgIndex, setImgIndex] = useState(0)
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
    <div className="rounded-2xl border border-line bg-surface/70 backdrop-blur-sm overflow-hidden mb-6">
      <div className="px-5 py-4 border-b border-line flex items-center gap-2.5">
        <Trophy size={14} className="text-violet-soft" />
        <p className="font-display text-sm font-semibold text-ink">Achievements</p>
      </div>

      {/* List */}
      <div className="p-3 space-y-1">
        {achievements.map((a, i) => (
          <motion.div key={a.text}
            initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.05 }}
            className={`flex items-center gap-3 px-3.5 py-3 rounded-xl border transition-all ${
              a.highlight
                ? 'border-violet/40 bg-violet/10 text-violet-soft'
                : 'border-amber-700/30 bg-amber-950/20 text-amber-300/80'
            }`}
          >
            <span className="shrink-0">
              {a.highlight ? <Trophy size={13} /> : <Star size={13} className="text-amber-400/70" />}
            </span>
            <span className="text-[12px] leading-snug font-medium">{a.text}</span>
          </motion.div>
        ))}
      </div>

      {/* Gallery Section */}
      <div className="px-4 pb-4 pt-2 border-t border-line/65">
        <p className="font-mono text-[9px] text-faint uppercase tracking-wider mb-2">Ceremony Gallery</p>
        <div 
          className="relative h-36 rounded-lg bg-void/80 border border-line overflow-hidden group cursor-pointer"
          onClick={() => !imgErrors[imgIndex] && onZoomImage(GALLERY[imgIndex])}
        >
          {imgErrors[imgIndex] ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3 bg-void/90 text-faint font-mono text-[9px] space-y-1.5">
              <Trophy size={16} className="text-violet/30" />
              <p className="text-muted text-[10px] font-sans font-semibold">Award Photo</p>
              <p className="max-w-[160px] leading-relaxed">Save photo as {GALLERY[imgIndex].src} to view</p>
            </div>
          ) : (
            <>
              <img 
                src={GALLERY[imgIndex].src} 
                alt={GALLERY[imgIndex].title}
                onError={() => handleImgError(imgIndex)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void/95 via-void/30 to-transparent" />
              <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-void/70 border border-line flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 size={10} className="text-muted" />
              </div>
            </>
          )}

          {/* Controls */}
          <button 
            onClick={prevImg}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-void/70 border border-line flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-violet/40 hover:bg-void"
          >
            <ChevronLeft size={12} className="text-muted" />
          </button>
          <button 
            onClick={nextImg}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-void/70 border border-line flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:border-violet/40 hover:bg-void"
          >
            <ChevronRight size={12} className="text-muted" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-2.5 right-2.5 flex gap-1 z-10">
            {GALLERY.map((_, i) => (
              <div 
                key={i} 
                className={`w-1 h-1 rounded-full transition-all ${i === imgIndex ? 'bg-violet-soft w-2.5' : 'bg-faint/60'}`}
              />
            ))}
          </div>
        </div>

        {/* Dynamic Caption */}
        <div className="mt-2 min-h-[34px]">
          <p className="text-[11px] font-semibold text-ink leading-snug">{GALLERY[imgIndex].title}</p>
          <p className="text-[10px] text-muted leading-relaxed truncate">{GALLERY[imgIndex].desc}</p>
        </div>
      </div>
    </div>
  )
}

/* ── Certs Box ─────────────────────────────────────────────────────────── */
function CertsBox() {
  return (
    <div className="rounded-2xl border border-line bg-surface/70 backdrop-blur-sm overflow-hidden">
      <div className="px-5 py-4 border-b border-line flex items-center gap-2.5">
        <Award size={14} className="text-violet-soft" />
        <p className="font-display text-sm font-semibold text-ink">Certifications</p>
      </div>
      <div className="overflow-y-auto max-h-[200px] custom-scrollbar">
        <ul className="p-3 space-y-1">
          {certs.map((c, i) => (
            <motion.li key={c.text}
              initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              className="flex items-center gap-3 px-3.5 py-2 rounded-xl border border-transparent hover:border-line hover:bg-void/40 text-muted transition-all"
            >
              <span className="shrink-0">
                <Award size={12} className="text-faint" />
              </span>
              <span className="text-[12px] leading-snug">{c.text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ── Education Card ────────────────────────────────────────────────────── */
function EducationCard() {
  return (
    <div className="rounded-2xl border border-line bg-surface/70 backdrop-blur-sm p-6 space-y-4">
      <div className="flex items-center gap-2">
        <GraduationCap size={16} className="text-violet-soft" />
        <p className="font-mono text-[10px] text-faint uppercase tracking-wider">Education</p>
      </div>
      <div className="space-y-2">
        <h3 className="text-base text-ink font-semibold leading-snug">Dhanekula Institute of Engineering &amp; Technology</h3>
        <p className="text-sm text-muted">B.Tech Artificial Intelligence &amp; Machine Learning</p>
        <div className="flex items-center gap-4 text-xs text-faint font-mono">
          <span className="flex items-center gap-1"><Calendar size={12} /> 2023 – 2027</span>
        </div>
      </div>
      <div className="pt-2 border-t border-line flex items-center justify-between">
        <span className="text-xs text-muted">Academic Standing</span>
        <span className="inline-block text-xs px-3 py-1.5 rounded-full bg-violet/15 border border-violet/30 text-violet-soft font-mono">
          CGPA 9.4 / 10
        </span>
      </div>
    </div>
  )
}

/* ── Main Component ────────────────────────────────────────────────────── */
const TABS = ['Experience', 'Education']

export default function Experience() {
  const [tab, setTab] = useState(0)
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <section id="experience" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header + tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="font-mono text-xs text-violet-soft tracking-widest uppercase">Career</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-ink mt-2 mb-6">
            Experience &amp; Achievements
          </h2>

          {/* Tab switcher */}
          <div className="inline-flex p-1 rounded-xl bg-surface/80 border border-line backdrop-blur-sm">
            {TABS.map((t, i) => (
              <button
                key={t}
                onClick={() => setTab(i)}
                className={`relative px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  tab === i ? 'text-ink' : 'text-muted hover:text-ink'
                }`}
              >
                {tab === i && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-lg bg-violet/20 border border-violet/35"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{t}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {tab === 0 ? (
            <motion.div key="exp"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-12 gap-10 items-start"
            >
              {/* Timeline */}
              <div className="md:col-span-7">
                {roles.map((r, i) => <TimelineItem key={r.title} role={r} index={i} />)}
              </div>
              {/* Achievements + Certs beside timeline */}
              <div className="md:col-span-5 sticky top-20 space-y-6">
                <AchievementsBox onZoomImage={setSelectedImg} />
                <CertsBox />
              </div>
            </motion.div>
          ) : (
            <motion.div key="edu"
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid md:grid-cols-12 gap-10 items-start"
            >
              <div className="md:col-span-7">
                <EducationCard />
              </div>
              <div className="md:col-span-5 space-y-6">
                <AchievementsBox onZoomImage={setSelectedImg} />
                <CertsBox />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
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
