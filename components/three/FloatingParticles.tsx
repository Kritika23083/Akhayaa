"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type FloatingParticlesProps = {
  reduced?: boolean;
};

export function FloatingParticles({ reduced = false }: FloatingParticlesProps) {
  const ref = useRef<THREE.Points>(null);
  const count = reduced ? 45 : 115;

  const positions = useMemo(() => {
    const points = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      points[i * 3] = (Math.random() - 0.5) * 9;
      points[i * 3 + 1] = Math.random() * 4.5 - 1.2;
      points[i * 3 + 2] = (Math.random() - 0.5) * 5.8;
    }

    return points;
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current || reduced) return;

    const time = clock.getElapsedTime();
    ref.current.rotation.y = time * 0.018;
    ref.current.position.y = Math.sin(time * 0.24) * 0.045;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#d7b46f"
        size={0.026}
        sizeAttenuation
        depthWrite={false}
        opacity={0.38}
      />
    </Points>
  );
}
