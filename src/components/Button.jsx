import React from 'react'

const Button = ({ name, isBeam = false, containerClass }) => {
    return (
        <button className={`btn ${containerClass}`}>
            {isBeam && <div className="relative flex h-3 w-3">
                <span className='btn-ping' />
                <span className='btn-ping_dot' />
            </div>}
            {
                !isBeam && <img src="assets/download.png" alt="Download" className='w-6 h-6' />
            }
            {name}
        </button>
    )
}

export default Button
