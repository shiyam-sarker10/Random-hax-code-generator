import { list } from 'postcss';
import React from 'react';
import { useState } from 'react';

const Card = () => {
    const [color,setColor] = useState("white")
    
    function changeColor (){
        const hax = "#" + Math.floor(Math.random() * 16777215).toString(16);
        setColor(hax)
    }
    return (
      <>
        <div
          className="text-center h-[100vh] grid items-center"
          style={{
            backgroundColor: color,
          }}
        >
          <p className="text-5xl text-white">Welcome to my Random Hax code generator</p>
          <div className=" space-y-6">
            <p className="text-5xl font-bold text-white">{color}</p>
            <button className='btn' onClick={changeColor}>change color</button>
          </div>
        </div>
      </>
    );
};

export default Card;