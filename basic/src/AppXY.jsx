import React from 'react';
import './AppXY.css';

export default function AppXY() {
    const [position, setPosition] = React.useState({x: 0, y: 0, z:0});
    const onPointerMove = (e) => {
        setPosition((prev) => ({x: e.clientX, y: e.clientY}));

        // 수평으로만 이동하고 싶은 경우
        // setPosition((prev) => ({x: e.clientX, y: prev.y}));

        // 스프로드 연산자를 사용하여 인자가 많을 때 사용할 만한 short cut
        // setPosition((prev) => ({...prev, x: e.clientX}));

    }
    return (
        <div className='container' onPointerMove={onPointerMove}>
            <div
                className='pointer'
                style={{transform: `translate(${position.x}px,  ${position.y}px)`}}
            />
        </div>
    );
}