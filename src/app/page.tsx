'use client'
import CompFundo from '@/components/CompFundo'
import TitleHome from '@/components/TitleHome'
import React, { useEffect, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const Home = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const canRef = useRef<HTMLDivElement>(null)
  const dampen = 70

  const handleMouseMove = (e: MouseEvent) => {
    if (canRef.current) {
      const rect = canRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      mouseX.set(x)
      mouseY.set(y)
    }
  }

  useEffect(() => {
    const handleThrottledMouseMove = throttle(handleMouseMove, 16)
    window.addEventListener('mousemove', handleThrottledMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleThrottledMouseMove)
    }
  }, [])

  const rotateX = useTransform<number, number>(
    mouseY,
    (newMouseY) => -newMouseY / dampen,
  )
  const rotateY = useTransform<number, number>(
    mouseX,
    (newMouseX) => newMouseX / dampen,
  )

  const throttle = (func: (event: MouseEvent) => void, limit: number) => {
    let inThrottle = false
    return (event: MouseEvent) => {
      if (!inThrottle) {
        func(event)
        inThrottle = true
        setTimeout(() => (inThrottle = false), limit)
      }
    }
  }
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

export default Home
