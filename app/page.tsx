"use client";

import { Canvas } from "@react-three/fiber";
import { Scroll, ScrollControls } from "@react-three/drei";
import { useState } from "react";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";
import Cursor from "./components/Cursor";
import { Interface } from "@/app/components/interface";
import Experience from "@/app/components/experience";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);
  const [started, setStarted] = useState(false);

  return (
    <div className="h-screen w-full bg-white relative overflow-hidden">
      <LoadingScreen started={started} setStarted={setStarted} />
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 5], fov: 50 }}
        className="w-full h-full"
      >
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} setSection={setSection} />
          <Experience section={section} menuOpened={menuOpened} />
          <Scroll html>
            <Interface onSectionChange={setSection} />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
        currentSection={section}
      />
      <Cursor />
    </div>
  );
}
