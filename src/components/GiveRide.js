import React, { useEffect, useState } from "react";
import "../css/GiveRide.css";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
const GiveRide = () => {
  const [rides, setRides] = useState([]);
  const [confirmPrice,setConfirmPrice]=useState([]);
  useEffect(() => {
    getRides();
  }, []);

  const getRides = async () => {
    let result = await fetch("http://localhost:8080/giveride", {
      headers: {
        Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    setRides(result);
  };

  const bidPrice = async (id_of_user_who_need_ride) => {
    const id_of_user_who_can_give_ride = JSON.parse(
      localStorage.getItem("user")
    )._id;
    const ride_confirmed=False;
    let result = await fetch("http://localhost:8080/bidPrice", {
      method: "post",
      body: JSON.stringify({
        id_of_user_who_need_ride,
        confirmPrice,
        id_of_user_who_can_give_ride,
        ride_confirmed
      }),
      headers: {
        Authorization: `bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    result = await result.json();
    Navigate("/login");
  };

  return (
    <div className="give-ride-container">
      <h1>Give Ride Page</h1>
      {/* Header Row */}
      <div className="give-ride-grid give-ride-header">
        <div>PICKUP POINT</div>
        <div>DROP POINT</div>
        <div>PICKUP TIME</div>
        <div>DATE</div>
        <div>MILES</div>
        <div>MIN PRICE</div>
        <div>MAX PRICE</div>
        <div>YOUR PRICE</div>
      </div>

      {/* Data Rows */}
      {rides.length > 0 ? (
        rides.map((item, index) => (
          <div className="give-ride-grid ride-item" key={index}>
            <div>{item.from}</div>
            <div>{item.to}</div>
            <div>
              {item.pickuptime} {item.timezone}
            </div>
            <div>{item.date}</div>
            <div>{item.miles}</div>
            <div>{item.minprice}$</div>
            <div>{item.maxprice}$</div>
            <div><input type="text" onChange={(e)=>{setConfirmPrice(e.target.value) }} ></input></div>
            <div>
              {/* <button onClick={()=>messagePassenger(item._id)}>Message</button> */}
              <button onClick={()=>bidPrice(item._id)}>BID</button>
            </div>
          </div>
        ))
      ) : (
        <h1 className="no-rides">NO RIDES</h1>
      )}
    </div>
  );
};

export default GiveRide;
