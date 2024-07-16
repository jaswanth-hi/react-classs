const Qas=(prop)=>{
    const {con}=prop
    return(
        <div>
            {con.length==0 ? (<h2>array is empty</h2>):(<h3>array is length is {con.length}</h3>)}
        </div>
    )
}
export default Qas;