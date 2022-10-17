import DarkExample from "../DarkExample/DarkExample";
import StripedRowExample from "../Striped/StripedRowExample";
import "./home.css";


export default function Home() {

  return (
    <div className="home">
      <div className="reservation">
        <h3>Reservation</h3>
        <div className="reserve">
          <DarkExample />
        </div>
      </div>
      <div className="tables">
        <h3>Tables</h3>
        <div className="reserve">
          <StripedRowExample />
        </div>
      </div>
    </div>
  );
}
