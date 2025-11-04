import React from 'react';

export default function Footer() {
  const styles = {
    footer: {
      background: "linear-gradient(135deg, #0d1b2a, #1b263b)",
      color: "white",
      textAlign: "center",
      padding: "50px 20px",
      fontSize: "0.95rem",
      lineHeight: "1.6",
      position: "relative",
      overflow: "hidden",
      zIndex: 1,
    },
    brand: {
      fontWeight: "bold",
      fontSize: "1.3rem",
      marginBottom: "12px",
      display: "block",
      transition: "color 0.3s, transform 0.3s",
      cursor: "default",
      zIndex: 2,
      position: "relative",
    },
    contact: {
      zIndex: 2,
      position: "relative",
    },
    particle: {
      position: "absolute",
      width: "8px",
      height: "8px",
      background: "#00bcd4",
      borderRadius: "50%",
      opacity: 0.7,
      animation: "float 6s infinite ease-in-out",
      zIndex: 0,
    },
  };

  // Generate multiple particle divs
  const particles = Array.from({ length: 20 }).map((_, index) => {
    const size = Math.random() * 6 + 4 + "px";
    const left = Math.random() * 100 + "%";
    const delay = Math.random() * 5 + "s";
    const duration = Math.random() * 5 + 5 + "s";
    const style = {
      ...styles.particle,
      width: size,
      height: size,
      left,
      animationDelay: delay,
      animationDuration: duration,
    };
    return <div key={index} style={style}></div>;
  });

  return (
    <footer style={styles.footer}>
      {particles}
      <span
        style={styles.brand}
        onMouseEnter={(e) => {
          e.target.style.color = "#00bcd4";
          e.target.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.target.style.color = "white";
          e.target.style.transform = "scale(1)";
        }}
      >
        Brand Net Media
      </span>
      <div style={styles.contact}>
        Digital marketing services<br />
        Email: <a href="mailto:contact@brandnetmedia.com" style={{ color: '#00bcd4' }}>contact@brandnetmedia.com</a> | Phone: +91-9876543210<br />
        Address: 123 Marketing Lane, Hyderabad, India
      </div>

      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0) translateX(0); opacity: 0.6; }
            50% { transform: translateY(-20px) translateX(10px); opacity: 0.9; }
            100% { transform: translateY(0) translateX(-10px); opacity: 0.6; }
          }

          footer a {
            color: #00bcd4;
            text-decoration: none;
            transition: color 0.3s, transform 0.3s;
          }

          footer a:hover {
            color: #ffffff;
            transform: scale(1.05);
          }
        `}
      </style>
    </footer>
  );
}
