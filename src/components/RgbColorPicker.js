import React, { useState } from 'react';
import SingleColorPicker from "./SingleColorPicker";

function RgbColorPicker(){
    const [rValue, setRvalue] = useState(0);
    const [gValue, setGvalue] = useState(0);
    const [bValue, setBvalue] = useState(0);
    

    return(
        <div>
            <div>
                <SingleColorPicker colorValue={rValue} setValue={setRvalue}/>
                <SingleColorPicker colorValue={gValue} setValue={setGvalue}/>
                <SingleColorPicker colorValue={bValue} setValue={setBvalue}/>
            </div>
            <div>
                <div className='square' style={{backgroundColor: `rgb(${rValue}, ${gValue}, ${bValue})`}}/>
                <p>rgb: {rValue}, {gValue}, {bValue}</p>
            </div>
        </div>
    )
}

export default RgbColorPicker;