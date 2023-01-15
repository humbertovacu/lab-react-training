import diceZero from '../assets/images/dice-empty.png';
import diceOne from '../assets/images/dice1.png'
import diceTwo from '../assets/images/dice2.png'
import diceThree from '../assets/images/dice3.png'
import diceFour from '../assets/images/dice4.png'
import diceFive from '../assets/images/dice5.png'
import diceSix from '../assets/images/dice6.png'
import React, { useState } from 'react';


function Dice(){
    const [diceNum, setDice] = useState(3);
    let diceImg;

    const toggleClickEmpty = () => {
        const max = 6;
        const randomNumber = Math.ceil(Math.random() * max)
        setDice(randomNumber)
    }

    const toggleClick = () => {
        setDice(0)
    }
    
    switch (diceNum){
        case 1:
            diceImg = diceOne;
            break;
        case 2:
            diceImg = diceTwo;
            break;
        case 3:
            diceImg = diceThree;
            break;
        case 4: 
            diceImg = diceFour;
            break;
        case 5:
            diceImg = diceFive;
            break;
        case 6:
            diceImg = diceSix;
            break;
    }


    return(
        <div>
            {diceNum === 0 && <img src={diceZero} width={200} alt='dice' onClick={toggleClickEmpty}/>}
            {diceNum !== 0 && <img src={diceImg} width={200} alt='dice' onClick={toggleClick}/>}
        </div>
    )
}

export default Dice;