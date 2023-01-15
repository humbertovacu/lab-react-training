import React, { useState } from 'react';

function ClickablePicture(props){
 const [isClicked, setClick] = useState(true);
 const {img, imgClicked} = props;

 return(
   <img className="glasses-img" src={isClicked ? img : imgClicked} width={400} alt='clickable' onClick={()=>setClick(!isClicked)}/>
 )

}

export default ClickablePicture;