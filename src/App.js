import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewTable from "./pages/newTable/NewTable";
import { useState } from "react";
import Top from "./components/TopNav/Top";


import NewReservation from "./pages/newReservation/NewReservation";
import Search from "./pages/Search/Search";

function App() {
  //NEW RESERVE
  const [reservation, setReservation] = useState([
    {
      reservation_id: 1,
      first_name: "Amos",
      last_name: "Kyalo",
      mobile_number: "0700000000",
      reservation_time: "12:00",
      people: 5,
      status: "finished"
    },
    {
      reservation_id: 2,
      first_name: "Collins",
      last_name: "Mbathi",
      mobile_number: "0700000000",
      reservation_time: "10:00",
      people: 6,
      status: "finished"
    }
  ]);

  // console.log(reservation);
  const deleteFunction = (id) =>{
    setReservation(reservation.filter((reserve) => reserve.reservation_id !== id));
  }

  //add new table
  const addTable = (task) =>{
    const reservation_id = Math.floor(Math.random() * 1000);
    const newReserve = {...task, reservation_id}
    setReservation([...reservation, newReserve]);
  }

  //NEW TABLE
  const [table, setTable] = useState([
    {
      table_id: 1,
      table_name: "People",
      capacity: 4
    }
   ]);
  
   const getNewTable = (tableData) =>{
    const table_id = Math.floor(Math.random() * 1000);
    const newTable = {...tableData, table_id}
    setTable([...table, newTable])
   }

  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="body">
        <Top />
        <Switch>
          <Route exact path="/">
            <Home data={reservation} func={deleteFunction} table={table}/>
          </Route>
          <Route path="/tables/new">
            <NewTable newTableDataFunc={getNewTable}/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/reservations/new">
            <NewReservation setNewReserve={addTable}/>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
