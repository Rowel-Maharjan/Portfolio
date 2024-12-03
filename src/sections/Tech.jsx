import React from 'react'
import Ball from '../components/Ball'
import { technologies } from '../config'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'; // Import the hook
import { useMediaQuery } from 'react-responsive'

const Tech = () => {
    const isMobile = useMediaQuery({ maxWidth: 912 })
    return (
        <section className='my-20 c-space'>
            <h3 className='head-text mb-14'>My Tech Stack</h3>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((technology) => {
                    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 }); // Detect when the section is in view
                    return (
                        isMobile ?
                            (
                                <div
                                    ref={ref}
                                    className='w-28 h-28 cursor-pointer' key={technology.name}>
                                    {inView && <Ball icon={technology.icon} />}
                                </div>
                            )
                            :
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                ref={ref}
                                className='w-28 h-28 cursor-pointer' key={technology.name}>
                                <Ball icon={technology.icon} />
                            </motion.div>

                    )

                })}
            </div>
        </section>

    )
}

export default Tech
