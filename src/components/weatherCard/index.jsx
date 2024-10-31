import "./index.css";
import moment from "moment";
import { Card } from "react-bootstrap";

let WeatherCard = ({ date, temp, min, max }) => {
  return (
    <div className="container">
      <Card style={{ width: "100%" }} className="WeatherCard">
        <Card.Body>
          <Card.Title>{moment(date).format("dddd ha")}</Card.Title>
          <Card.Text>
            <h1> {temp}°C </h1>
          </Card.Text>
          <Card.Title>
            {" "}
            {min}°C - {max}°C
          </Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default WeatherCard;
