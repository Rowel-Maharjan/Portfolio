import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../components/HackerRoom'
import CanvasLoader from '../components/CanvasLoader'
// import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../config'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Rings from '../components/Rings'

const Hero = () => {

    // const controls = useControls('HackerRoom', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -20,
    //         max: 10,
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     scale: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     }
    // })

    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 912 })
    const isTablet = useMediaQuery({ minWidth: 912, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='text-3xl font-medium text-white text-center font-generalsans'>Hi, I am Rowel
                    <span className='waving-hand'>👋</span>
                </p>
                <p className='hero_tag text-gray_gradient'>
                    Building Products & Brands
                </p>
            </div>

            <div className='w-full h-full absolute inset-0'>
                {/* <Leva /> */}
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <HackerRoom
                            scale={sizes.deskScale}
                            rotation={[0, -Math.PI, 0]}
                            position={sizes.deskPosition} />

                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Rings position={sizes.ringPosition} />
                        </group>


                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={1} />
                    </Suspense>
                </Canvas>


            </div>
        </section>

    )
}

export default Hero
