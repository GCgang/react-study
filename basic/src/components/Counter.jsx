import React, { useState } from 'react';

export default function Counter({total, onClick}) {
    const [count, setCount] = useState(0);
    return (
        <div className='counter'>
            <p className='counter__number'>
                {count} <span className='counter__total'>/{total}</span>
            </p>
            <button
                className='counter__button'
                onClick={() => {
                setCount((prev) => prev + 1);
                onClick((prev) => prev + 1);
            }}
            >
            Add+
            </button>
        </div>
    );
}