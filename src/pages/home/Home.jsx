import DarkExample from "../DarkExample/DarkExample";
import StripedRowExample from "../Striped/StripedRowExample";
import "./home.css";


export default function Home( { data, func, table}) {

  return (
    <div className="home">
      <div className="reservation">
        <h3>Reservation</h3>
        <div className="reserve">
          <DarkExample reservation={data} deleteFunction={func}/>
        </div>
      </div>
      <div className="tables">
        <h3>Tables</h3>
        <div className="reserve">
          <StripedRowExample table={table}/>
        </div>
      </div>
    </div>
  );
}
