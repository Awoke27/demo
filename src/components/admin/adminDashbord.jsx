import React, { useState } from "react";
import { FaUsers, FaHome, FaMoneyBill, FaEnvelope, FaChartBar, FaCogs, FaTachometerAlt, FaClipboardCheck, FaBoxOpen } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import logo from "../../assets/logo.png";
import profileImage from "../../assets/Awoke.jpg";
import styles from "./adminDashbord.module.css"; // Import the CSS module

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AdminDashboard = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const chartData = {
    labels: ["ተጠቃሚዎች", "ንብረቶች", "የደንበኝነት ምዝገባዎች", "ጥያቄዎች"],
    datasets: [
      {
        label: "የፕላትፎርም መለኪያዎች",
        data: [53, 230, 89, 112],
        backgroundColor: ["#3498db", "#1abc9c", "#27ae60", "#9b59b6"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "bottom" },
      title: { display: true, text: "የስርዓት አጠቃላይ እይታ" },
    },
  };

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
          <img src={profileImage} alt="Profile" className={styles.profileImage} />
          <h3 className={styles.profileName}>Awoke Sisay</h3>
          <p className={styles.onlineStatus}>● Online</p>
        </div>
        <hr className={styles.divider} />
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {renderNavItem("ዳሽቦርድ", <FaTachometerAlt />, "#f39c12")}
            {renderNavItem("የተጠቃሚ አስተዳደር", <FaUsers />, "#3498db")}
            {renderNavItem("የንብረት ዝርዝሮች", <FaHome />, "#1abc9c")}
            {renderNavItem("የደንበኝነት ምዝገባ አስተዳደር", <FaMoneyBill />, "#27ae60")}
            {renderNavItem("መላላኪያ እና መጠይቆች", <FaEnvelope />, "#9b59b6")}
            {renderNavItem("ማጽደቂያዎች", <FaClipboardCheck />, "#8e44ad")}
            {renderNavItem("ትዕዛዞች", <FaBoxOpen />, "#16a085")}
            {renderNavItem("ዘገባዎች እና ትንታኔዎች", <FaChartBar />, "#e67e22")}
            {renderNavItem("መቼቶች", <FaCogs />, "#e74c3c")}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <img src={logo} alt="Logo" className={styles.logo} />
            <h2 className={styles.headerTitle}>የአስተዳዳሪ ፓነል</h2>
          </div>
          <div className={styles.headerRight}>
            <img src={profileImage} alt="User" className={styles.userImage} />
          </div>
        </header>

        {/* Dashboard Widgets */}
        <section className={styles.cardContainer}>
          <div className={styles.card}>
            <FaUsers style={{ fontSize: "1.5rem", color: "#3498db" }} />
            <div className={styles.cardValue}>53</div>
            <div className={styles.cardLabel}>አዲስ ተጠቃሚዎች</div>
          </div>
          <div className={styles.card}>
            <FaHome style={{ fontSize: "1.5rem", color: "#1abc9c" }} />
            <div className={styles.cardValue}>230</div>
            <div className={styles.cardLabel}>የተዘረዘሩ ንብረቶች</div>
          </div>
          <div className={styles.card}>
            <FaMoneyBill style={{ fontSize: "1.5rem", color: "#27ae60" }} />
            <div className={styles.cardValue}>89</div>
            <div className={styles.cardLabel}>ንቁ የደንበኝነት ምዝገባዎች</div>
          </div>
          <div className={styles.card}>
            <FaEnvelope style={{ fontSize: "1.5rem", color: "#9b59b6" }} />
            <div className={styles.cardValue}>112</div>
            <div className={styles.cardLabel}>ጠቅላላ መተይቆች</div>
          </div>
        </section>

        {/* Chart Section */}
        <section className={styles.chartSection}>
          <h3 className={styles.chartTitle}>የፕላትፎርም ትንታኔ</h3>
          <div className={styles.chartContainer}>
            <Bar data={chartData} options={chartOptions} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;