import React, { useState } from 'react';

function LikeButton(){

const [likes, setLikes] = useState(0);

 return(
    <button className = "like-button" onClick={() => setLikes((prevState) => prevState+1)}>{likes} {likes === 1 ? 'Like' : 'Likes'}</button>
 )
}

export default LikeButton;