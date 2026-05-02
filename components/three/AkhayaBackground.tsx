"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, PerspectiveCamera } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { Group } from "three";
import { DreamTerrain } from "@/components/three/DreamTerrain";
import { FloatingParticles } from "@/components/three/FloatingParticles";
import { GlowOrbs } from "@/components/three/GlowOrbs";

function Scene({ reduced }: { reduced: boolean }) {
  const group = useRef<Group>(null);
  const { pointer } = useThree();

  useFrame(({ clock }) => {
    if (!group.current || reduced) return;

    const time = clock.getElapsedTime();
    group.current.rotation.y += (pointer.x * 0.045 - group.current.rotation.y) * 0.018;
    group.current.rotation.x += (-pointer.y * 0.018 - group.current.rotation.x) * 0.018;
    group.current.position.y = Math.sin(time * 0.18) * 0.05;
  });

  return (
    <group ref={group}>
      <ambientLight intensity={1.75} />
      <directionalLight position={[1.5, 2.8, 3]} intensity={1.7} color="#fff0cf" />
      <pointLight position={[-2.4, 1.4, 1.2]} intensity={1.1} color="#e8ad83" />
      <DreamTerrain reduced={reduced} />
      <GlowOrbs reduced={reduced} />
      <FloatingParticles reduced={reduced} />
      <Environment preset="sunset" />
    </group>
  );
}

function useReducedExperience() {
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarseQuery = window.matchMedia("(pointer: coarse)");

    const update = () => {
      setReduced(motionQuery.matches || window.innerWidth < 768 || coarseQuery.matches);
    };

    update();
    motionQuery.addEventListener("change", update);
    window.addEventListener("resize", update);

    return () => {
      motionQuery.removeEventListener("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return reduced;
}

export default function AkhayaBackground() {
  const reduced = useReducedExperience();

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      camera={{ position: [0, 1.4, 5.6], fov: 42 }}
      className="opacity-80"
    >
      <PerspectiveCamera makeDefault position={[0, 1.45, 5.6]} fov={42} />
      <Suspense fallback={null}>
        <Scene reduced={reduced} />
      </Suspense>
    </Canvas>
  );
}
