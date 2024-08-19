// function names(){
//     let dates=new Date();
//     let hours=dates.getHours();
//     let greetings=""
//     if(hours>=0 && hours<6){
//         greetings="early moring"
//     }else if(hours>=6 && hours<12){
//         greetings="good  moring";
//     }else if(hours>=12 && hours<16){
//         greetings="good afternoon"
//     }else if(hours>=16 && hours<20){
//         greetings="good evening"
//     }else{
//         greetings="good night"
//     }
//     return greetings;
// }
// names()

export const iseven=(value)=>{
   
    return value%2==0 ? true:false
}