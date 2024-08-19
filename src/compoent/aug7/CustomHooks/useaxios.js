import axios from "axios"
import { useEffect, useState } from "react"



export const UseAxios=(url="https://fakestoreapi.com/products")=>{
    const [datas,setdata]=useState([])
    const [error,seterror]=useState(false)
    const [loading,setloading]=useState(true)
    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        try{
            const {data,status}=await axios.get(url)
            if(status==200){
                setdata(data)
            }

        }catch(err){
            seterror(true)

        }finally{
            setloading(false)

        }

    }
    return[datas,error,loading]
}