import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewTable from "./pages/newTable/NewTable";
import Top from "./components/TopNav/Top";


import NewReservation from "./pages/newReservation/NewReservation";
import Search from "./pages/Search/Search";

function App() {
  return (
    <Router>
      <div className="container">
        <Sidebar />
        <div className="body">
        <Top />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tables/new">
            <NewTable />
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/reservations/new">
            <NewReservation />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
