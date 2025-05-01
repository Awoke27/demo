import React from "react";
import { FaUsers, FaHome, FaMoneyBill, FaEnvelope, FaChartBar, FaCogs, FaTachometerAlt, FaClipboardCheck, FaBoxOpen } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "sans-serif" }}>
      {/* Sidebar */}
      <aside style={{ width: "250px", background: "#0d1b2a", color: "white", padding: "2rem 1rem" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <img src="https://via.placeholder.com/60" alt="Profile" style={{ borderRadius: "50%" }} />
          <h3 style={{ marginTop: "1rem" }}>Awoke Sisay</h3>
          <p style={{ color: "#00FF88" }}>● Online</p>
        </div>
        <hr style={{ borderColor: "#ffffff33", margin: "1rem 0" }} />
        <nav>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={navItem}><FaTachometerAlt style={{ ...iconStyle, color: "#f39c12" }} /> Dashboard</li>
            <li style={navItem}><FaUsers style={{ ...iconStyle, color: "#3498db" }} /> User Management</li>
            <li style={navItem}><FaHome style={{ ...iconStyle, color: "#1abc9c" }} /> Property Listings</li>
            <li style={navItem}><FaMoneyBill style={{ ...iconStyle, color: "#27ae60" }} /> Subscription Management</li>
            <li style={navItem}><FaEnvelope style={{ ...iconStyle, color: "#9b59b6" }} /> Messaging & Inquiries</li>
            <li style={navItem}><FaClipboardCheck style={{ ...iconStyle, color: "#8e44ad" }} /> Approvals</li>
            <li style={navItem}><FaBoxOpen style={{ ...iconStyle, color: "#16a085" }} /> Orders</li>
            <li style={navItem}><FaChartBar style={{ ...iconStyle, color: "#e67e22" }} /> Reports & Analytics</li>
            <li style={navItem}><FaCogs style={{ ...iconStyle, color: "#e74c3c" }} /> Settings</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, backgroundColor: "#f4f6f9" }}>
        {/* Header */}
        <header style={headerStyle}>
          <h2 style={{ margin: 0 }}>Home Agent - Admin Panel</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <img src="https://via.placeholder.com/40" alt="User" style={{ borderRadius: "50%" }} />
          </div>
        </header>

        {/* Dashboard Widgets */}
        <section style={cardContainer}>
          <div style={cardStyle}>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>53</div>
            <div style={{ color: "#777" }}>New Users</div>
          </div>
          <div style={cardStyle}>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>230</div>
            <div style={{ color: "#777" }}>Listed Properties</div>
          </div>
          <div style={cardStyle}>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>89</div>
            <div style={{ color: "#777" }}>Active Subscriptions</div>
          </div>
          <div style={cardStyle}>
            <div style={{ fontSize: "1.4rem", fontWeight: "bold" }}>112</div>
            <div style={{ color: "#777" }}>Total Inquiries</div>
          </div>
        </section>

        {/* Chart Placeholder */}
        <section style={{ padding: "2rem" }}>
          <h3>Platform Analytics</h3>
          <div style={{ background: "white", padding: "2rem", borderRadius: "10px", minHeight: "200px" }}>
            <p style={{ color: "#aaa" }}>Analytics Chart Placeholder</p>
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
  fontSize: "1.2rem",
  cursor: "pointer",
};

const iconStyle = {
  fontSize: "1.2rem",
};

const headerStyle = {
  background: "#112B3C",
  color: "white",
  padding: "1rem 2rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const cardContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  gap: "1rem",
  padding: "2rem",
};

const cardStyle = {
  backgroundColor: "white",
  padding: "1.5rem",
  borderRadius: "10px",
  textAlign: "center",
};

export default AdminDashboard;
