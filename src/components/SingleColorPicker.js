import React, { useState } from 'react';

function SingleColorPicker(props){
    const { value, color, onChange } = props;
    let localColor = '';
    if(color === 'r'){
        localColor = [value, 0, 0];
    } else if(color === 'g'){
        localColor = [0, value, 0]
    } else {
        localColor = [0, 0, value]
    }
    
    return(
        <div className='single-color'>
            <div className='square' style={{backgroundColor: `rgb(${localColor[0]}, ${localColor[1]}, ${localColor[2]})`}}></div>
            <br/>
            <label>{color.toUpperCase()}:</label>
            <input type='number' onChange={onChange}/>
        </div>
    )
}


export default SingleColorPicker;