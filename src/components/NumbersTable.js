
function NumbersTable(props){
    const { limit } = props;
    const numberArray = [];
        for(let i=0; i<=limit; i++){
            numberArray.push(i);
        }
    return(
        <table className="num-table">
            <thead>
                <tr>
                    <th>a</th>
                    <th>b</th>
                    <th>c</th>
                    <th>d</th>
                    <th>e</th>
                </tr>
            </thead>
            <tbody>
                {numberArray.map(number => {
                   return( 
                        <tr key={Math.random()*1000}>
                            <td>{number}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default NumbersTable;