import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const styles = {
    header: {
      backgroundColor: "#0d1b2a",
      padding: "15px 40px",
      color: "white",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
      position: "sticky",
      top: 0,
      zIndex: 100,
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
    },
    logoContainer: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      color: "white",
    },
    logo: {
      height: "50px",
      width: "50px",
      margin: "10px 10px",
      borderRadius: "50%",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      animation: "float 3s ease-in-out infinite",
      cursor: "pointer",
    },
    brandName: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      letterSpacing: "0.5px",
      marginLeft: "10px",
      transition: "color 0.3s, text-shadow 0.3s",
    },
    nav: {
      display: "flex",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap",
    },
    link: {
      color: "white",
      textDecoration: "none",
      fontWeight: "500",
      position: "relative",
      padding: "5px 0",
      transition: "color 0.3s",
    },
    linkAfter: {
      content: '""',
      position: "absolute",
      width: "0%",
      height: "2px",
      bottom: 0,
      left: 0,
      backgroundColor: "#00bcd4",
      transition: "width 0.3s ease",
    },
    linkHover: {
      color: "#00bcd4",
    },
  };

  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo + Brand Name */}
        <Link to="/" style={styles.logoContainer}>
          <img
            src="/images/left_Logo.jpg" // Transparent PNG
            alt="Brand Net Media Logo"
            style={styles.logo}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "rotate(10deg) scale(1.1)";
              e.currentTarget.style.boxShadow =
                "0 4px 20px rgba(0, 188, 212, 0.6)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "rotate(0deg) scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          />
          <span
            style={styles.brandName}
            onMouseEnter={(e) =>
              (e.target.style.textShadow = "0 0 8px #00bcd4")
            }
            onMouseLeave={(e) => (e.target.style.textShadow = "none")}
          >
            Brand Net Media
          </span>
        </Link>

        {/* Navigation Links */}
        <nav style={styles.nav}>
          {["Services", "Prices", "Contact", "Portfolio", "Admin"].map(
            (item) => (
              <Link
                key={item}
                to={
                  item === "Admin" ? "/admin/login" : `/${item.toLowerCase()}`
                }
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.color = "#00bcd4")}
                onMouseLeave={(e) => (e.target.style.color = "white")}
              >
                {item}
                <span
                  style={{
                    position: "absolute",
                    width: 0,
                    height: "2px",
                    bottom: 0,
                    left: 0,
                    backgroundColor: "#00bcd4",
                    transition: "width 0.3s ease",
                  }}
                  className="underline"
                ></span>
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Floating Logo Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
          }

          nav a {
            position: relative;
          }

          nav a::after {
            content: '';
            position: absolute;
            width: 0;
            height: 2px;
            background: #00bcd4;
            left: 0;
            bottom: 0;
            transition: 0.3s;
          }

          nav a:hover::after {
            width: 100%;
          }
        `}
      </style>
    </header>
  );
}
