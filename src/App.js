import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriveCard from './components/DriveCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import imgPhoenix from './assets/images/phoenix.jpeg';
import imgPhoenixGlasses from './assets/images/phoenix-glasses.jpg';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
import SignUp from './components/SignUp';
import RgbColorPicker from './components/RgbColorPicker';

function App() {

  const starSystem = (rate) => {
    let starRating = '';
    let whiteStar = '\u2606'
    let blackStar = '\u2605'
    if(rate < 0.5){
       starRating = whiteStar.repeat(5);
    } else if(rate > 0.5 && rate < 1.5) {
       starRating = blackStar + whiteStar.repeat(4) 
    } else if(rate > 1.5 && rate < 2.5) {
       starRating = blackStar.repeat(2) + whiteStar.repeat(3)
    } else if(rate > 2.5 && rate < 3.5) {
       starRating = blackStar.repeat(3) + whiteStar.repeat(2)
    } else if(rate > 3.5 && rate < 4.5) {
       starRating = blackStar.repeat(4) + whiteStar.repeat(1)
    } else {
       starRating = blackStar.repeat(5)};
      return starRating
    }

  return (
    <div className="App">
      <IdCard firstName = "Jean-Luc" lastName = "Godard" gender="male" height={170} birth={"1930-12-03"} picture="https://upload.wikimedia.org/wikipedia/commons/f/f9/Jean-Luc_Godard_at_Berkeley%2C_1968.jpg"/>
      <br/>
      <hr/>
      <IdCard firstName = "Harun" lastName = "Farocki" gender="male" height={172} birth={"1944-09-01"} picture="https://static.arteinformado.com/resources/app/docs/profesional/60/3660/captura_de_pantalla_2014_07_31_a_la_s__19.21.01.png"/>
      <br/>
      <hr/>
      <Greetings lang = 'de'>Francois</Greetings>
      <br/>
      <hr/>
      <Random max = {24} min = {10}/>
      <br/>
      <hr/>
      <BoxColor r={125} g={200} b={71}/>
      <br/>
      <hr/>
      <CreditCard type='visa' number='2408396521004577' expirationMonth={4} expirationYear={2025} bank='BBVA' owner='Humberto Vallejo' bgColor="#11aa99" color="white"/>
      <br/>
      <hr/>
      <Rating starSystem={starSystem}>5</Rating>
      <br/>
      <hr/>
      <DriveCard starSystem={starSystem} name="Travis Kalanick" rating={4.2} img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428" car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE"
        }}/>
      <br/>
      <hr/>
      <LikeButton/>
      <br/>
      <hr/>
      <ClickablePicture img={imgPhoenix} imgClicked={imgPhoenixGlasses}/>
      <br/>
      <hr/>
      <Dice/>
      <br/>
      <hr/>
      <Carousel album={[
          'https://randomuser.me/api/portraits/women/1.jpg',
          'https://randomuser.me/api/portraits/men/1.jpg',
          'https://randomuser.me/api/portraits/women/2.jpg',
          'https://randomuser.me/api/portraits/men/2.jpg'
        ]}/>
      <br/>
      <hr/>
      <NumbersTable limit={10}/>
      <br/>
      <hr/>
      <Facebook/> 
      <br/>
      <hr/>
      <SignUp/>
      <br/>
      <hr/>
      <RgbColorPicker/>
    </div>
  );
}

export default App;
