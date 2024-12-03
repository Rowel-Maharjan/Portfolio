import React from 'react'
import github from '../assets/github.png'
import arrowup from '../assets/arrow-up.png'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

const ProjectCard = ({
    name,
    description,
    tags,
    image,
    source_code_link,
    live_link
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.25, delay: 0.1 }}
            className='flex flex-wrap gap-7'
        >
            <Tilt
                options={{
                    max: 10,
                    scale: 1,
                    speed: 400,
                }}
                className='border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5 sm:max-w-[360px] md:max-w-[320px] lg:max-w-[360px] w-full shadow-2xl'
            >
                <div className='relative w-full h-[250px] sm:h-[180px]'>
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-2 gap-2'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={github}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                        <div
                            onClick={() => window.open(live_link, "_blank")}
                            className='bg-black w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={arrowup}
                                alt='Live link'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5 flex-1'>
                    <h3 className='grid-headtext font-bold '>{name}</h3>
                    <p className='mt-2 grid-subtext'>{description}</p>
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>

    );
};

export default ProjectCard
