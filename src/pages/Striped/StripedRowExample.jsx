import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./Striped.css";
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';


function StripedRowExample() {
  const [table, setNewTable] = useState([]);

  //GET TABLE DATA
  const newTableFuncion = async()=>{
    const res = await axios.get("https://silicareservation.herokuapp.com/api/table")
    setNewTable(res.data);
  }

  useEffect(()=>{
    newTableFuncion();
  },[]);

  //DELETE TABLE
  const deleteFunc = async(id)=>{
    try {
      await axios.delete(`https://silicareservation.herokuapp.com/api/table/${id}`);
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
            <th>Table Name</th>
            <th>Capacity</th>
            <th>Status</th>
            <th>Finish</th>
          </tr>
        </thead>
        <tbody>
        { table.map((item) => (
              <tr key={item._id}>
                <td>{item.table_id}</td>
                <td>{item.name}</td>
                <td>{item.capacity}</td>
                <td>free</td>
                <td><Button variant="primary" type="submit" onClick={()=>deleteFunc(item._id)}>
        finish
      </Button></td>
              </tr>
            ))}  
        </tbody>
      </Table>
    );
  }
  
  export default StripedRowExample;