"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "./components/experience";
import { Scroll, ScrollControls, useScroll } from "@react-three/drei";
import { Interface } from "./components/interface";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import ScrollManager from "./components/ScrollManager";
import Menu from "./components/Menu";

// function Content(props: { section: number }) {
//   const { section } = props;
//   const scroll = useScroll();
//   const meshRef = useRef<THREE.Group>(null);
//   useEffect(() => {
//     const updatePosition = () => {
//       if (meshRef.current) {
//         meshRef.current.position.y = -scroll.offset * 5;
//       }
//     };

//     updatePosition();

//     // Use requestAnimationFrame for smooth updates
//     let animationId: number;
//     const animate = () => {
//       updatePosition();
//       animationId = requestAnimationFrame(animate);
//     };
//     animate();

//     return () => {
//       if (animationId) {
//         cancelAnimationFrame(animationId);
//       }
//     };
//   }, [scroll.offset]);

//   return (
//     <group ref={meshRef}>
//       <Experience section={section} />
//     </group>
//   );
// }

export default function Home() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="h-screen w-screen bg-white relative">
      <Canvas shadows camera={{ position: [5, 3, 5], fov: 40 }}>
        <color attach="background" args={["#ececec"]} />
        <ScrollControls pages={4} damping={0.1}>
          <ScrollManager section={section} setSection={setSection} />
          {/* <Scroll>
            <Content />
          </Scroll> */}
          <Scroll>
            <Experience section={section} />
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
    </div>
  );
}
