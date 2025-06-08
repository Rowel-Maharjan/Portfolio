import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 22], 0.25, delta);

    if (!isMobile && groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, state.pointer.x / 5, 0],
        0.25,
        delta
      );
    } else if (groupRef.current) {
      // Add side-by-side rotation for mobile or else part
      easing.dampE(
        groupRef.current.rotation,
        [
          Math.sin(state.clock.getElapsedTime()) * 0.1, // slight oscillation for x-axis
          Math.cos(state.clock.getElapsedTime()) * 0.1, // slight oscillation for y-axis
          0, // keep z-axis fixed
        ],
        0.25,
        delta
      );
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 1 : 1.06}>
      {children}
    </group>
  );
};

export default HeroCamera;
