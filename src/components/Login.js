import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom"

import carpoolimage from '/Users/dineshsunny/Desktop/REACT/pool-ride/src/images/carr-pool.webp';


const Login = () => {
    const [mobileNo, setMobileNo] = useState("");
    const navigate = useNavigate();

    // useEffect(() => {
    //     const auth = localStorage.getItem('user');
    //     if (auth) {
    //         navigate("/login")
    //     }
    // })
    const handleLogin = async () => {
      let result = await fetch("http://localhost:8080/login", {
        method: "post",
        body: JSON.stringify({ mobileNo }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      result = await result.json();
      console.warn(result)
      if (result.auth) {
          localStorage.setItem('user', JSON.stringify(result.user));
          localStorage.setItem('token', JSON.stringify(result.auth));

          // localStorage.setItem()
          navigate('/homepage');
      } else {
          alert('enter details')
      }
    }


    return (

        <div className="login-page">
            <div className="image-section">
                <img alt="car-pool" src={carpoolimage} />
            </div>
            <div className="form-section">
                <div className="form-container">
                    <h1 className="title">welcome to RIDE SHARE !!!</h1>
                    <p className="subtitle">CARPOOL MADE SIMPLE AND ACCESSIBLE</p>
                    <input
                        type="tel"
                        placeholder="Enter your mobile number"
                        className="input-field"
                        maxLength="10"
                        onChange={(e) => { setMobileNo(e.target.value) }}
                    />
                    <button onClick={handleLogin} className="login-button" >
                        Zuuuuuuuiiiiiiii
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login