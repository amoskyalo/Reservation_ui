import "./newReservation.css";
import Button from 'react-bootstrap/Button';
import { useState } from "react";



export default function NewProduct( { setNewReserve }) {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [mobile_number, setNumber] = useState("");
  const [reservation_date, setDate] = useState("");
  const [reservation_time, setTime] = useState ("");
  const [people, setPeople] = useState(""); 

  const submit = (e)=>{
    e.preventDefault();

    setNewReserve({first_name, last_name, mobile_number, reservation_date,
    reservation_time, people});

    setFirstName("");
    setLastName("");
    setNumber("");
    setDate("");
    setTime("");
    setPeople("");
  };

  return (
    <div className="form">
      <label>Name
        <input type="text" placeholder="First Name" value={first_name}
        onChange={(e)=>setFirstName(e.target.value)}/>
      </label>
      <label>Name
        <input type="text" placeholder="Last Name" value={last_name}
        onChange={(e)=>setLastName(e.target.value)}/>
      </label>
      <label>Mobile Number
        <input type="number" placeholder="Mobile Number" value={mobile_number} 
        onChange={(e)=>setNumber(e.target.value)}/>
      </label>
      <label>Date
        <input type="date" value={reservation_date} 
        onChange={(e)=>setDate(e.target.value)}/>
      </label>
      <label>Time
        <input type="time" value={reservation_time} 
        onChange={(e)=>setTime(e.target.value)}/>
      </label>
      <label>Number of people
        <input type="number"  value={people} 
        onChange={(e)=>setPeople(e.target.value)}/>
      </label>
      <Button variant="primary" type="submit" onClick={submit}>Submit</Button>
    </div>
  );
}
