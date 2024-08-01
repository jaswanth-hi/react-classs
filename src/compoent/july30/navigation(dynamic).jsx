import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homescreen from "../../screens/home";
import Settingsscreen from "../../screens/settings";
import Blogscreen from "../../screens/blog";
import Aboutscreen from "../../screens/about";
import Invalidscreen from "../../screens/invalid";
import Userscreen from "../../screens/recipesScreen";
import RecipesDetails from "../../screens/recipesDetails";
import Policess, { NewPolicess, OldPolicess } from "../../screens/police";
import Droplist from "../../screens/dropdown";


const NavigationStackdynamic=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/setting" element={<Settingsscreen/>} />
            <Route path="/blog" element={< Blogscreen />} />
            <Route path="/about" element={<Aboutscreen />} />
            <Route path="/police" element={<Policess />}>
            <Route path="old" element={<OldPolicess/>}/>
            <Route path="new" element={<NewPolicess/>}/>
            
            
            </Route>
            <Route path="*" element={<Invalidscreen/>}/>
            <Route path="/recipes" element={<Userscreen/>}/>
            <Route path="/recipes/:cuisine/:recipesId" element={<RecipesDetails/>}/>
            <Route path="/drop" element={<Droplist/>}/>
            
            



            
        </Routes>
        </BrowserRouter>
    )
}
export default NavigationStackdynamic;