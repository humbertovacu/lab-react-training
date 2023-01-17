function BoxColor(props){
    const { r,g,b } = props;
    return(
        <div className="box-color-container">
            <div className='box' style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
                <p>rgb:{r},{g},{b}</p>
            </div>
        </div>
    )
}

export default BoxColor;