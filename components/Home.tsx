import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Environment } from '@react-three/drei';
import Couch  from './couch-3d';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5 } }
};

export function Home() {
  return (
    <motion.section className="h-screen flex flex-col items-center justify-center relative">
      <motion.h1 className="text-9xl font-bold mb-4" variants={fadeIn}>The Couch</motion.h1>
      <motion.p className="text-xl mb-8" variants={fadeIn}>Simple. Beautiful. Therapy.</motion.p>
      <motion.div className="w-full h-64 mb-8" variants={fadeIn}>
        <Canvas>
          <PerspectiveCamera makeDefault position={[-3, 1, 3]} />
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <Couch />
          <Environment preset="apartment" />
        </Canvas>
      </motion.div>
      <motion.button className="py-2 px-4 rounded bg-red-500 hover:bg-red-600 text-white" variants={fadeIn}>Book a Session</motion.button>
    </motion.section>
  );
}