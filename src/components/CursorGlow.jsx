import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const el = glowRef.current
    if (!el) return
    // Only on non-touch devices
    if (window.matchMedia('(hover: none)').matches) return

    let rafId
    let targetX = -9999, targetY = -9999
    let currentX = -9999, currentY = -9999

    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
    }

    const animate = () => {
      currentX += (targetX - currentX) * 0.08
      currentY += (targetY - currentY) * 0.08
      el.style.transform = `translate(${currentX - 300}px, ${currentY - 300}px)`
      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    rafId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-0 w-[600px] h-[600px] rounded-full"
      style={{
        background: 'radial-gradient(circle, rgba(139,92,246,0.07) 0%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  )
}
