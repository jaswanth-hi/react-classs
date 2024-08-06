import axios from "axios";
import { useEffect, useState } from "react";





const Dict=()=>{
    const [ab,setabc]=useState([])
    const[abc,setabc1]=useState("")
    useEffect(()=>{
        rec();
    },[])
    const rec=async(word)=>{
        try{
        const {data}=await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        console.log(data)
        setabc(data)
        }catch(err){

        }
    }
    const changehandler=(current)=>{

        const currentvalue=current.target.value;
        setabc1(currentvalue)

    }
    const submithandler=(current)=>{
        current.preventDefault();
        if(abc.length>0){
            rec(abc)
        }
        else{
            // console.log("please eneter")
            alert("please enter")
        }

    }
    return(
        <div>
            <form  onSubmit={submithandler} >
                <label  htmlFor="text">

                </label>
                <input style={{width:"400px",height:"60"}}
                type="text"
                id="text"
                onChange={changehandler}
                value={abc}

                
                />
                <button type="submit">submit</button>

            </form>
            {
                ab.length >0 &&(
                    ab.map((each,ind)=>{
                        return(
                            <div>
                                <h1>{each.word}</h1>
                               
                                {
                                    each.meanings.map((mea,meaind)=>{
                                        return(
                                            <div>
                                        <h4>{mea.partOfSpeech}</h4>
                                        <h4>{mea.definitions.definition}</h4>
                                        
                                        </div>
                                        )
                                    })
                                }
                                
                            </div>
                        )
                    })
                )

            }
        </div>
    )
    
    

}
export default Dict;