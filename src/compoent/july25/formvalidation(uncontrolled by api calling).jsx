import { useRef, useState } from "react";


const Formss=()=>{
    const username=useRef();
    const passwords=useRef();
    const [ee,setss]=useState(null)

    const handler=(event)=>{
        event.preventDefault();

        const usernameEnter=username.current.value;
        const passwordEnter=passwords.current.value;
        console.log("username:",usernameEnter);
        console.log("passwords" , passwordEnter);
        if(usernameEnter.length<15 && passwordEnter.length<15){
            setss(null);

            successcomplted(usernameEnter,passwordEnter);

        }
        else{
            setss("please enter")

        }
       
    }
    const successcomplted=async(username,password)=>{
        try{
           const re=await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
             username,
              password,
             
            })
          })
          const final=await re.json()
          console.log(final,"apppp")
        }catch(err){

        }
        
    }
    
    return(
        <div>
            <form onSubmit={handler} >
    <div className="form-group">
      <label htmlFor="email">Email address:</label>
      <input type="text" className="form-control" id="email" ref={username} />
    </div>
    <div className="form-group">
      <label htmlFor="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" ref={passwords} />
    </div>
    {ee &&<span style={{color:"red"}}>{ee}</span>}
    <div className="checkbox">
      {/* <label>
        <input type="checkbox" /> Remember me
      </label> */}
    </div>
    
    <button type="submit" className="btn btn-default">
      Submit
    </button>
  </form>

        </div>
    )
}
export default Formss;