import React, { useState } from 'react';

function Carousel(props){
 const [imageNum, setImageNum] = useState(0);
 const { album } = props;
 const albumCopy = [...album]
 
if(imageNum < 0){
    setImageNum(albumCopy.length -1);
}

 return(
    <div>
        <img src={album[imageNum]} width={150} alt='carousel-user'/>
        <div className='carousel-btns'>
            <button onClick={() => setImageNum(prevState => (prevState -1))}>&#8592;</button>
            <button onClick={() => setImageNum(prevState => ((prevState +1) % album.length))}>&#8594;</button>
        </div>
    </div>
 )
}

export default Carousel;