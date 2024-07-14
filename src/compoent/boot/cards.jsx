import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import BasicExample from './accor';
import Apps from './prog';
import Cp from './cal';
import Kas from './reload';

function Bat () {
    const Cal=(input)=>{
        const base=1000
        let appse=(input/base)*100;
        return appse


    }
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.rerrw8DS7OVAj5lNV8jDHAHaE8&pid=Api&P=0&h=180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
        <Apps text={Cal(<Cp></Cp>)}/>
        <BasicExample></BasicExample>
        <Kas></Kas>
        <Button variant="primary">Go somewhere</Button>
        

      </Card.Body>
    </Card>
   
  );
}

export default Bat;