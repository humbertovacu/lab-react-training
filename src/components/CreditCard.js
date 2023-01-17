import visaLogo from '../assets/images/visa.png'
import masterCardLogo from '../assets/images/mastercard.png'

function CreditCard(props){
    
    const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;
    let cardMonth = '';
    const cardYear = expirationYear.toString()
    if(expirationMonth < 10) {
        cardMonth = '0' + expirationMonth.toString();
    } else cardMonth = expirationMonth.toString();
   
    return(
        <div className='credit-card-container'>
            <div className = 'credit-card' style = {{ backgroundColor : bgColor, color: color}}>
                <img src= {type === 'mastercard' ? masterCardLogo : visaLogo } width = {300} alt='user-card'/>
                <p className='card-number'><b>{'•••• •••• ••••' + ' ' + number.slice(-4)}</b></p>
                <div className='card-info'>
                <p>Expires {cardMonth}/{cardYear.slice(-2)}&nbsp;&nbsp;&nbsp;&nbsp;<span>{bank}</span></p>
                <p>{owner}</p>
                </div>
            </div>
        </div>
    )

}

export default CreditCard;