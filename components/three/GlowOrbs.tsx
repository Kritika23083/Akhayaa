"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type GlowOrbsProps = {
  reduced?: boolean;
};

export function GlowOrbs({ reduced = false }: GlowOrbsProps) {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    if (!group.current || reduced) return;

    const time = clock.getElapsedTime();
    group.current.rotation.z = Math.sin(time * 0.12) * 0.025;
    group.current.position.x = pointer.x * 0.16;
    group.current.position.y = pointer.y * 0.08;
  });

  return (
    <group ref={group}>
      <mesh position={[-2.6, 1.2, -1.5]}>
        <sphereGeometry args={[0.72, 24, 24]} />
        <meshBasicMaterial color="#d6a15f" transparent opacity={0.16} />
      </mesh>
      <mesh position={[2.35, -0.15, -1.2]}>
        <sphereGeometry args={[0.54, 24, 24]} />
        <meshBasicMaterial color="#879471" transparent opacity={0.13} />
      </mesh>
      <mesh position={[0.85, 1.75, -2.2]}>
        <sphereGeometry args={[0.44, 20, 20]} />
        <meshBasicMaterial color="#c67855" transparent opacity={0.1} />
      </mesh>
    </group>
  );
}
