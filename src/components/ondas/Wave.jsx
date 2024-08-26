import React from 'react';
import './Wave.css';

function Wave() {
    return (
        <div className='wave'>
            <svg viewBox="0 0 904 155" xmlns="http://www.w3.org/2000/svg">
                <path fill="#372B2B" d="M 0 87 C 216 87 144 85 360 85 L 360 85 L 360 0 L 0 0 Z" stroke-width="0"></path>
                <path fill="#372B2B" d="M 359 85 C 686 85 577 131 904 131 L 904 131 L 904 0 L 359 0 Z" stroke-width="0"></path>
            </svg>
        </div>
    );
}

export default Wave;
