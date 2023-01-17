import React, { useState } from 'react';
import facebookData from '../data/berlin.json'

function Facebook(){    
   const [userCountry, setUserCountry] = useState(facebookData)

   const profileCountries = [];
   facebookData.forEach(user =>{
    if (!profileCountries.includes(user.country)){
        profileCountries.push(user.country)
    }
   })
    
  
   return(
    <div className='facebook'>
        <div className='country-btns'>
            {profileCountries.map(country =>{
                return(
                        <button type='button' onClick={(event) => setUserCountry(event.target.innerHTML)} key={Math.random()*1000}>{country}</button>
                )
            })} 
        </div>
        {facebookData.map(user => {
            return(
                <div key={Math.random()*1000} className={userCountry === user.country ? 'facebook-user-blue' : 'facebook-user'}>
                    <img src={user.img} alt='user' width={220}/>
                    <div className= 'facebook-user-info'>
                        <p><b>First Name:</b> {user.firstName}</p>
                        <p><b>Last Name:</b> {user.lastName}</p>
                        <p><b>Country:</b> {user.country}</p>
                        <p><b>Type:</b> {user.isStudent ? 'Student' : 'Teacher'}</p>
                    </div>
                </div>  
            )
        })}
    </div>
   )

}

export default Facebook;