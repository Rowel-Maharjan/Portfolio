import React, { Suspense, useMemo } from 'react';
import CanvasLoader from './CanvasLoader';
import { Decal, Float, OrbitControls, Preload } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';

// BallCanvas to only be rendered once and reused for all balls
const BallCanvas = React.memo(({ icons }) => {
    return (
        <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }} style={{ height: '100%', width: '100%' }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls rotation={true} enableZoom={false} />
                {icons.map((icon, index) => <BallCanvasItem key={index} img={icon} />)}
            </Suspense>
            <Preload all />
        </Canvas>
    );
});

const BallCanvasItem = React.memo(({ img }) => {
    const tex = useLoader(TextureLoader, img);
    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
                <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1} map={tex} flatShading />
            </mesh>
        </Float>
    );
});


// Main Ball Component
const Ball = ({ icon }) => {
    const ballIcons = useMemo(() => [icon], [icon]); // Ensure that the icons are memoized
    return <BallCanvas icons={ballIcons} />;
};

export default Ball;
