import { useRef, useState } from "react";



const Uncontrolled=()=>{
  
    
        const eamils=useRef();
        const passwords=useRef();
        const[error,seterror]=useState(null)
        const submitted=(event)=>{
            event.preventDefault()
            const emailsEnter=eamils.current.value;
            const passwordsEnter=passwords.current.value;
            console.log("email",emailsEnter)
            console.log("password",passwordsEnter)
            if(emailsEnter.length<15 && passwordsEnter.length<15){
                seterror(null);

                successcomplted();

            }
            else{
                seterror("please enter valid email and passwords")
    
            }
        }
        const successcomplted=()=>{
            alert("login is succesful")
        }
       
    
    return(
        <>
        <form onSubmit={submitted}>
        <div className="form-group">
          <label htmlFor="email">Email address:</label>
          <input type="email" className="form-control" id="email" ref={eamils} />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" ref={passwords} />
        </div>
        {error&&<span style={{color:"red"}}>{error}</span>}
        <div className="checkbox">
          {/* <label>
            <input type="checkbox" /> Remember me
          </label> */}
        </div>
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    </>
    
    )
}

export default Uncontrolled;