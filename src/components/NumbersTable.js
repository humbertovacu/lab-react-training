
function NumbersTable(props){
    const { limit } = props;
    const numberArray = [];
        for(let i=0; i<=limit; i++){
            numberArray.push(i);
        }
    return(
        <table className="num-table">
            <tbody>
                {numberArray.map(number => {
                   return( 
                        <tr key={Math.random()*1000}>
                            <td rowSpan={5}>{number}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default NumbersTable;