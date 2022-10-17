import "./newTable.css";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";


export default function NewUser() {
  const[newTable, setNewTable] = useState({
    name: "",
    capacity: ""
  });

  const submit = (e) =>{
    e.preventDefault();
    setNewTable((initial) =>{
      return {...initial, [e.target.name]: e.target.value}
    });
  }

  const newTableFunct = async()=>{
    try {
      await axios.post("https://silicareservation.herokuapp.com/api/table", newTable)
      window.location.replace("/");
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="newUser">
      <label>Table Name
        <input type="text" name="name" placeholder="Table Name"
        onChange={(e) => submit(e)}/>
      </label>
      <label>Capacity
        <input type="number" name="capacity" placeholder="Capacity"
        onChange={(e)=> submit(e)}/>
      </label>
      <Button variant="primary" onClick={()=>newTableFunct()}>Submit</Button>
    </div>
  );
}
