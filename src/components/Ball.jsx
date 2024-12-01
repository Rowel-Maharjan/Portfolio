
import React, { Suspense } from 'react'
import CanvasLoader from './CanvasLoader'
import { Decal, Float, OrbitControls } from '@react-three/drei'
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber'


const BallCanvas = (props) => {
    const tex = useLoader(TextureLoader, props.img);
    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2} >
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial color='#fff8eb'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1}
                    map={tex}
                    flatShading
                />
            </mesh>
        </Float>
    )
}

const Ball = ({ icon }) => {
    return (
        <Canvas dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls rotation={true} enableZoom={false} />
                <BallCanvas img={icon} />
            </Suspense>
        </Canvas>
    )
}

export default Ball
