import axios from "axios"
import { useEffect, useState } from "react"
import Table from 'react-bootstrap/Table';



const Fakestoreapi=()=>{
    const [datas,setdatas]=useState([]) 
    const [totals,setotals]=useState(0)

    useEffect(()=>{fetchdata()},[])
    useEffect(()=>{total()},[datas])
    const total=()=>{
        const red=datas.reduce((acc,each)=>acc+each.quantity+each.price,0);
        setotals(red)
    }
    const fetchdata=async()=>{
        try{
        const {data,status}=await axios.get("https://fakestoreapi.com/products")
        if(status===200){
          const newdata=data.map((each)=>{
            return{...each,quantity:1}
          })
          setdatas(newdata)

        }
        }
        catch(err){
            console.log("data")

        }
    }
    const add=(id)=>{
        const newfilter=datas.map((each)=>{
            if(each.id==id){
                return{...each,quantity:each.quantity+1}

            }
            else{
                return each;
            }
        })
        setdatas(newfilter)
    }
    const sub=(id)=>{
        const newfiltersub=datas.map((each)=>{
            if(each.id===id){
                return{...each,quantity:each.quantity-1}
            }
            else{
                return each
            }
        })
        setdatas(newfiltersub)
    }
    return(
        <div>
            <h4 style={{textAlign:"right"}}>total price:{ totals}</h4>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>title</th>
                    <th>image</th>
                    <th>category</th>
                    <th>price</th>
                    <th>Quality</th>
                    <th>total price</th>
                </tr>
                
            </thead>
            <tbody>
            {
                datas.map((each,index)=>{
                    return(
                        
                            <tr>
                                <td>{each.id}</td>
                             
                               
                                <td>{each.title}</td>
                                <td><img src={each.image} width={100} height={100} /></td>
                                <td>{each.category}</td>
                                <td>{each.price}</td>
                                <td><button onClick={()=>add(each.id)}>+</button>{each.quantity}<button onClick={()=>sub(each.id)}>-</button></td>
                                <td>{each.quantity*each.price}</td>
                            </tr>


                        
                    )
                })
            
            }
            </tbody>


            </Table>
           
            


        </div>
    )
}
export default Fakestoreapi