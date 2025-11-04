import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Services() {
  const services = [
    {
      title: "SEO Optimization",
      description:
        "Boost your website's visibility and rankings on Google.\nDrive more organic traffic and increase conversions.",
      icon: "🔍",
    },
    {
      title: "Social Media Marketing",
      description:
        "Engage your audience on Facebook, Instagram, and LinkedIn.\nBuild community and brand trust.",
      icon: "📱",
    },
    {
      title: "Pay-Per-Click Ads",
      description:
        "Get instant visibility with Google and Meta Ads.\nDrive qualified leads and maximize ROI.",
      icon: "💰",
    },
    {
      title: "Brand Strategy",
      description:
        "Define your brand voice and position in the market.\nStand out from competitors with clarity and confidence.",
      icon: "🎯",
    },
    {
      title: "Content Marketing",
      description:
        "Deliver valuable content to attract, engage, and retain customers.\nBuild long-term brand authority.",
      icon: "✍️",
    },
    {
      title: "Email Campaigns",
      description:
        "Personalized email campaigns to nurture leads.\nEnhance loyalty and customer lifetime value.",
      icon: "📧",
    },
    {
      title: "Web Design",
      description:
        "Design stunning, user-friendly websites optimized for conversion.\nSeamless across all devices.",
      icon: "💻",
    },
    {
      title: "Analytics & Reporting",
      description:
        "Track performance with real-time dashboards.\nMake data-driven marketing decisions easily.",
      icon: "📊",
    },
  ];

  useEffect(() => {
    // Fade-in animation
    const cards = document.querySelectorAll(".service-card");
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, i * 150);
    });
  }, []);

  const styles = {
    container: {
      background:
        "linear-gradient(135deg, #f9fafc 0%, #e8f1f9 50%, #f9fafc 100%)",
      minHeight: "100vh",
      padding: "70px 30px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      fontSize: "2.4rem",
      fontWeight: "700",
      color: "#0d1b2a",
      marginBottom: "50px",
      textAlign: "center",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)", // EXACTLY 2 COLUMNS
      gap: "40px 60px",
      width: "100%",
      maxWidth: "1000px",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "16px",
      padding: "30px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.08)",
      textAlign: "center",
      transition: "transform 0.4s ease, box-shadow 0.4s ease",
      cursor: "pointer",
      opacity: 0,
      transform: "translateY(30px)",
    },
    icon: {
      fontSize: "3rem",
      marginBottom: "15px",
      transition: "transform 0.3s ease",
    },
    serviceTitle: {
      fontSize: "1.4rem",
      fontWeight: "600",
      color: "#0d1b2a",
      marginBottom: "10px",
    },
    serviceDesc: {
      fontSize: "1rem",
      color: "#555",
      lineHeight: "1.6",
      whiteSpace: "pre-line",
    },
    contactBtn: {
      marginTop: "60px",
      backgroundColor: "#00bcd4",
      color: "white",
      padding: "14px 40px",
      fontSize: "1.1rem",
      border: "none",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "600",
      boxShadow: "0 4px 10px rgba(0, 188, 212, 0.3)",
      transition: "background-color 0.3s ease, transform 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Professional Services</h2>

      <div style={styles.grid}>
        {services.map((s, idx) => (
          <div
            key={idx}
            className="service-card"
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 12px 25px rgba(0, 188, 212, 0.3)";
              e.currentTarget.querySelector(".service-icon").style.transform =
                "scale(1.2) rotate(10deg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 6px 20px rgba(0,0,0,0.08)";
              e.currentTarget.querySelector(".service-icon").style.transform =
                "scale(1) rotate(0)";
            }}
          >
            <div className="service-icon" style={styles.icon}>
              {s.icon}
            </div>
            <div style={styles.serviceTitle}>{s.title}</div>
            <div style={styles.serviceDesc}>{s.description}</div>
          </div>
        ))}
      </div>

      <Link
        to="/contact"
        style={styles.contactBtn}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = "#0097a7";
          e.target.style.transform = "scale(1.05)";
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = "#00bcd4";
          e.target.style.transform = "scale(1)";
        }}
      >
        Contact Us
      </Link>

      {/* Fade Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .service-card {
            animation: fadeIn 0.6s ease forwards;
          }
          @media (max-width: 768px) {
            .service-card {
              width: 90%;
            }
            div[style*="gridTemplateColumns"] {
              grid-template-columns: 1fr; /* single column on mobile */
            }
          }
        `}
      </style>
    </div>
  );
}
