import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github, ChevronDown } from 'lucide-react'
import { TechTag } from './TechTag.jsx'

/* ── Data ─────────────────────────────────────────────────────────────── */
const FEATURED = [
  {
    n: '01',
    title: 'Project Foresight',
    tag: 'National Hackathon Winner — AQVH 2025',
    badge: '🏆 Winner',
    description:
      'A hybrid GNN + quantum-ML fraud detection system. A Graph Attention Network encodes transaction topology; a Qiskit QSVC and VQE-based Hamiltonian model score anomalies — catching structurally fraudulent "mule" rings a classical XGBoost baseline misses entirely.',
    stat: { value: '94%', label: 'mule-ring detection vs 0% classical baseline' },
    stack: ['Qiskit', 'PyTorch Geometric', 'NetworkX', 'TVAE', 'XGBoost', 'ChromaDB'],
    github: 'https://github.com/kundanareddy2830/Project-Foresight',
    demo: null,
  },
  {
    n: '02',
    title: 'OrbitBot',
    tag: 'ISRO Bharatiya Antariksh Hackathon 2025',
    description:
      "A hybrid RAG assistant for ISRO's MOSDAC satellite data portal. Crawls and unifies 3,000+ pages into a Neo4j knowledge graph and ChromaDB vector index, deployed as a live full-stack app answering scientific queries in real time.",
    stat: { value: '3,000+', label: 'documents indexed via hybrid retrieval' },
    stack: ['React.js', 'FastAPI', 'Neo4j', 'LangChain', 'ChromaDB'],
    github: 'https://github.com/kundanareddy2830/OrbitBot',
    demo: 'https://orbit-bot.vercel.app',
  },
  {
    n: '03',
    title: 'WishMart',
    tag: 'Production E-Commerce Platform',
    badge: 'Full Stack',
    description:
      'A full-stack, production-style e-commerce platform built with Django 4.2. Stateless sessions via signed cookies, full cart/order/user management, Whitenoise static assets, Pytest test suites, and optional Celery background tasks.',
    stat: { value: 'Prod', label: 'style Django 4.2 platform with comprehensive automated testing' },
    stack: ['Python', 'Django', 'PostgreSQL', 'Whitenoise', 'Pytest'],
    github: 'https://github.com/kundanareddy2830/e-commerce',
    demo: 'https://e-commerce-n5fz.onrender.com',
  },
  {
    n: '04',
    title: 'NexusQA',
    tag: 'Autonomous Quality Intelligence Engine',
    description:
      'Three coordinated agents that autonomously map applications, detect defects, and generate reproducible Playwright tests.',
    stat: { value: '3', label: 'coordinated agents executing comprehensive automated testing' },
    stack: ['Python', 'FastAPI', 'React', 'Neo4j', 'Playwright'],
    github: 'https://github.com/kundanareddy2830/NexusQA',
    demo: null,
  },
  {
    n: '05',
    title: 'StudyChain',
    tag: 'AI Academic Digest Platform',
    description:
      'An AI-powered academic platform featuring high-throughput document processing using Groq-hosted LLMs to compile comprehensive structured study materials, complete with JWT-authenticated workflows for progress tracking.',
    stat: { value: 'Live', label: 'deployed with authenticated student workflows' },
    stack: ['FastAPI', 'React', 'Groq LLM', 'SQLAlchemy', 'JWT'],
    github: 'https://github.com/arifmohammad30/Study-Chain',
    demo: 'https://study-chain-ten.vercel.app',
  },
  {
    n: '06',
    title: 'Driver Distraction Detection',
    tag: 'Computer Vision · Deep Learning',
    description:
      'Implements and benchmarks Custom CNN, VGG19, and EfficientNetB3 transfer learning on the State Farm Distracted Driver Detection dataset (~22,000 images, 10 classes). EfficientNetB3 achieved 94.6% validation accuracy.',
    stat: { value: '94.6%', label: 'validation accuracy with EfficientNetB3' },
    stack: ['Python', 'TensorFlow/Keras', 'EfficientNetB3'],
    github: 'https://github.com/kundanareddy2830/driver-distraction',
    demo: null,
  },
]

