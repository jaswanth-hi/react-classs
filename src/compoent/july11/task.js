

const Psp=(prop)=>{
    const {list}=prop
    
    return(
        <div>
            {list.map(each=>{
                return(
                    <ol>
                        <li>{each}</li>
                        </ol>
                )
            })}
        </div>
    )
}
export default Psp;