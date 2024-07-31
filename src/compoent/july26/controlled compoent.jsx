import { useState } from "react";


const Controlledsss=()=>{
    const[username,setusername]=useState("")
    const [password,setpassword]=useState("")
    const [usererror,setusererror]=useState(false)
    const [passworderror,setpassworderror]=useState(false)
    const[datas,updatedata]=useState({})
    const [list,setlist]=useState([])
    

    
    const handler=(event)=>{
         event.preventDefault();
         if(!usererror&&!passworderror){
         successcomplted(username,password)
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
        
         if(final.message){
          alert(final.message)
         }else{
          console.log(final,"abc")
        //   updatedata(final)
        const Finalse=final.firstName+final.email+final.lastName
       
        setpassword("");
        setusername("");
        const finalexist=list.includes(Finalse)
        if(finalexist){
            alert("all ready")
        }
        else{
            setlist([...list,Finalse])

        }
         }
        }catch(err){

        }
        
    }
    const usernamess=(event)=>{
        const usernamehandler=event.target.value;
        setusername(usernamehandler)
        console.log(usernamehandler,"u")

        if(valid(usernamehandler)){
            setusererror(true)

        }
        else{
            setusererror(false)
        }

    }
    const passwordss=(event)=>{
        const passwordhandler=event.target.value;
        setpassword(passwordhandler)
        console.log(passwordhandler,"p")

        if(valid(passwordhandler)){
            setpassworderror(true)

        }
        else{
            setpassworderror(false)
        }
    }
    const valid=(value)=>{
        return value.length>15;
    }
    
    return(
      <div>
      {
        Object.keys(datas).length>0 ?<>
        <h2>welcome {datas.firstName}</h2>
        <h2>{datas.email}</h2>
       
        
        
        </>:<div>
        <form onSubmit={handler} >
<div className="form-group">
  <label htmlFor="email">Email address:</label>
  <input type="text" className="form-control" id="email" value={username} onChange={usernamess} />
  {usererror&&(<span style={{color:"red"}}>please valid usernames</span>)}
</div>
<div className="form-group">
  <label htmlFor="pwd">Password:</label>
  <input type="password" className="form-control" id="pwd"  value={password}  onChange={passwordss}/>
 {passworderror&&( <span style={{color:"red"}}>please valid password</span>)}
</div>
{/* {ee &&<span style={{color:"red"}}>{ee}</span>} */}
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
        
      
        
      }
       <h3>list user</h3>
       <ol>
       {
      
        list.map(each=>{
            return(
                <li>{each}</li>
            )
        })
        
       }
       </ol>
       
      </div>
     
        
    )
}
export default Controlledsss;