import React, { Component, useState } from 'react';

//function component
function Color(props){
    const [color, setColor] = useState('white');
    return (
        <div>
            {color}
            <buttom onClick ={() => setColor('black')}>Change to black</buttom>
            <buttom onClick ={() => setColor('white')}>Change to white</buttom>
        </div>
    );
}

export default Color;