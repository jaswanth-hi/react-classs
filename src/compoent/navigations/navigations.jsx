import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homescreen from "../../screens/home";
import Settingsscreen from "../../screens/settings";
import Blogscreen from "../../screens/blog";
import Aboutscreen from "../../screens/about";
import Invalidscreen from "../../screens/invalid";
import Userscreen from "../../screens/user";


const NavigationStack=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/setting" element={<Settingsscreen/>} />
            <Route path="/blog" element={< Blogscreen />} />
            <Route path="/about" element={<Aboutscreen />} />
            <Route path="*" element={<Invalidscreen/>}/>
            <Route path="/user" element={<Userscreen/>}/>
            <Route path="/user/:userId" element={<Userscreen/>}/>
            
            



            
        </Routes>
        </BrowserRouter>
    )
}
export default NavigationStack;