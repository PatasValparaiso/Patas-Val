
import React from "react";
import logo1 from "../public/logo1.png";
import logo2 from "../public/logo2.png";
import logo3 from "../public/logo3.png";

export default function Topo() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: 10, backgroundColor: "#1E3A8A", color: "white" }}>
      <img src={logo1} alt="Logo 1" style={{ height: 50 }} />
      <img src={logo2} alt="Logo 2" style={{ height: 50 }} />
      <img src={logo3} alt="Logo 3" style={{ height: 50 }} />
    </div>
  );
}
