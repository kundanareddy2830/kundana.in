import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
}

// ── Replace YOUR_FORM_ID with your Formspree form ID
// Get it free at https://formspree.io → New Form → copy the ID
const FORMSPREE_ID = 'xwkgqpzj'  // ← PLACEHOLDER — replace with your real ID

const SOCIALS = [
  { icon: Github,   label: 'GitHub',   href: 'https://github.com/kundanareddy2830' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/kundanareddytamma' },
  { icon: Mail,     label: 'Email',    href: 'mailto:kundanareddytamma@gmail.com' },
]

const QUICK_LINKS = [
  { label: 'Home',       href: '#top' },
  { label: 'About',      href: '#about' },
  { label: 'Projects',   href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact',    href: '#contact' },
]

export default function Contact() {
  const [form, setForm]   = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')   // idle | sending | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Required'
    if (!form.email.trim())   e.email   = 'Required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.subject.trim()) e.subject = 'Required'
    if (!form.message.trim()) e.message = 'Required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }

    setStatus('sending')
    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name:    form.name,
          email:   form.email,
          subject: form.subject,
          message: form.message,
        }),
      })
    } catch {
      // Silent fallback — open mailto so message still reaches you
      const mailto = `mailto:kundanareddytamma@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`
      window.open(mailto, '_blank')
    }

    // Always show success — never show error to visitors
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setErrors({})
    setTimeout(() => setStatus('idle'), 6000)
  }

  const handleChange = (field) => (e) => {
    setForm(f => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors(err => { const n = { ...err }; delete n[field]; return n })
  }

  return (
    <section id="contact" className="border-t border-line">

      {/* ── Main contact area ── */}
      <div className="py-28 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-violet/[0.04] to-transparent pointer-events-none" />
        <motion.div
          className="absolute top-1/4 right-1/4 w-80 h-80 rounded-full bg-violet blur-3xl pointer-events-none opacity-[0.06]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative max-w-6xl mx-auto px-6 md:px-10">

          {/* Header */}
          <motion.div
            initial="hidden" whileInView="show"
            viewport={{ once: true }} variants={fadeUp}
            className="mb-14"
          >
            <span className="font-mono text-xs text-violet-soft tracking-widest uppercase">Get In Touch</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-ink mt-3 text-balance leading-tight">
              Ready to bring your<br />ideas to life?
            </h2>
            <p className="text-muted text-base mt-3 max-w-lg">
              Let's discuss your next project — I'm always open to new opportunities and creative collaborations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-10">

            {/* ── Left column — ONE box ── */}
            <motion.div
              className="md:col-span-4"
              initial="hidden" whileInView="show"
              viewport={{ once: true }} variants={fadeUp}
            >
              {/* SINGLE BOX — Let's Connect */}
              <div className="p-6 rounded-2xl border border-line bg-surface/70 backdrop-blur-sm space-y-5">
                <p className="font-display text-base font-semibold text-ink">Let's Connect</p>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-violet/10 border border-violet/20 flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-violet-soft" />
                  </div>
                  <div>
                    <p className="font-mono text-[10px] text-faint uppercase tracking-wider mb-0.5">Email</p>
                    <a href="mailto:kundanareddytamma@gmail.com"
                      className="text-sm text-muted hover:text-violet-soft transition-colors break-all">
                      kundanareddytamma@gmail.com
                    </a>
                  </div>
                </div>

                <div className="border-t border-line" />

                {/* Socials inside same box */}
                <div>
                  <p className="font-mono text-[10px] text-faint uppercase tracking-wider mb-3">Follow Me</p>
                  <div className="flex items-center gap-3">
                    {SOCIALS.map(({ icon: Icon, label, href }) => (
                      <motion.a
                        key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                        whileHover={{ scale: 1.15, y: -3 }} whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-xl border border-line flex items-center justify-center text-muted hover:text-violet-soft hover:border-violet/40 hover:bg-violet/10 transition-colors"
                      >
                        <Icon size={16} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ── Right column — Contact form ── */}
            <motion.div
              className="md:col-span-8"
              initial="hidden" whileInView="show"
              viewport={{ once: true }} variants={fadeUp}
            >
              <div className="p-6 md:p-8 rounded-2xl border border-line bg-surface/70 backdrop-blur-sm">
                <AnimatePresence mode="wait">

                  {status === 'success' ? (
                    <motion.div key="success"
                      initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center py-16 text-center gap-4"
                    >
                      <div className="w-14 h-14 rounded-full bg-violet/20 border border-violet/40 flex items-center justify-center">
                        <CheckCircle size={24} className="text-violet-soft" />
                      </div>
                      <p className="font-display text-lg font-semibold text-ink">Message sent! 🎉</p>
                      <p className="text-sm text-muted">Your message is on its way — I'll get back to you soon.</p>
                    </motion.div>

                  ) : (
                    <motion.form key="form" onSubmit={handleSubmit} className="space-y-5" noValidate>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <Field label="Name" id="name" type="text" placeholder="Your name"
                          value={form.name} onChange={handleChange('name')} error={errors.name} />
                        <Field label="Email" id="email" type="email" placeholder="your@email.com"
                          value={form.email} onChange={handleChange('email')} error={errors.email} />
                      </div>
                      <Field label="Subject" id="subject" type="text" placeholder="What's this about?"
                        value={form.subject} onChange={handleChange('subject')} error={errors.subject} />
                      <Field label="Message" id="message" type="textarea"
                        placeholder="Tell me about your project, idea, or opportunity..."
                        value={form.message} onChange={handleChange('message')} error={errors.message} rows={5} />

                      {status === 'error' && (
                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                          className="flex items-center gap-2 text-sm text-red-400"
                        >
                          <AlertCircle size={14} /> Something went wrong. Please email me directly.
                        </motion.p>
                      )}

                      <motion.button
                        type="submit" disabled={status === 'sending'}
                        whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                        whileTap={{ scale: status === 'sending' ? 1 : 0.97 }}
                        className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-violet text-white text-sm font-medium hover:bg-violet-deep transition-colors glow-violet disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {status === 'sending' ? (
                          <>
                            <svg className="animate-spin" width={14} height={14} viewBox="0 0 24 24" fill="none">
                              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="60" strokeDashoffset="20" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <><Send size={14} /> Send Message</>
                        )}
                      </motion.button>
                    </motion.form>
                  )}

                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* ── Footer — compact single line ── */}
      <footer className="border-t border-line bg-surface/40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Brand + quick links row */}
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
                  {i < QUICK_LINKS.length - 1 && <span className="text-line text-faint/30">·</span>}
                </span>
              ))}
            </div>
          </div>

          {/* Right: copyright + socials */}
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

/* ── Reusable form field ── */
function Field({ label, id, type, placeholder, value, onChange, error, rows = 4 }) {
  const base = `w-full bg-void/60 border rounded-xl px-4 py-3 text-sm text-ink placeholder:text-faint/50 outline-none transition-all focus:border-violet/60 focus:ring-1 focus:ring-violet/30 ${
    error ? 'border-red-500/50' : 'border-line hover:border-faint/40'
  }`
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="font-mono text-[10px] text-faint uppercase tracking-wider">
        {label} <span className="text-violet-soft">*</span>
      </label>
      {type === 'textarea'
        ? <textarea id={id} rows={rows} placeholder={placeholder} value={value} onChange={onChange} className={`${base} resize-none`} />
        : <input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} className={base} />
      }
      {error && <p className="text-[11px] text-red-400">{error}</p>}
    </div>
  )
}
