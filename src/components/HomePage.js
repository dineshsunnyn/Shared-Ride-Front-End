import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const HomePage = () => {
    const handleLogout = () => {
        console.log("Logging out...");
        // You can implement the actual logout functionality here, like clearing session or redirecting the user
    };

    return (
        <div className="home-container">
            {/* Left Section (Buttons) */}
            <div className="left-section">
                <h2 className="welcome-message">Welcome back, User!</h2>

                <div className="menu">
                    <Link to="/lookforride" className="menu-btn">Look for a Ride</Link>
                    <Link to="/giveride" className="menu-btn">Wanna Give a Ride</Link>
                    <Link to="/myearnings" className="menu-btn">My Earnings</Link>
                    <Link to="/login" className="menu-btn expenses-btn">My Expenses</Link>
                    {/* Logout Button */}
                    <button className="menu-btn logout-btn" onClick={handleLogout}>Login</button>
                </div>
            </div>

            {/* Right Section (Empty for now) */}
            <div className="right-section">
                {/* Content will be added later */}
                <Outlet />
            </div>
        </div>
    );
};

export default HomePage;
