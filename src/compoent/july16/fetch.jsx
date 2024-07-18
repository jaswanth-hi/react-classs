import { Component } from "react";


class Apicall extends Component{
    state={
        products:[],
        loader:true,
        error:false,
    }
    // api=()=>{
    //     fetch("https://fakestoreapi.com/products").then(rev=>rev.json()).then((goat)=>this.setState({products:goat,loader:false}))
    // }
    // api=async()=>{
    //     try{
    //         let response=await fetch("https://fakestoreapi.com/products");
    //    let final=await response.json();
    //    this.setState({
    //     products:final,
    //     loader:false,

    //    });
       

    //     }catch(error){
    //         this.setState({
    //             error:true,
    //         })

    //     }finally{
    //         this.setState({
    //             loader:false,
                
    //         })
    //     }
       

       
    // }
    


    render(){
        return(
            <div>
            <h1>api calling</h1>
            <button onClick={this.api}>calling api </button>
            {this.state.loader ?<><h2>please wait</h2></>:<>
            <div style={{border:"2px solid pink"}}>
            {this.state.products.map((each,index)=>{
                return(
                    <div key={each.id}>
                    <h1>{each.id}</h1>
                    <hr></hr>
                    <h1>{each.title}</h1>
                    <hr></hr>
                    <h1>{each.price}</h1>
                    <hr></hr>
                    <h1>{each.description}</h1>
                    <hr></hr>
                    <h1>{each.category}</h1>
                    <hr></hr>
                    <img src={each.image} />
                    
                    </div>
                
                   

                   
                )
            })}
            </div>
            
            </>}
            </div>
            
        )
    }
}
export default Apicall;