const MORE = [
  { title: 'News Veracity Detector',        description: 'ML-powered fake news detection using TF-IDF, Logistic Regression, Random Forest, and Gradient Boosting.',       stack: ['Python', 'Scikit-learn', 'Pandas'],          github: 'https://github.com/kundanareddy2830/news_veracity_detector' },
  { title: 'Swipe-Based Recommender',       description: 'Tinder-style engine that learns preferences through left/right swipes to surface personalised recommendations.',   stack: ['Python', 'React', 'FastAPI'],                 github: 'https://github.com/kundanareddy2830/swipe-based-recommender' },
  { title: 'Vendor Recommendation',         description: 'Smart vendor matching for event planning using collaborative filtering and similarity scoring.',                   stack: ['Python', 'Neo4j', 'FastAPI'],                 github: 'https://github.com/kundanareddy2830/-Vendor-Recommendation-Event-Planning-' },
  { title: 'Movie Recommendation System',   description: 'Content-based and collaborative filtering movie recommender using TMDB / MovieLens dataset.',                     stack: ['Python', 'Scikit-learn', 'Pandas'],          github: 'https://github.com/kundanareddy2830/movie_recommendation-system' },
  { title: 'Object Detection App',          description: 'Real-time object detection built during Google AICTE AI-ML Internship using TensorFlow.',                         stack: ['Python', 'TensorFlow', 'React'],              github: 'https://github.com/kundanareddy2830/object-detection' },
  { title: 'Social Media App',              description: 'Full-stack social media platform with posts, likes, comments, follows and JWT authentication.',                    stack: ['React.js', 'FastAPI', 'PostgreSQL'],          github: 'https://github.com/kundanareddy2830/socialmediaapp' },
  { title: 'Chat Application',              description: 'Real-time chat app with WebSocket support, rooms, and live user presence — built during CodeAlpha internship.',   stack: ['React', 'FastAPI'],                           github: 'https://github.com/kundanareddy2830/Chat-Application' },
  { title: 'Spotify UI Clone',              description: 'Pixel-perfect Spotify web player UI recreation with responsive layout and music player controls.',                 stack: ['HTML', 'CSS', 'JavaScript'],                  github: 'https://github.com/kundanareddy2830/spotify-UI' },
  { title: 'Chess Game',                    description: 'Browser chess with full move validation, check/checkmate detection, and a polished interface.',                   stack: ['HTML', 'CSS', 'JavaScript'],                  github: 'https://github.com/kundanareddy2830/chess-game' },
  { title: 'Simon Game',                    description: 'Classic Simon memory game with randomised colour sequences and increasing difficulty levels.',                     stack: ['HTML', 'CSS', 'JavaScript', 'jQuery'],        github: 'https://github.com/kundanareddy2830/simon-game' },
  { title: 'Quiz App',                      description: 'Interactive quiz with timers, score tracking, and multiple question categories.',                                  stack: ['HTML', 'CSS', 'JavaScript'],                  github: 'https://github.com/kundanareddy2830/quiz' },
  { title: 'Playlist Manager',              description: 'Music playlist management app — add, edit, reorder and organise your tracks.',                                     stack: ['HTML', 'CSS', 'JavaScript'],                  github: 'https://github.com/kundanareddy2830/Playlist' },
  { title: 'CAPTCHA Generator',             description: 'Custom CAPTCHA generation and validation system for web form security.',                                           stack: ['HTML', 'CSS', 'JavaScript'],                  github: 'https://github.com/kundanareddy2830/captcha' },
  { title: 'Website Interface',             description: 'A sleek landing page / UI component design project demonstrating frontend fundamentals.',                          stack: ['HTML', 'CSS', 'JavaScript'],                  github: 'https://github.com/kundanareddy2830/website-interface' },
]

/* ── Variants ─────────────────────────────────────────────────────────── */
const fadeUp  = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } }
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } }
const cardV   = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.4 } } }

