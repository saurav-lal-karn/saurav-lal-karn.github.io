"use client";

import { useSpring, a, config as configConstants } from "@react-spring/three";
import { Avatar } from "./avatar";
import { Workspace } from "./Workspace";

const Experience = (props: { section: number }) => {
  const { section } = props;

  const groupProps = useSpring({
    scale: section === 0 ? [1.5, 1.5, 1.5] : [1, 1, 1],
    position: section === 0 ? [0, 0, 0] : [0, 1, 0],
    config: configConstants.gentle,
  });

  return (
    <>
      <ambientLight intensity={2} />
      <a.group
        scale={groupProps.scale as unknown as [number, number, number]}
        position={groupProps.position as unknown as [number, number, number]}
      >
        <Workspace />
        {/* <group rotation={[0, Math.PI / 5, 0]}>
          <Avatar />
        </group> */}
      </a.group>
    </>
  );
};

export default Experience;
