import React from 'react'
import download from '../assets/download.png'

const Button = ({ name, isBeam = false, containerClass }) => {
    return (
        <button className={`btn ${containerClass}`}>
            {isBeam && <div className="relative flex h-3 w-3">
                <span className='btn-ping' />
                <span className='btn-ping_dot' />
            </div>}
            {
                !isBeam && <img src={download} alt="Download" className='w-6 h-6' />
            }
            {name}
        </button>
    )
}

export default Button
