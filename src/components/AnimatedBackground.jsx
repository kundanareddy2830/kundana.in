import { useEffect, useRef } from 'react'

/*
  PERLIN FLOW BACKGROUND
  ───────────────────────
  Organic smoke-like wisps of violet / indigo / teal colour
  that slowly drift upward using a simple layered sine noise
  approximation (no external lib needed).

  Very low opacity — professional and non-distracting.
*/

function snoise(x, y, t) {
  return (
    Math.sin(x * 1.3 + t * 0.31) * 0.35 +
    Math.sin(y * 0.9 + t * 0.19) * 0.30 +
    Math.sin((x + y) * 0.7 + t * 0.24) * 0.20 +
    Math.sin(x * 2.1 - y * 1.4 + t * 0.13) * 0.15
  )
}

const WISPS = [
  { color: [124, 58,  237], xSeed: 0.12, ySeed: 0.70 },
  { color: [99,  102, 241], xSeed: 0.35, ySeed: 0.55 },
  { color: [45,  212, 191], xSeed: 0.61, ySeed: 0.40 },
  { color: [139, 92,  246], xSeed: 0.80, ySeed: 0.65 },
  { color: [20,  184, 166], xSeed: 0.48, ySeed: 0.82 },
]

export default function AnimatedBackground() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    let t = 0

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const draw = () => {
      t += 0.0028

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const W = canvas.width
      const H = canvas.height

      WISPS.forEach((wisp, wi) => {
        const [r, g, b] = wisp.color
        const STEPS  = 90
        const spread = 0.38

        const pts = []
        for (let i = 0; i < STEPS; i++) {
          const progress = i / STEPS
          const bx = wisp.xSeed * W + snoise(wisp.xSeed * 4, progress * 3 + wi, t) * W * spread
          const by = H * (1 - progress) - (t * 18) % H
          pts.push({ x: bx, y: by })
        }

        for (let pass = 0; pass < 3; pass++) {
          const lw    = [120, 70, 30][pass]
          const alpha = [0.018, 0.028, 0.045][pass]

          ctx.beginPath()
          ctx.moveTo(pts[0].x, pts[0].y)
          for (let i = 1; i < pts.length - 1; i++) {
            const mx = (pts[i].x + pts[i + 1].x) / 2
            const my = (pts[i].y + pts[i + 1].y) / 2
            ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my)
          }

          const grad = ctx.createLinearGradient(0, H, 0, 0)
          grad.addColorStop(0,   `rgba(${r},${g},${b},0)`)
          grad.addColorStop(0.3, `rgba(${r},${g},${b},${alpha})`)
          grad.addColorStop(0.7, `rgba(${r},${g},${b},${alpha * 0.6})`)
          grad.addColorStop(1,   `rgba(${r},${g},${b},0)`)

          ctx.strokeStyle = grad
          ctx.lineWidth   = lw
          ctx.lineCap     = 'round'
          ctx.lineJoin    = 'round'
          ctx.stroke()
        }
      })

      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}
