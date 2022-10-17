import "./newReservation.css";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import axios from "axios";



export default function NewProduct() {
  const [newData, setNewData] = useState({
    firstname: "",
    lastname: "",
    mobileNo: "",
    date: "",
    time: "",
    people: ""
  }
  );

  const handleChange = (e) =>{
    setNewData((initial)=>{
      return {...initial, [e.target.name]: e.target.value}
    });
  };


  const submit = async (e)=>{
    try {
      e.preventDefault();
      await axios.post("https://silicareservation.herokuapp.com/api/reservation", newData)
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <label>Name
        <input type="text" name="firstname" placeholder="First Name"
        onChange={(e)=>handleChange(e)}/>
      </label>
      <label>Name
        <input type="text" name="lastname" placeholder="Last Name"
        onChange={(e)=>handleChange(e)}/>
      </label>
      <label>Mobile Number
        <input type="number" name="mobileNo" placeholder="Mobile Number"
        onChange={(e)=>handleChange(e)}/>
      </label>
      <label>Date
        <input type="date" name="date"
        onChange={(e)=>handleChange(e)}/>
      </label>
      <label>Time
        <input type="time" name="time"
        onChange={(e)=>handleChange(e)}/>
      </label>
      <label>Number of people
        <input type="number" name="people"
        onChange={(e)=>handleChange(e)}/>
      </label>
      <Button variant="primary" type="submit" onClick={submit}>Submit</Button>
    </div>
  );
}
