 import logo from './logo.svg';
import './App.css';
import CustomButton from './components/button/buttons';
import Heading,{CustomHeading1 as SecondHeading} from './components/headings/headings';
import List from './components/lists/orderlist';
import Apple from './components/lists/unorderlist';
import Profile from './components/profile/profileComm';
const App=()=>(
  <div>
  <CustomButton />
  <h1>hii</h1>
 

  <CustomButton></CustomButton>
  <CustomButton></CustomButton>
  <CustomButton></CustomButton>
 <Heading />
 <SecondHeading />
 <Apple />
 <List />
 <Profile></Profile>
  </div>

 

);

export default App;
