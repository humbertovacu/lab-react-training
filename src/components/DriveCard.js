function DriveCard(props){
 const {name, rating, img, car, starSystem} = props;
 const starRating = starSystem(rating)

 return(
    <div className="driver-box-container">
        <div className = "driver-box">
            <img src={img} width={120} height={110} alt="driver"/>
            <div className = "dirver-box-text">
                <h2>{name}</h2>
                <h2 className="stars">{starRating}</h2>
                <p>{car.model}<span> - {car.licensePlate}</span></p>
            </div>
        </div>
    </div>
 )
}

export default DriveCard;