 import logo from './logo.svg';
import './App.css';
import Ter from './compoent/july15/conditional';
import Based from './compoent/july15/classcompoent';
import Qas from './compoent/july15/tasks';
import Cont from './compoent/july15/color';
import CompentSubscribe from './compoent/july16/subscribe';
import Logincompent from './compoent/july16/islogin';
import TodoCompoent from './compoent/july16/istodo';
import CounterCompoent from './compoent/july16/counter';
import SquareCompoent from './compoent/july16/square';
import Apicall from './compoent/july16/fetch';
import Iplteam from './compoent/july16/ipl/iplbar';
import BasicExample from './compoent/july16/ipl/bar';
import Apicalls from './compoent/july18/fetchs';
import Recipes from './compoent/july18/recipes';
import 'bootstrap/dist/css/bootstrap.min.css'
import Countryapi from './compoent/july18/country';
import Mountingphase from './compoent/july19/mounting';
import Updatingpase from './compoent/july19/updating';
import Unmounting from './compoent/july19/unmounting';
import Cardsapi from './compoent/july22/typicode';
import Parents from './compoent/july22/purecompoent/parent';
import Useapp from './compoent/july23/hooks/usestate/usestateexample';
import User2 from './compoent/july23/hooks/usestateex2';
import Userabc from './compoent/july23/hooks/tasks23/recipetableusing usestate';
import Bat from './compoent/july23/hooks/tasks23/tables';
import Squarels from './compoent/july23/hooks/tasks23/square';
import Timers from './compoent/july24/usestate ex3';
import Usereffects from './compoent/july24/useeffectcase1';
import Usereffectss from './compoent/july24/useeffectcase2';
import Recipeseffect from './compoent/july24/task/recipesuseeffect';
import Weather from './compoent/july24/task/weather';
import Useappss from './compoent/july25/use effect ex3,4';
import Uncontrolled from './compoent/july25/formvalidations(uncontrolled)';
import Formss from './compoent/july25/formvalidation(uncontrolled by api calling)';
import Regfrom from './compoent/july25/tasks25/registerform';
import Samsungform from './compoent/july25/tasks25/Samsung ';
import Formva from './compoent/july25/tasks25/table';
import Formssexp from './compoent/july26/uncon(api calling)';
import Controlled from './compoent/july26/controlled compoent';
import ControlledReg from './compoent/july26/task/reg(contr)';
import NavigationStack from './compoent/navigations/navigations';
import NavigationStackdynamic from './compoent/july30/navigation(dynamic)';
import { createContext, useState } from 'react';
import NavigationRecipes from './compoent/aug3/recipe maker/navigation(recipes)';
export const Datas=createContext();
function App() {
  const Was=["kas","jas","yas","Ras","tas"]
  const [username,setusername]=useState("jaswanth");
  const[drak,setdrak]=useState(false);
  const [count,setcount]=useState(100)
  const Changeusername=(newname)=>{
    setusername(newname)
  }
  const Drakss=(newdark)=>{
    return(
    setdrak(!drak)
    )
  }
  const counter=(value)=>{
    setcount(count +value)
  }

  return (
    
    <div >
     <NavigationRecipes></NavigationRecipes>
     
    </div>



 /* <Datas.Provider value={{
        name:username,
        darkss:drak,
        Changeusername,
        Drakss,
        count,
        counter,
      }}>
     
      </Datas.Provider> */
 /* <NavigationStack></NavigationStack> */

    // <div>
    //   {/* <Squarels></Squarels> */}
    //   {/* <Ter></Ter>
    //   // <Based></Based> */}
    //   {/* <Qas con={Was} />
      
    //   {/* <CompentSubscribe></CompentSubscribe> */}
    //   {/* <Logincompent></Logincompent> */}
    //   {/* <TodoCompoent></TodoCompoent> */}
    //   {/* <CompentSubscribe></CompentSubscribe> */}
    //   {/* <CounterCompoent></CounterCompoent> */}
    //   {/* <SquareCompoent></SquareCompoent> */}
    //   {/* <Apicall></Apicall> */}
    //   {/* <Iplteam></Iplteam> */}
    //   {/* <BasicExample></BasicExample> */}
    //   {/* <Apicalls></Apicalls> */}
    //   {/* <Recipes></Recipes> */}
    //   {/* <Countryapi></Countryapi> */}
    //   {/* <Mountingphase  my={"pink"}/> */}
    //   {/* <Updatingpase></Updatingpase> */}
    //   {/* <Unmounting></Unmounting> */}
    //   {/* <Cardsapi></Cardsapi> */}
    //   {/* <Parents></Parents> */}
    //   {/* <Useapp></Useapp> */}
    //   {/* <User2></User2> */}
    //   {/* <></Userabc> */}
    //   {/* <Bat></Bat> */}
    //   {/* <Cont></Cont>  */}
    //   {/* <Squarels></Squarels> */}
    //   {/* <Timers></Timers> */}
    //   {/* <Usereffects></Usereffects> */}
    //   {/* <Usereffectss></Usereffectss> */}
    //   {/* <Recipeseffect></Recipeseffect>
    //   */}
    //   {/* <Weather></Weather> */}
    //   {/* <Useappss></Useappss> */}
    //   {/* <Unmounting></Unmounting> */}
    //   {/* <Uncontrolled></Uncontrolled> */}
    //   {/* <Formss></Formss> */}
    //   {/* <Regfrom></Regfrom> */}
    //   {/* <Samsungform></Samsungform> */}
    //   {/* <Formva></Formva> */}
    //   {/* <Formssexp></Formssexp> */}
    //   {/* <Controlled></Controlled> */}
    //   {/* <ControlledReg></ControlledReg> */}
     

     
    // </div>
  );
}

export default App;
