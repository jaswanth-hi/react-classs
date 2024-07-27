import { useRef, useState } from "react";





const Regfrom=()=>{
    const email=useRef();
    const  passwords=useRef();
    const  mobile=useRef();
    const  name=useRef();
    const[cs1,uf1]=useState([])
    const[abc,abc1]=useState(true)
    
    
    const submitfrom=()=>{
        const eamilenter=email.current.value;
        const passwordenter=passwords.current.value;
        const moblieEnter=mobile.current.value;
        const nameEnter=name.current.value;
        const arr=[]
        const jaswanthd={
            gmail:eamilenter,
            pass:passwordenter,
            mob:moblieEnter,
            name:nameEnter
        }
        arr.push(jaswanthd)
        window.localStorage.setItem("cred",JSON.stringify(arr))
        console.log(arr)
        uf1(...cs1,arr);
        
      

       

    }

    return(
        <div>
            <form onSubmit={submitfrom} >
    <div className="form-group">
      <label htmlFor="email"> Enter Email address:</label>
      <input type="email" className="form-control" id="email" ref={email} />
    </div>
    <div className="form-group">
      <label htmlFor="pwd"> Enter Password:</label>
      <input type="password" className="form-control" id="pwd" ref={passwords} />
    </div>
    <div className="form-group">
      <label htmlFor="pwd"> Enter mobile number:</label>
      <input type="text" className="form-control" id="pwd" ref={mobile} />
    </div>
    <div className="form-group">
      <label htmlFor="pwd"> Enter Name:</label>
      <input type="text" className="form-control" id="pwd" ref={name} />
    </div>
    <div className="checkbox">
      {/* <label>
        <input type="checkbox" /> Remember me
      </label> */}
    </div>
    <button type="submit" className="btn btn-default">
      Submit
    </button>
  </form>
<h1> login table </h1>
   {
    cs1.map((each,index)=>{
      return(
        <div>
          <h1>{each.gmail}</h1>
          <h1>{each.pass}</h1>
          <h1>{each.mob}</h1>
          <h1>{each.name}</h1>
          </div>
      )
    })
   }

        </div>


    )
}

export default Regfrom;