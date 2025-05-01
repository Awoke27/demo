import React from "react";
import { FaHome, FaBell, FaComments, FaUser, FaStar } from "react-icons/fa";

const ClientDashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* Sidebar */}
      <aside style={{ width: "230px", background: "#2c3e50", color: "white", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img src="https://via.placeholder.com/60" alt="Client" style={{ borderRadius: "50%" }} />
          <h3 style={{ marginTop: "1rem" }}>Client Name</h3>
        </div>
        <hr style={{ borderColor: "#ffffff33", margin: "1rem 0" }} />
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={navItem}><FaHome style={{ ...iconStyle, color: "#1abc9c" }} /> Browse Properties</li>
            <li style={navItem}><FaComments style={{ ...iconStyle, color: "#f39c12" }} /> Messages</li>
            <li style={navItem}><FaStar style={{ ...iconStyle, color: "#f1c40f" }} /> Reviews & Ratings</li>
            <li style={navItem}><FaUser style={{ ...iconStyle, color: "#bdc3c7" }} /> Profile</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, backgroundColor: "#ecf0f1" }}>
        <header style={headerStyle}>
          <h2 style={{ margin: 0 }}>Home Agent - Client Panel</h2>
        </header>

        <section style={cardContainer}>
          <div style={cardStyle}>
            <h3>Browse Properties</h3>
            <p>Explore available listings by location, type, or price.</p>
          </div>
          <div style={cardStyle}>
            <h3>Inbox</h3>
            <p>Chat with property owners or agents securely.</p>
          </div>
          <div style={cardStyle}>
            <h3>Leave a Review</h3>
            <p>Share feedback after a property visit.</p>
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

export default ClientDashboard;
