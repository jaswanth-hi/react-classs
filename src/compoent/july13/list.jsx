
const Lists=(prop)=>{
    const {title}=prop
    return(
        
            <ol>
                {title.map(each=>{
                    return(
                        <li>{each}</li>
                    )
                })}
            </ol>

        
    )
}
export default Lists