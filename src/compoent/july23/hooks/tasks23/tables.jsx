import Table from 'react-bootstrap/Table';

function Bat() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Bat;


// {

                
//     currentstate3.map((each,index)=>{
       
        
//         return(
//             <div key={index}>
               
//                  <h1>id:{each.id}</h1>
//                  <h1>name:{each.name}</h1>
//                  <h1>ingre:{each.ingredients}</h1>
//                  <button onClick={()=>deletepp(index)}>delete</button>
                

//             </div>
//         )
//     })
// }