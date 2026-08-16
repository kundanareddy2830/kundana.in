import { motion } from 'framer-motion'
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } }
const pill    = { hidden: { opacity: 0, scale: 0.88 }, show: { opacity: 1, scale: 1, transition: { duration: 0.3 } } }

export default function About() {
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
            Building intelligent systems,<br />from models to products.
          </h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid md:grid-cols-12 gap-12">

          {/* Left: bio */}
          <motion.div
            className="md:col-span-7 space-y-6"
            initial="hidden" whileInView="show"
            viewport={{ once: true, margin: '-80px' }} variants={fadeUp}
          >
            <p className="text-muted text-base md:text-[15px] leading-relaxed">
              I'm a <span className="text-ink font-medium">B.Tech Artificial Intelligence &amp; Machine Learning student</span> at Dhanekula Institute of Engineering &amp; Technology, focused on building intelligent, reliable, and user-centered software systems.
            </p>
            <p className="text-muted text-base md:text-[15px] leading-relaxed">
              My work spans <span className="text-ink font-medium">Machine Learning, Deep Learning, Generative AI, NLP, Computer Vision, Quantum ML, and Full-Stack Development</span>. I've built systems involving graph neural networks, quantum machine learning, RAG pipelines, knowledge graphs, multi-agent architectures, computer vision, and AI-powered applications.
            </p>
            <p className="text-muted text-base md:text-[15px] leading-relaxed">
              What I enjoy most is taking an AI idea beyond the model itself — designing the <span className="text-ink font-medium">data pipeline, model, backend, APIs, and user-facing application</span> needed to turn it into a practical product. My projects range from a hybrid quantum-classical fraud detection system and an ISRO-focused RAG assistant to autonomous QA agents and deep-learning-based driver distraction detection.
            </p>
            <p className="text-muted text-base md:text-[15px] leading-relaxed">
              I'm particularly interested in <span className="text-ink font-medium">AI Engineering and Software Engineering roles</span> where machine intelligence meets scalable, well-designed software.
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

          {/* Right: education card */}
          <motion.div
            className="md:col-span-5"
            initial="hidden" whileInView="show"
            viewport={{ once: true, margin: '-80px' }} variants={fadeUp}
          >
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
          </motion.div>

        </div>
      </div>
    </section>
  )
}
