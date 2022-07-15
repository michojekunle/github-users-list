import React from 'react'
import { useState } from 'react';

const UseState = () => {
    const [text, setText] = useState('');
    const [isText, setIsText] = useState(false);
    
    const handleClick = () => {
        setIsText(true);
    }
  return (
        <section>
            <div>
                <h2>Use State</h2>
        {
            isText ?<h1>Random Text</h1>:<h1>Another Random Text</h1>
        }        
            </div>
            <p onClick={handleClick()}>Click</p>
        </section>
  )
}

export default UseState