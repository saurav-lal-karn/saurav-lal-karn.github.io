"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./components/experience";
import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Interface } from "./components/interface";
import { useState } from "react";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";
import Cursor from "./components/Cursor";

export default function Home() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="h-screen w-screen bg-white relative">
      <Canvas shadows camera={{ position: [0, 1.5, 5], fov: 50 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} setSection={setSection} />
          {/* <Scroll>
            <Content />
          </Scroll> */}
          <Scroll>
            <Experience section={section} menuOpened={menuOpened} />
          </Scroll>
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <Menu
        onSectionChange={setSection}
        menuOpened={menuOpened}
        setMenuOpened={setMenuOpened}
      />
      <Cursor />
    </div>
  );
}
