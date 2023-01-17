import React, { useState } from 'react';

function SingleColorPicker(props){
    const { colorValue, setValue } = props;
    console.log(props)

    return(
        <div>
            <div className='square' style={{backgroundColor: `rgb(${colorValue},0,0)`}}></div>
            <br/>
            <input type='number' onChange={(event) => setValue(event.target.value)}/>
        </div>
    )
}


export default SingleColorPicker;