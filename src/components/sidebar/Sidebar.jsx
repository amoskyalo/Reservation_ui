import "./sidebar.css";
import {
  MdSearch,
  MdDashboardCustomize,
  MdOutlineBackupTable,
  MdMenu
} from 'react-icons/md'

import { AiFillPlusSquare } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Sidebar() {
  const [menu, setMenu] = useState(false);

  const setMenuFunc = () =>{
    setMenu(!menu);
  }
  
  const [active, setActive] = useState("#");
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="menu">
            <h3 className="sidebarTitle">Periodic Tables</h3>
            <MdMenu className="menu-icon" onClick={setMenuFunc}/>
          </div>
          <ul className={`sidebarList ${menu ? `dropMenu` : ""}`}>
            <Link to="/" className="link">
            <li className={`sidebarListItem ${active === "#" ? `active` : ""}`} 
            onClick={()=>setActive("#") & setMenu()}>
              <MdDashboardCustomize className="sidebarIcon" />
              Dashboard
            </li>
            </Link>
            <Link to="/search" className="link">
            <li className={`sidebarListItem ${active === "1" ? `active` : ""}`} 
            onClick={()=>setActive("1") & setMenu()}>
              <MdSearch className="sidebarIcon" />
              Search
            </li>
            </Link>
            <Link to="/reservations/new" className="link">
            <li className={`sidebarListItem ${active === "2" ? `active` : ""}`}
            onClick={()=>setActive("2") & setMenu()}>
              <AiFillPlusSquare className="sidebarIcon" />
              New Reservation
            </li>
            </Link>
            <Link to="/tables/new" className="link">
            <li className={`sidebarListItem ${active === "3" ? `active` : ""}`}
            onClick={()=>setActive("3") & setMenu()}>
              <MdOutlineBackupTable className="sidebarIcon" />
              New Table
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
