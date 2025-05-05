
import React from "react";
import ReactDOM from "react-dom/client";
import Topo from "../components/Topo";
import ListaAnimais from "../components/ListaAnimais";

const App = () => {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Topo />
      <div style={{ display: "flex", padding: 20 }}>
        <ListaAnimais />
        <div style={{ flex: 1, marginLeft: 20 }}>
          <p>Gráficos aqui</p>
        </div>
      </div>
      <footer style={{ textAlign: "center", padding: 20 }}>
        Criado por: Ronnor Oliveira
      </footer>
    </div>
  );
};

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App />);
