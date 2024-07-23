import axios from "axios";
import { Component } from "react";
import "./july22.css";
import Akk from "./image";


class Cardsapi extends Component{
    state={
        profit:[],
        loader:true,
        error:false,

    }
    profitss=async ()=>{

        try{
            let {status,data}=await axios.get("https://jsonplaceholder.typicode.com/users")
        // console.log(data)
        if(status===200){
            this.setState({
                profit:data,
                loader:false,

            })

        }
        }catch(err){
            this.setState({
                error:true,
                loader:false,
            })
        }
        
    }
    componentDidMount(){
        this.profitss();
    }
    render(){
        return(
            <div>
            <h1 style={{textAlign:"center"}}>jaswanth crads</h1>
            {/* <button onClick={this.profitss}>click</button> */}
            {
                this.state.loader ?<>
                <h2>please wait</h2>

                </>:
                <div className="grids">
                    {
                        this.state.profit.map((each,index)=>{
                            return(
                                <div className="cards">
                                    <img src={Akk[index]} width={100} height={100} />
                                <h5>id:{each.id}</h5>
                                <h5>name:{each.name}</h5>
                                <h5>username:{each.username}</h5>
                                <h5>email:{each.email}</h5>
                                <h5></h5>

                                



                            </div>
                            )
                           

                        })
                        
                    }
                
                </div>
            }
            </div>
            
        )
    }
}

export default Cardsapi;