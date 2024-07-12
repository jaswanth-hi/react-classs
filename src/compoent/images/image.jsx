const Head=(prop)=>{
    const {name,image,tropes,playername}=prop
    return (
        <div>
        <h1>{name}</h1>
        <h1>{image}</h1>
        <h1>{tropes}</h1>
        <p>{playername}</p>
        </div>
    )
}
export default Head;

