import { motion } from 'framer-motion'
import React from 'react'

const TitleHome: React.FC = () => {
  return (
    <motion.div className="w-4/6 h-96 flex justify-center items-center flex-col gap-12 text-center text-slate-100 drop-shadow-5xl  border-2 border-white rounded">
      <motion.h1 className="flex justify-center items-center text-7xl font-medium uppercase Smoke">
        3D Framer Motion
      </motion.h1>
      <motion.p className="flex justify-center items-center text-xl font-normal uppercase Smoke">
        | &nbsp; Caio oliveira &nbsp; - &nbsp; Desenvolvedor Full-Stack &nbsp; |
      </motion.p>
    </motion.div>
  )
}

export default TitleHome
