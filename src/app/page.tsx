'use client'
import CompFundo from '@/components/CompFundo'
import TitleHome from '@/components/TitleHome'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Home() {
  const mouseX = useMotionValue(
    typeof window !== 'undefined' ? window.innerWidth / 2 : 0,
  )
  const mouseY = useMotionValue(
    typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
  )

  const canRef = useRef<HTMLDivElement>(null)

  const dampen = 40
  const rotateX = useTransform<number, number>(mouseY, (newMouseY) => {
    if (!canRef.current) return 0
    const rect = canRef.current.getBoundingClientRect()
    const newRotateX = newMouseY - rect.top - rect.height / 2
    return -newRotateX / dampen
  })
  const rotateY = useTransform(mouseX, (newMouseX) => {
    if (!canRef.current) return 0
    const rect = canRef.current.getBoundingClientRect()
    const newRotateY = newMouseX - rect.left - rect.width / 2
    return newRotateY / dampen
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      animate(mouseX, e.clientX)
      animate(mouseY, e.clientY)
    }
    if (typeof window === 'undefined') return
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <motion.main className="relative w-screen h-screen overflow-hidden perspective-10 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <motion.div
        className="w-full h-full flex justify-center items-center transform-style-3d"
        style={{ rotateX, rotateY }}
      >
        <CompFundo />
        <div
          ref={canRef}
          className="w-full h-full flex justify-center items-center"
        >
          <TitleHome />
        </div>
      </motion.div>
    </motion.main>
  )
}
