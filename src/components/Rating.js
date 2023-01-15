function Rating(props){
 const { children, starSystem } = props;
 const starRating = starSystem(children);
 
 return(
    <div>
       <p>{starRating}</p>
    </div>
 )

}

export default Rating;