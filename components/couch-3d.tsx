import { useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from 'three'

export default function Couch() {
  const meshRef = useRef<THREE.Mesh>(null)

  const leatherTexture = useTexture('/textures/leather.png')
  leatherTexture.wrapS = leatherTexture.wrapT = THREE.RepeatWrapping
  leatherTexture.repeat.set(2, 2)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
  })

  return (
    <group>
    {/* Base/frame */}
    <mesh position={[0, 0.3, 0]}>
      <boxGeometry args={[2.2, 0.2, 1.2]} />
      <meshStandardMaterial map={leatherTexture} color="#d62828" />
    </mesh>

    {/* Left armrest */}
    <mesh position={[-1, 0.6, 0]}>
      <boxGeometry args={[0.2, 0.6, 1.2]} />
      <meshStandardMaterial map={leatherTexture} color="#e63946" />
    </mesh>

    {/* Right armrest */}
    <mesh position={[1, 0.6, 0]}>
      <boxGeometry args={[0.2, 0.6, 1.2]} />
      <meshStandardMaterial map={leatherTexture} color="#e63946" />
    </mesh>

    {/* Back support */}
    <mesh position={[0, 0.8, -0.5]}>
      <boxGeometry args={[2.2, 1.2, 0.2]} />
      <meshStandardMaterial map={leatherTexture} color="#e63946" />
    </mesh>

    {/* Back cushions */}
    <mesh position={[0, 0.8, -0.35]}>
      <boxGeometry args={[1.8, 0.8, 0.2]} />
      <meshStandardMaterial map={leatherTexture} color="#ff8c8c" />
    </mesh>

    {/* Seat base padding */}
    <mesh position={[0, 0.45, 0]}>
      <boxGeometry args={[1.8, 0.1, 0.8]} />
      <meshStandardMaterial map={leatherTexture} color="#e63946" />
    </mesh>

    {/* Seat cushions */}
    <mesh position={[0, 0.6, 0]}>
      <boxGeometry args={[1.8, 0.2, 0.8]} />
      <meshStandardMaterial map={leatherTexture} color="#ff8c8c" />
    </mesh>

    {/* Decorative piping - front */}
    <mesh position={[0, 0.7, 0.4]}>
      <boxGeometry args={[1.8, 0.05, 0.05]} />
      <meshStandardMaterial color="#d62828" />
    </mesh>

    {/* Front support feet - left and right */}
    <mesh position={[-0.8, 0.1, 0.4]}>
      <boxGeometry args={[0.1, 0.2, 0.1]} />
      <meshStandardMaterial color="#8d0801" />
    </mesh>
    <mesh position={[0.8, 0.1, 0.4]}>
      <boxGeometry args={[0.1, 0.2, 0.1]} />
      <meshStandardMaterial color="#8d0801" />
    </mesh>

    {/* Back support feet - left and right */}
    <mesh position={[-0.8, 0.1, -0.4]}>
      <boxGeometry args={[0.1, 0.2, 0.1]} />
      <meshStandardMaterial color="#8d0801" />
    </mesh>
    <mesh position={[0.8, 0.1, -0.4]}>
      <boxGeometry args={[0.1, 0.2, 0.1]} />
      <meshStandardMaterial color="#8d0801" />
    </mesh>
  </group>
  )
}