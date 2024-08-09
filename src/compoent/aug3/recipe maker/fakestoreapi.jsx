import axios from "axios"







const Fakeapi=async()=>{
    try{
        const rec=await axios.get("https://fakestoreapi.com/products")
        console.log(rec)

    }catch(err){

    }
    return(
        <div>
            <h1></h1>
        </div>
    )

}
export default Fakeapi