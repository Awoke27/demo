import React from "react";
import { FaHome, FaInfoCircle } from "react-icons/fa";

const GuestDashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* Sidebar */}
      <aside style={{ width: "230px", background: "#2c3e50", color: "white", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img src="https://via.placeholder.com/60" alt="Guest" style={{ borderRadius: "50%" }} />
          <h3 style={{ marginTop: "1rem" }}>Guest User</h3>
        </div>
        <hr style={{ borderColor: "#ffffff33", margin: "1rem 0" }} />
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={navItem}><FaHome style={{ ...iconStyle, color: "#1abc9c" }} /> Browse Listings</li>
            <li style={navItem}><FaInfoCircle style={{ ...iconStyle, color: "#e67e22" }} /> Register</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, backgroundColor: "#ecf0f1" }}>
        <header style={headerStyle}>
          <h2 style={{ margin: 0 }}>Home Agent - Guest Access</h2>
        </header>

        <section style={cardContainer}>
          <div style={cardStyle}>
            <h3>Browse Properties</h3>
            <p>View available listings with basic filters.</p>
          </div>
          <div style={cardStyle}>
            <h3>Want More?</h3>
            <p>Register to save favorites, schedule visits, and message agents.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

const navItem = {
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem 0",
  fontSize: "1.1rem",
  cursor: "pointer",
};

const iconStyle = {
  fontSize: "1.2rem",
};

const headerStyle = {
  background: "#34495e",
  color: "white",
  padding: "1rem 2rem",
  display: "flex",
  alignItems: "center",
};

const cardContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "1rem",
  padding: "2rem",
};

const cardStyle = {
  backgroundColor: "white",
  padding: "1.5rem",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
};

export default GuestDashboard;
