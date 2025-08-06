"use client";

import { useSpring, a, config as configConstants } from "@react-spring/three";
import { animate, useMotionValue } from "motion/react";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { NewWorkspace } from "./NewWorkspace";
import { NewAvatar } from "./NewAvatar";

const Experience = (props: { section: number; menuOpened: boolean }) => {
  const { section, menuOpened } = props;

  const cameraPositonX = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);

  const groupProps = useSpring({
    scale: section === 0 ? [1.5, 1.5, 1.5] : [1, 1, 1],
    position: section === 0 ? [0, 0, 0] : [0, 1, 0],
    config: configConstants.gentle,
  });

  // Animate the camera position and lookAt based on the menu opened state
  useEffect(() => {
    animate(cameraPositonX, menuOpened ? -5 : 0, {
      duration: 0.5,
      ease: "easeInOut",
    });
    animate(cameraLookAtX, menuOpened ? 5 : 0, {
      duration: 0.5,
      ease: "easeInOut",
    });
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositonX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  return (
    <>
      <ambientLight intensity={2} />
      {/* <OrbitControls /> */}
      <group scale={0.8} position={[1.5, -0.5, 0]} rotation={[0, -1.2, 0]}>
        <NewWorkspace />
        {/* <group position={[1, 0, 1]} rotation={[1.6, 0, -1.0]}>
          
        </group> */}
        <NewAvatar rotation={[0, 1, 0]} />
      </group>

      {/* <a.group
      // scale={groupProps.scale as unknown as [number, number, number]}
      // position={groupProps.position as unknown as [number, number, number]}
      >
        <NewWorkspace /> */}
      {/* <group rotation={[0, Math.PI / 5, 0]}> */}
      {/* <Avatar /> */}
      {/* </group> */}
      {/* </a.group> */}
    </>
  );
};

export default Experience;
