import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./avatar";
import { Workspace } from "./Workspace";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="sunset" />
      <group position={[0, -1, 0]}>
        <Avatar />
        <Workspace />
      </group>
      {/* <mesh
        position={[0, 0, 0]}
        receiveShadow
        scale={5}
        rotation-x={-Math.PI / 2}
      >
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color="white" />
      </mesh> */}
    </>
  );
};

export default Experience;
