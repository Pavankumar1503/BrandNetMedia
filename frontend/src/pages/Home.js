import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const servicesRef = useRef(null);

  const handleGetStarted = () => {
    // Scroll to services
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
    // Navigate to contact after 1.2s
    setTimeout(() => navigate("/contact"), 1200);
  };

  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      background: "#f5f6fa",
      overflowX: "hidden",
    },
    hero: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      textAlign: "center",
      background: "linear-gradient(135deg, #0d1b2a 0%, #00bcd4 100%)",
      color: "white",
      padding: "0 20px",
      animation: "fadeIn 1.5s ease-in-out",
    },
    title: {
      fontSize: "3rem",
      fontWeight: "800",
      marginBottom: "20px",
      lineHeight: "1.2",
    },
    titleSpan: {
      color: "#fff200", // Highlight color
    },
    subtitle: {
      fontSize: "1.3rem",
      maxWidth: "700px",
      lineHeight: "1.6",
      marginBottom: "40px",
      color: "rgba(255,255,255,0.9)",
    },
    button: {
      padding: "16px 45px",
      fontSize: "1.1rem",
      fontWeight: "600",
      border: "none",
      borderRadius: "10px",
      backgroundColor: "#fff200",
      color: "#0d1b2a",
      cursor: "pointer",
      transition: "all 0.3s ease",
      boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
    },
    buttonHover: {
      transform: "scale(1.05)",
      boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    },
    servicesSection: {
      padding: "80px 20px",
      maxWidth: "1200px",
      margin: "0 auto",
      animation: "fadeUp 1.5s ease-in-out",
    },
    servicesTitle: {
      textAlign: "center",
      fontSize: "2.5rem",
      marginBottom: "60px",
      color: "#0d1b2a",
      fontWeight: "700",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "35px",
      justifyItems: "center",
    },
    card: {
      backgroundColor: "#fff",
      padding: "30px",
      borderRadius: "15px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      textAlign: "center",
      transition: "all 0.3s ease",
      cursor: "pointer",
      width: "100%",
      maxWidth: "350px",
    },
    cardHover: {
      transform: "translateY(-12px) scale(1.03)",
      boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
    },
    icon: {
      fontSize: "3.2rem",
      marginBottom: "18px",
    },
    serviceTitle: {
      fontSize: "1.4rem",
      fontWeight: "700",
      marginBottom: "12px",
      color: "#0d1b2a",
    },
    serviceDesc: {
      fontSize: "1rem",
      color: "#555",
      lineHeight: "1.7",
      whiteSpace: "pre-line",
    },
  };

  const services = [
    { icon: "🔍", title: "SEO Optimization", description: "Boost your website’s visibility and rank higher on search engines." },
    { icon: "📱", title: "Social Media Marketing", description: "Grow your audience and brand presence on social media platforms." },
    { icon: "💰", title: "Pay-Per-Click Ads", description: "Run high-performing ad campaigns that maximize ROI." },
    { icon: "🎯", title: "Brand Strategy", description: "Develop a unique identity that sets your brand apart." },
    { icon: "✍️", title: "Content Marketing", description: "Engage and educate your audience through powerful content." },
    { icon: "📧", title: "Email Marketing", description: "Build customer relationships with personalized campaigns." },
    { icon: "🌐", title: "Web Development", description: "Create stunning, responsive websites built for performance." },
    { icon: "📊", title: "Analytics & Reporting", description: "Track performance and optimize strategies with data insights." },
    { icon: "🤝", title: "Client Consulting", description: "Align your business goals with powerful marketing solutions." },
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <h1 style={styles.title}>
          Welcome to <span style={styles.titleSpan}>Brand Net Media</span>
        </h1>
        <p style={styles.subtitle}>
          Your trusted partner for <strong>SEO</strong>, <strong>Social Media Marketing</strong>,
          <strong> Ads</strong>, and <strong>Branding Solutions</strong>.
        </p>
        <button
          style={styles.button}
          onMouseEnter={(e) => Object.assign(e.target.style, styles.buttonHover)}
          onMouseLeave={(e) =>
            Object.assign(e.target.style, { 
              transform: "scale(1)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
            })
          }
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>

      {/* Services Section */}
      <div ref={servicesRef} style={styles.servicesSection}>
        <h2 style={styles.servicesTitle}>Our Services</h2>
        <div style={styles.grid}>
          {services.map((s, idx) => (
            <div
              key={idx}
              style={styles.card}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, styles.cardHover)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, styles.card)}
            >
              <div style={styles.icon}>{s.icon}</div>
              <div style={styles.serviceTitle}>{s.title}</div>
              <div style={styles.serviceDesc}>{s.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(50px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}
