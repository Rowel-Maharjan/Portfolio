import React from 'react'
import Ball from '../components/Ball'
import { technologies } from '../config'
import { motion } from 'framer-motion'

const Tech = () => {
    return (
        <section className='my-20 c-space'>
            <h3 className='head-text mb-14'>My Tech Stack</h3>
            <div className='flex flex-row flex-wrap justify-center gap-10'>
                {technologies.map((technology) => (
                    <motion.div
                        initial={{ opacity: 0.2, x: -90 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className='w-28 h-28 cursor-pointer' key={technology.name}>
                        <Ball icon={technology.icon} />
                    </motion.div>
                ))}
            </div>
        </section>

    )
}

export default Tech
