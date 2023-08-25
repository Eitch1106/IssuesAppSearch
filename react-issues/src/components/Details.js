import React from "react";

//como no instale picocss como librearía, si no como CDN, tuve que generar aquí estilos porque no funcionaba en App.css
const modalStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1000,
  backgroundColor: "rgba(0, 0, 0, 0.75)"
};

const contentStyle = {
  backgroundColor: " #182064 ",
  padding: "16px",
  borderRadius: "4px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  zIndex: 1001,
  maxWidth: "90%",
  maxHeight: "80vh",
  overflowY: "auto"
};

const closeButtonStyle = {
  position: "absolute",
  top: "8px",
  right: "8px",
  color: "white",
  cursor: "pointer"
};

const Detail = ({ bug, onClose }) => {
  return (
    <content>
    <div style={modalStyle}>
      <div style={contentStyle}>
        <button style={closeButtonStyle} onClick={onClose}>
          Close
        </button>
        <h2 style={{ fontSize: "1rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
          {bug.title}
        </h2>
        <div style={{ fontSize: "0.75rem", maxHeight: "40vh", overflowY: "auto" }}>
          {bug.body}
        </div>
        <a
        href={bug.html_url}
        target="_blank"
        rel="noopener noreferrer">
        Para mayor información visita: {bug.html_url}   
        </a>
      </div>
    </div>
    </content>
  );
};

export default Detail;