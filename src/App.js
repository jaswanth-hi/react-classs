 import logo from './logo.svg';
import './App.css';
import Ter from './compoent/july15/conditional';
import Based from './compoent/july15/classcompoent';
import Qas from './compoent/july15/tasks';
import Cont from './compoent/july15/color';

function App() {
  const Was=["kas","jas","yas","Ras","tas"]
  return (
    <div>
      {/* <Ter></Ter>
      <Based></Based> */}
      <Qas con={Was} />
      <Cont></Cont>


    </div>
  );
}

export default App;
