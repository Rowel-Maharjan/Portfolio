import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 1.5,
      duration: 5,
      repeat: -1,
      yoyo: true,
    });
  }, []);

  return (
    <group {...props} rotation={[0, Math.PI / 5, 0]} scale={0.7}>
      <mesh ref={targetRef}>
        <primitive object={scene} />
      </mesh>
    </group>
  );
};

export default Target;