/* ── Featured row ─────────────────────────────────────────────────────── */
function FeaturedRow({ p }) {
  return (
    <motion.article
      initial="hidden" whileInView="show" viewport={{ once: true, margin: '-60px' }} variants={fadeUp}
      className="group relative grid md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-12 border-b border-line"
    >
      <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700 bg-gradient-to-r from-violet to-transparent" />

      {/* Number */}
      <div className="md:col-span-1">
        <span className="font-mono text-sm text-faint">{p.n}</span>
      </div>

      {/* Title + tags */}
      <div className="md:col-span-4 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-mono text-[10px] text-violet-soft uppercase tracking-wider">{p.tag}</p>
          {p.badge && (
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-violet/20 border border-violet/40 text-violet-soft font-mono">{p.badge}</span>
          )}
        </div>
        <h3 className="font-display text-2xl md:text-[1.6rem] font-bold text-ink group-hover:text-violet-soft transition-colors">
          {p.title}
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map(s => <TechTag key={s} label={s} />)}
        </div>
      </div>

      {/* Description */}
      <div className="md:col-span-5">
        <p className="text-muted leading-relaxed text-[14px]">{p.description}</p>
      </div>

      {/* Stat + links */}
      <div className="md:col-span-2 flex md:flex-col justify-between items-start gap-4">
        <div>
          <p className="font-display text-2xl font-bold text-violet-soft">{p.stat.value}</p>
          <p className="text-[11px] text-faint mt-1 leading-snug max-w-[130px]">{p.stat.label}</p>
        </div>
        <div className="flex gap-2">
          <motion.a href={p.github} target="_blank" rel="noreferrer" aria-label="GitHub"
            whileHover={{ scale: 1.12, y: -2 }}
            className="w-8 h-8 rounded-full border border-line flex items-center justify-center text-muted hover:text-violet-soft hover:border-violet/50 hover:bg-violet/10 transition-colors"
          ><Github size={14} /></motion.a>
          {p.demo && (
            <motion.a href={p.demo} target="_blank" rel="noreferrer" aria-label="Demo"
              whileHover={{ scale: 1.12, y: -2 }}
              className="w-8 h-8 rounded-full border border-line flex items-center justify-center text-muted hover:text-violet-soft hover:border-violet/50 hover:bg-violet/10 transition-colors"
            ><ArrowUpRight size={14} /></motion.a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

/* ── Small card ───────────────────────────────────────────────────────── */
function SmallCard({ p }) {
  return (
    <motion.div variants={cardV} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}
      className="group flex flex-col p-5 bg-surface/70 border border-line rounded-2xl hover:border-violet/35 transition-all duration-300 backdrop-blur-sm"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-display text-[14px] font-semibold text-ink group-hover:text-violet-soft transition-colors leading-snug pr-2">
          {p.title}
        </h3>
        <motion.a href={p.github} target="_blank" rel="noreferrer" aria-label={p.title}
          whileHover={{ scale: 1.2 }} onClick={e => e.stopPropagation()}
          className="text-faint hover:text-violet-soft transition-colors shrink-0 mt-0.5"
        ><Github size={14} /></motion.a>
      </div>
      <p className="text-[12px] text-muted leading-relaxed flex-1">{p.description}</p>
      <div className="flex flex-wrap gap-1.5 mt-4">
        {p.stack.map(s => <TechTag key={s} label={s} size={11} />)}
      </div>
    </motion.div>
  )
}

/* ── Section ──────────────────────────────────────────────────────────── */
export default function Projects() {
  const [showMore, setShowMore] = useState(false)
  const visible = showMore ? MORE : MORE.slice(0, 6)

  return (
    <section id="work" className="py-28 md:py-36 border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={fadeUp} className="mb-16 md:mb-20">
          <span className="font-mono text-xs text-violet-soft tracking-widest uppercase">Selected Work</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mt-4 text-balance leading-tight">
            {FEATURED.length + MORE.length} projects across AI/ML,<br />quantum &amp; full-stack.
          </h2>
        </motion.div>

        {/* Featured */}
        <div className="mb-24">
          {FEATURED.map(p => <FeaturedRow key={p.n} p={p} />)}
        </div>

        {/* More */}
        <div>
          <div className="flex items-end justify-between mb-8">
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
              <span className="font-mono text-xs text-violet-soft tracking-widest uppercase">Repository Archives</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-ink mt-2">GitHub Archive</h3>
            </motion.div>
            <motion.button onClick={() => setShowMore(!showMore)} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
              className="hidden sm:flex items-center gap-2 text-sm px-4 py-2 rounded-full border border-line text-muted hover:text-ink hover:border-faint transition-colors"
            >
              {showMore ? 'Show less' : `View all ${MORE.length}`}
              <motion.div animate={{ rotate: showMore ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown size={14} />
              </motion.div>
            </motion.button>
          </div>

          <motion.div key={showMore ? 'all' : 'some'} variants={stagger} initial="hidden" animate="show"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {visible.map(p => <SmallCard key={p.title} p={p} />)}
          </motion.div>

          {!showMore && (
            <p className="mt-5 text-xs text-faint text-center">Showing 6 of {MORE.length} — click "View all" to expand</p>
          )}
        </div>
      </div>
    </section>
  )
}
