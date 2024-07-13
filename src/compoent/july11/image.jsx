const Images=(prop)=>{
    const {app,width,height}=prop;
    return(
        <div style={{textAlign:"center"}}>
        <img src={app} width={width} height={height}/>
        </div>
    )
}
export default Images;