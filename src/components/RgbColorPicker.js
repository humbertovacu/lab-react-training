import React, { useState } from 'react';
import SingleColorPicker from "./SingleColorPicker";

function RgbColorPicker(){
    const [rValue, setRvalue] = useState(0);
    const [gValue, setGvalue] = useState(0);
    const [bValue, setBvalue] = useState(0);

    return(
        <div className='all-colors-container'>
            <div className='single-color-container'>
                <SingleColorPicker color='r' value={rValue} onChange={(event)=>setRvalue(event.target.value)}/>
                <SingleColorPicker color='g' value={gValue} onChange={(event)=>setGvalue(event.target.value)}/>
                <SingleColorPicker color='b' value={bValue} onChange={(event)=>setBvalue(event.target.value)}/>
                <div className='single-color'>
                    <div className='square' style={{backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`}}/>
                    <p>rgb: {rValue}, {gValue}, {bValue}</p>
                </div>
            </div>
        </div>
    )
}

export default RgbColorPicker;