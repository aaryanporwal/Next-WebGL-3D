import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei';
import Couch  from './couch-3d';
import "../app/styles.css"
import { useState } from 'react';
import Image from 'next/image';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 2 } }
};

export function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section className="h-screen flex flex-col items-center justify-center relative" variants={fadeIn}>
      <motion.h1 className="text-6xl md:text-8xl lg:text-9xl gradient-text font-bold mb-4" variants={fadeIn}>The Couch</motion.h1>
      <motion.p className="text-xl gradient-text mb-8" variants={fadeIn}>Simple. Beautiful. Therapy.</motion.p>
      <motion.div className="w-full h-64 mb-8" variants={fadeIn}>
        <Canvas>
          <ambientLight intensity={4} />
          <PerspectiveCamera makeDefault position={[-3, 1, 3]} />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={-0.09} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={10} />
          <Couch />
        </Canvas>
      </motion.div>
      {/* Weasel */}
      <div
      className="fixed bottom-4 right-4 z-50 flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
      variants={fadeIn}
      className="fixed bottom-4 right-5 z-50"
      initial={{ y: 0 }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      >
      <Image
        src="/Weasel.png"
        alt="Floating Template"
        width={100}
        height={100}
      />
     {/* Speech Bubble */}
     {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute right-16 bottom-20 transform origin-center rotate-12 bg-white text-black text-sm px-4 py-2 rounded-md shadow-lg"
        >
          <div className="absolute bottom-[-8px] right-3 w-4 h-4 bg-white rotate-45 transform origin-center shadow-sm">
          </div>
          Howdy!
        </motion.div>
      )}
    </motion.div>
    </div>
      <motion.button className="py-2 px-4 rounded bg-red-500 hover:bg-red-600 transition ease-out delay-100 hover:scale-110 hover:-translate-y-1 text-white" variants={fadeIn}>Book a Session</motion.button>
    </motion.section>
  );
}