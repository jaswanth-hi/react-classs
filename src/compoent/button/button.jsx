const Bat=(prop)=>{
    const{image,alt,height,width}=prop
    return(
        <img src={image} alt={alt} width={width} height={height} />

    )
}
export default Bat;