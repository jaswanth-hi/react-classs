import { Component } from "react";
import BasicExample from "./bar";



class Iplteam extends Component{
    state={
         Iplteam:[
            {
                id:1,
                name:"csk",
                trop:5,

            },
            {
                id:2,
                name:"rcb",
                trop:1,

            },
            {
                id:3,
                name:"mi",
                trop:5,

            },
            {
                id:4,
                name:"kkr",
                trop:3,

            }
        ]
    }
    Calcuper=(input)=>{
        const base=14;
        let perc=(input/base)*100;

        return perc;
       

    }
    win=(targetId)=>{
        const newstate=this.iplhandler(this.state.Iplteam, targetId);
        this.setState({

            Iplteam:newstate,
        },()=>{})
       
    }
    iplhandler=(Iplteam,trop)=>{
    const updateipl=Iplteam.map(each=>{
            if(each.id===trop){
                return{...each,trop:each.trop+1}
            }
            else{
                return each
            }
        })
        return updateipl; 
    }

    render(){
        return(
            <div>
                {this.state.Iplteam.map((each,index)=>{
                    return(
                        <div>
                            <h3>name: {each.name}</h3>
                            <button onClick={()=>this.win(each.id)}>click win count</button>
                            <BasicExample scale={this.Calcuper(each.trop)} />



                            
                        </div>

                    )
                })}
            </div>


        )
    }
}
export default Iplteam;