import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function DarkExample( { reservation, deleteFunction } ) {

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>First </th>
          <th>Last </th>
          <th>Mobile Number</th>
          <th>Time</th>
          <th>people</th>
          <th>Status</th>
          <th>Edit </th>
          <th> Cancel</th>
          <th>Seat </th>
        </tr>
      </thead>
      <tbody>
      { reservation.map((item) => (
              <tr key={item.reservation_id}>
                <td>{item.reservation_id}</td>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.mobile_number}</td>
                <td>{item.reservation_time}</td>
                <td>{item.people}</td>
                <td>{item.status}</td>
                <td><Button variant="primary" type="submit">
        Edit
      </Button></td>
      <td><Button variant="primary" type="submit" onClick={()=>deleteFunction(item.reservation_id)}>
        cancel
      </Button></td>
      <td><Button variant="primary" type="submit">
        seat
      </Button></td>
              </tr>
            ))} 
      </tbody>
    </Table>
  );
}

export default DarkExample;