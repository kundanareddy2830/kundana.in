// Central tech icon + colour map — verified against installed react-icons version
import {
  SiPython, SiReact, SiTensorflow, SiPytorch, SiDjango,
  SiFastapi, SiPostgresql, SiJavascript, SiHtml5,
  SiJquery, SiScikitlearn, SiPandas, SiGit,
  SiThreedotjs, SiNodedotjs, SiJupyter,
  SiDocker, SiMongodb, SiLangchain,
  SiTailwindcss, SiGithub, SiCplusplus, SiMysql,
} from 'react-icons/si'
import { BsDatabaseFill } from 'react-icons/bs'
import { FaBrain, FaAtom, FaCode, FaDatabase } from 'react-icons/fa'

export const TECH_ICON_MAP = {
  // Languages
  Python:               { Icon: SiPython,       color: '#3B82F6' },
  JavaScript:           { Icon: SiJavascript,   color: '#EAB308' },
  HTML:                 { Icon: SiHtml5,         color: '#F97316' },
  CSS:                  { Icon: SiTailwindcss,   color: '#38BDF8' },
  jQuery:               { Icon: SiJquery,        color: '#60A5FA' },
  // Frameworks / Backend
  'React':              { Icon: SiReact,         color: '#38BDF8' },
  'React.js':           { Icon: SiReact,         color: '#38BDF8' },
  FastAPI:              { Icon: SiFastapi,       color: '#34D399' },
  Django:               { Icon: SiDjango,        color: '#4ADE80' },
  'Node.js':            { Icon: SiNodedotjs,     color: '#86EFAC' },
  // AI / ML
  TensorFlow:           { Icon: SiTensorflow,    color: '#FBBF24' },
  'TensorFlow/Keras':   { Icon: SiTensorflow,    color: '#FBBF24' },
  PyTorch:              { Icon: SiPytorch,       color: '#FB923C' },
  'PyTorch Geometric':  { Icon: SiPytorch,       color: '#FB923C' },
  'Scikit-learn':       { Icon: SiScikitlearn,   color: '#F97316' },
  Pandas:               { Icon: SiPandas,        color: '#818CF8' },
  LangChain:            { Icon: SiLangchain,     color: '#A78BFA' },
  // Databases
  Neo4j:                { Icon: FaDatabase,      color: '#4ADE80' },
  PostgreSQL:           { Icon: SiPostgresql,    color: '#60A5FA' },
  MongoDB:              { Icon: SiMongodb,       color: '#4ADE80' },
  // Tools
  'Three.js':           { Icon: SiThreedotjs,    color: '#D4D4D8' },
  Playwright:           { Icon: FaCode,          color: '#FB7185' },
  Git:                  { Icon: SiGit,           color: '#F87171' },
  Docker:               { Icon: SiDocker,        color: '#60A5FA' },
  Jupyter:              { Icon: SiJupyter,       color: '#F97316' },
  // Languages extra
  Java:                 { Icon: FaCode,          color: '#F97316' },
  C:                    { Icon: SiCplusplus,     color: '#60A5FA' },
  SQL:                  { Icon: SiMysql,         color: '#60A5FA' },
  GitHub:               { Icon: SiGithub,        color: '#D4D4D8' },
  // Special / no exact icon
  Qiskit:               { Icon: FaAtom,          color: '#A78BFA' },
  'Quantum ML':         { Icon: FaAtom,          color: '#A78BFA' },
  'EfficientNetB3':     { Icon: FaBrain,         color: '#C084FC' },
  'Groq LLM':           { Icon: FaBrain,         color: '#34D399' },
  ChromaDB:             { Icon: BsDatabaseFill,  color: '#A78BFA' },
  SQLAlchemy:           { Icon: BsDatabaseFill,  color: '#60A5FA' },
  Whitenoise:           { Icon: FaCode,          color: '#94A3B8' },
  Pytest:               { Icon: SiPython,        color: '#FBBF24' },
  JWT:                  { Icon: BsDatabaseFill,  color: '#34D399' },
  'REST APIs':          { Icon: FaCode,          color: '#60A5FA' },
  'Object Detection':   { Icon: FaBrain,         color: '#F97316' },
  'Image Classification':{ Icon: FaBrain,        color: '#F97316' },
  // AI/ML concepts
  'Machine Learning':   { Icon: FaBrain,         color: '#A78BFA' },
  'Deep Learning':      { Icon: FaBrain,         color: '#C084FC' },
  'NLP':                { Icon: FaBrain,         color: '#818CF8' },
  'Computer Vision':    { Icon: FaBrain,         color: '#FB923C' },
  'Generative AI':      { Icon: FaBrain,         color: '#34D399' },
  'LLMs':               { Icon: FaBrain,         color: '#4ADE80' },
  'RAG':                { Icon: BsDatabaseFill,  color: '#818CF8' },
  // Core CS — subtle neutral icons
  'Data Structures & Algorithms': { Icon: FaCode, color: '#60A5FA' },
  'DBMS':               { Icon: FaDatabase,      color: '#60A5FA' },
  'Operating Systems':  { Icon: FaCode,          color: '#94A3B8' },
  'Computer Networks':  { Icon: FaCode,          color: '#94A3B8' },
}

// Tag pill with icon
export function TechTag({ label, size = 12 }) {
  const meta = TECH_ICON_MAP[label]
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono px-2.5 py-1 rounded-lg border border-line bg-surface/60 text-faint hover:text-ink hover:border-violet/30 transition-colors cursor-default whitespace-nowrap">
      {meta && (
        <meta.Icon size={size} style={{ color: meta.color, flexShrink: 0 }} />
      )}
      {label}
    </span>
  )
}
