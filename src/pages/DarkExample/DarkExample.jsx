import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';

function DarkExample() {
  const [reservation, setReservation] = useState([]);
  
  //New Post
  const getFunction = async() =>{
    try {
      const res = await axios.get("https://silicareservation.herokuapp.com/api/reservation")
      setReservation(res.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getFunction()
  },[]);

  //Delete Data
  const deleteFunction = async(id) =>{
    try {
      await axios.delete(`https://silicareservation.herokuapp.com/api/reservation/${id}`)
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }
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
          <th>Edit </th>
          <th> Cancel</th>
          <th>Seat </th>
        </tr>
      </thead>
      <tbody>
      { reservation.map((item) => (
              <tr key={item._id}>
                <td>1</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.mobileNo}</td>
                <td>{item.time}</td>
                <td>{item.people}</td>
                <td><Button variant="primary" type="submit">
        Edit
      </Button></td>
      <td><Button variant="primary" type="submit" onClick={()=>deleteFunction(item._id)}>
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