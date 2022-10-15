import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./Striped.css";


function StripedRowExample({table}) {
    return (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Table Name</th>
            <th>Capacity</th>
            <th>Status</th>
            <th>Finish</th>
          </tr>
        </thead>
        <tbody>
        { table.map((item) => (
              <tr key={item.table_id}>
                <td>{item.table_id}</td>
                <td>{item.table_name}</td>
                <td>{item.capacity}</td>
                <td>free</td>
                <td><Button variant="primary" type="submit">
        finish
      </Button></td>
              </tr>
            ))}  
        </tbody>
      </Table>
    );
  }
  
  export default StripedRowExample;