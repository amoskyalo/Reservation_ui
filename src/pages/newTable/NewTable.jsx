import "./newTable.css";
import Button from 'react-bootstrap/Button';
import { useState } from "react";


export default function NewUser( {newTableDataFunc}) {
  const [table_name, setNewTable] = useState("");
  const [capacity, setNewTableNumber] = useState("");

  const submit = () =>{
    newTableDataFunc({table_name, capacity})
  }

  return (
    <div className="newUser">
      <label>Table Name
        <input type="text" placeholder="Table Name" value={table_name}
        onChange={(e) => setNewTable(e.target.value)}/>
      </label>
      <label>Capacity
        <input type="number" placeholder="Capacity" value={capacity}
        onChange={(e)=> setNewTableNumber(e.target.value)}/>
      </label>
      <Button variant="primary" onClick={submit}>Submit</Button>
    </div>
  );
}
