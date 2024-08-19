

const Button=(prop)=>{
    console.log("abc",prop.text)
    const {text,reopen}=prop
    

    return <button onClick={reopen}>{text}</button>

}
export default Button