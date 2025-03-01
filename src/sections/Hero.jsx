import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
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
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'
import { motion } from 'framer-motion'

import { useInView } from 'react-intersection-observer'; // Import the hook



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
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 }); // Detect when the section is in view

    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 912 })
    const isTablet = useMediaQuery({ minWidth: 912, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    function mainLoad(isMobile, sizes) {
        return (<Canvas className='w-full h-full'>
            <Suspense fallback={<CanvasLoader />}>
                <PerspectiveCamera makeDefault position={[0, 0, 22]} />

                <HeroCamera isMobile={isMobile}>
                    <HackerRoom
                        scale={sizes.deskScale}
                        rotation={[0, -Math.PI, 0]}
                        position={sizes.deskPosition} />
                    {/* <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} /> */}
                </HeroCamera>


                <group>
                    <Target position={sizes.targetPosition} />
                    <ReactLogo position={sizes.reactLogoPosition} />
                    <Cube position={sizes.cubePosition} />
                    <Rings position={sizes.ringPosition} />
                </group>


                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 10]} intensity={1.5} />
                <spotLight position={[0, 1, 0]} intensity={30} castShadow />
            </Suspense>
        </Canvas>)
    }

    return (
        <section className='min-h-screen max-w-7xl mx-auto w-full flex flex-col relative' id='home'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className=' text-3xl font-medium text-white text-center font-generalsans'>Hi, I am Rowel
                    <span className='waving-hand'>👋</span>
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='hero_tag text-gray_gradient'>
                    Building Products & Brands
                </motion.p>
            </div>

            <div ref={ref} className='w-full h-full absolute inset-0'>
                {/* <Leva /> */}
                {isMobile ? inView && mainLoad(isMobile, sizes) : mainLoad(isMobile, sizes)}

            </div>
            <div className='absolute bottom-7 left-0 right-0 z-10 c-space w-fit mx-auto'>
                <a href="#about" className='w-fit'>
                    <Button name="Let's work togethter" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>

            </div>
        </section >

    )
}

export default Hero
