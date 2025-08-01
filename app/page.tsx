"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./components/experience";

export default function Home() {
  return (
    <main className="h-screen w-screen">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </main>
  );
}
