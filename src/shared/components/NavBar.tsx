import React from "react";

const NavBar: React.FC = () => {
  return (
    <div style={{
      width: "60px",
      backgroundColor: "#222",
      color: "#fff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "1rem 0",
    }}>
      <button>🏠</button>
      <button>📚</button>
      <button>⚙️</button>
    </div>
  );
};

export default NavBar;
