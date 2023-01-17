import React, { useState } from 'react';

function SignUp(){

    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [userCountry, setCountry] = useState('');
    const [newUser, setNewUser] = useState('');

    let userGreeting = '';
    const mailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    const strongPasswordRegex = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    const mediumPasswordRegex = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
    const correctEmail = mailRegex.test(userEmail);
    const strongPassword = strongPasswordRegex.test(userPassword);
    const mediumPassword = mediumPasswordRegex.test(userPassword);
    let inpClassName = '';

    if(userCountry === 'de'){
                userGreeting = 'Hallo';
    } else if(userCountry === 'fr'){
                userGreeting = 'Bonjour';
    } else userGreeting = 'Hello';

    const handleSubmit = (event) => {
        event.preventDefault(); 
        const userLogin = {userEmail, userPassword, userGreeting} 
        setNewUser(userLogin);
     }

    const passInputClass = () => {
        if(userPassword.length != 0){
            if(strongPassword) inpClassName = 'green-input';
            else if(mediumPassword) inpClassName = 'orange-input';
            else inpClassName = 'red-input';}
        else inpClassName = 'regular-input';
    }
    passInputClass();

    return(
        <div className='form-container'>
            <form className='sign-up-form' onSubmit = {handleSubmit}>
                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' className={correctEmail ? 'green-input' : 'regular-input'} onChange={(event)=>setEmail(event.target.value)}/>
                <br/>
                <label htmlFor='password'>Password:</label>
                <input type='password' name='password' className={inpClassName} onChange={(event)=>setPassword(event.target.value)}/>
                <br/>
                <label htmlFor='nationality'>Country:</label>
                <select name='nationality' onChange={(event)=>setCountry(event.target.value)}>
                    <option value="" disabled selected>Select your country</option>
                    <option value='fr'>France</option>
                    <option value='de'>Germany</option>
                    <option value='en'>United Kingdom</option>
                </select>
                <button>Submit</button>
            </form>
            { newUser && <div>
                <p>{newUser.userGreeting}</p>
                <p>Your email address is: {newUser.userEmail}</p>
                <p>{correctEmail ? 'Your E-mail is correct' : 'Please enter a valid E-mail'}</p>
            </div>}
        </div>
    )
}

export default SignUp;