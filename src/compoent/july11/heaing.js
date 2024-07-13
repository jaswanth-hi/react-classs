const Heading=(prop)=>{
    const {logo,title,tro,pla,cap}=prop
    return(
        <div style={{textAlign:"center"}}>
            <h1 style={{textAlign:"center",color:"blue"}}>{logo}</h1>
            <h1>{title}</h1>
            <h1>{tro}</h1>
            <h1>{cap}</h1>
            <p style={{fontSize:"15px"}} >{pla}</p>
            
        </div>
    )
}
export default Heading;