const Ter=()=>{
    const login=true;
    const admin=true;
    return(
        <>
        {login && <h2>jaswanth</h2>}
        {login ?(
            <>
            {admin?(
                <><h2>abc</h2></>
            ):(<>abc2</>)}
            
            </>
        ):(<><h2>goback</h2></>)
        }
        </>
    )
   
}
export default Ter;