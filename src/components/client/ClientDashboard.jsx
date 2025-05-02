import React, { useState } from "react";
import { FaHome, FaComments, FaUser, FaStar, FaCalendarAlt, FaHeart } from "react-icons/fa";
import logo from "../../assets/logo.png";
import profileImage from "../../assets/client.png";
import styles from "./ClientDashboard.module.css"; // Import the CSS module

const ClientDashboard = () => {
  const [activeItem, setActiveItem] = useState("Browse Properties");

  const renderNavItem = (label, icon, color) => (
    <li
      onClick={() => setActiveItem(label)}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateX(5px)";
        e.currentTarget.style.boxShadow = "inset 4px 0 0 #00FF88";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "none";
      }}
      className={`${styles.navItem} ${activeItem === label ? styles.activeNavItem : ""}`}
    >
      {React.cloneElement(icon, { style: { color } })} {label}
    </li>
  );

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.profileSection}>
          <img src={profileImage} alt="Client" className={styles.profileImage} />
          <h3 className={styles.profileName}>Client Name</h3>
          <p className={styles.onlineStatus}>● Online</p>
        </div>
        <hr className={styles.divider} />
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {renderNavItem("Browse Properties", <FaHome />, "#1abc9c")}
            {renderNavItem("Messages", <FaComments />, "#f39c12")}
            {renderNavItem("Reviews & Ratings", <FaStar />, "#f1c40f")}
            {renderNavItem("Profile", <FaUser />, "#bdc3c7")}
            {renderNavItem("Booking Property Visits", <FaCalendarAlt />, "#e74c3c")}
            {renderNavItem("Saved Properties", <FaHeart />, "#e84393")}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <h2 className={styles.headerTitle}>Client Panel</h2>
          </div>
          <div className={styles.headerRight}>
            <img src={profileImage} alt="Client" className={styles.userImage} />
          </div>
        </header>

        <section className={styles.cardContainer}>
          <div className={`${styles.card} ${styles.cardHover}`}>
            <FaHome style={{ fontSize: "2rem", color: "#1abc9c", marginBottom: "0.5rem" }} />
            <h3>Browse Properties</h3>
            <p>Explore available listings by location, type, or price.</p>
          </div>
          <div className={`${styles.card} ${styles.cardHover}`}>
            <FaComments style={{ fontSize: "2rem", color: "#f39c12", marginBottom: "0.5rem" }} />
            <h3>Inbox</h3>
            <p>Chat with property owners or agents securely.</p>
          </div>
          <div className={`${styles.card} ${styles.cardHover}`}>
            <FaStar style={{ fontSize: "2rem", color: "#f1c40f", marginBottom: "0.5rem" }} />
            <h3>Leave a Review</h3>
            <p>Share feedback after a property visit.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ClientDashboard;