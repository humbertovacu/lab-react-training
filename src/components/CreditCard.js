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
        <div className = 'credit-card' style = {{ backgroundColor : bgColor, color: color}}>
            <img src= {type === 'mastercard' ? masterCardLogo : visaLogo } width = {300} alt='user-card'/>
            <p>{'•••• •••• ••••' + ' ' + number.slice(-4)}</p>
            <p>Expires {cardMonth}/{cardYear.slice(-2)}</p>
            <p>Bank: {bank}</p>
            <p>{owner}</p>
        </div>
    )

}

export default CreditCard;