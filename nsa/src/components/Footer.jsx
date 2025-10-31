import React from "react";
import { FaInstagram } from "react-icons/fa";
import nsaLogo from "../path/nsalogo.png"; // logo yolunu kendi projenle eşleştir

export default function Footer() {
  return (
    <footer
      style={{
        background: "rgba(0,0,0,0.6)",
        color: "#aaa",
        textAlign: "center",
        padding: "30px 0 20px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <img
          src={nsaLogo}
          alt="Nişantaşı Sanat Akademisi"
          style={{
            width: "36px",
            height: "36px",
            objectFit: "contain",
            opacity: 0.8,
          }}
        />

        <span style={{ fontSize: "14px", letterSpacing: "0.5px" }}>
          © {new Date().getFullYear()} Nişantaşı Sanat Akademisi
        </span>

        <a
          href="https://www.instagram.com/nisantasisanatakademisi" // kendi IG linkin
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#aaa",
            marginLeft: "10px",
            transition: "color 0.3s ease, transform 0.3s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#aaa")}
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </footer>
  );
}
