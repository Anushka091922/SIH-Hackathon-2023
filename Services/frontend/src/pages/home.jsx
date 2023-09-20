import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {

  const baseURL = "http://localhost:4000/api/services"
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {

        let url = baseURL;
        if (selectedCity) {
          url += `?city=${selectedCity}`
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data.");
        }

        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError("Error fetching data. Please try again later.");
        setIsLoading(false);
      }
    };
    fetchData();
  }, [selectedCity]);

  return (

    <div className="main-content">
      <h2>Services</h2>
      <p>All Institutions are Listed Here</p>
      <div className="filters">
        <label>City</label>
        <select onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Select City</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Chennai">Chennai</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Kochi">Kochi</option>
          <option value="Bhopal">Bhopal</option>
        </select>
      </div>



      {
        isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <ul className="services">
            {data.map((item) => (
              <li key={item._id}>
                <div className="courtDetails">
                  <h3>{item.city}</h3>
                  {item.courts.map((court, index) => (
                    <Link to={`${court.desc}`}>
                        <li key={index}>{court.title}</li>
                      </Link>
                  ))
                  }
                </div>
              </li>
            ))}
          </ul>
        )
      }
    </div >
  )
}

export default Home