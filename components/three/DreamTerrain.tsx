"use client";

import { MeshDistortMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type DreamTerrainProps = {
  reduced?: boolean;
};

export function DreamTerrain({ reduced = false }: DreamTerrainProps) {
  const terrainRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock, pointer }) => {
    if (!terrainRef.current || reduced) return;

    const time = clock.getElapsedTime();
    terrainRef.current.rotation.z = Math.sin(time * 0.12) * 0.018;
    terrainRef.current.position.x = pointer.x * 0.08;
    terrainRef.current.position.y = -1.45 + pointer.y * 0.035;
  });

  return (
    <mesh ref={terrainRef} rotation={[-1.18, 0, 0]} position={[0, -1.48, -1.25]} scale={[4.9, 1.5, 0.9]}>
      <planeGeometry args={[3.5, 3.5, 56, 56]} />
      <MeshDistortMaterial
        color="#b98257"
        distort={reduced ? 0.06 : 0.18}
        speed={reduced ? 0.35 : 0.75}
        roughness={0.82}
        metalness={0.02}
        transparent
        opacity={0.24}
      />
    </mesh>
  );
}
