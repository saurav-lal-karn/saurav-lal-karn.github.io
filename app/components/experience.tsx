import { OrbitControls } from "@react-three/drei";
import { Avatar } from "./avatar";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <group position={[0, -1, 0]}>
        <Avatar />
      </group>
      <ambientLight intensity={1} />
    </>
  );
};

export default Experience;
