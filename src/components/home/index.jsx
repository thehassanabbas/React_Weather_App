import axios from "axios";
import { useState } from "react";
import WeatherCard from "./../weatherCard";
import { Button, Form } from "react-bootstrap";

let Home = () => {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState([]);

  let submitHandler = async (e) => {
    e.preventDefault();

    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=e0f99c494c2ce394a18cc2fd3f100543&units=metric`
      );
      setData(response.data.list);
    } catch (error) {
      console.log("ERROR : ", error);
    }
  };

  return (
    <div>
      <div className="container CustomForm">
        <h1 className="heading">Weather Forecast App</h1>

        <form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label style={{ color: "darkred" }}>City :</Form.Label>
            <Form.Control
              type="text"
              required
              placeholder="Enter city name"
              onChange={(e) => {
                setCityName(e.target.value);
              }}
            />
          </Form.Group>

          <Button type="submit" variant="danger" style={{ width: "100%" }}>Get Weather</Button>
        </form>
      </div>

      {data.map((eachForcast, index) => (
        <WeatherCard
          key={index}
          min={eachForcast.main.temp_min}
          max={eachForcast.main.temp_max}
          date={eachForcast.dt_txt}
          temp={eachForcast.main.temp}
        />
      ))}
    </div>
  );
};

export default Home;
