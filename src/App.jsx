
import React, { useEffect, useState } from 'react';

function App() {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vRYaXiI0WHt73BCQa69SR9dzaiEZagy5pQBeWh62xKBsOtvUDNs-VL8Rg4OX-ypHpKhoi6i3XKFu5VM/pub?gid=0&single=true&output=csv')
      .then(res => res.text())
      .then(text => {
        const lines = text.split('\n').filter(line => line);
        const headers = lines[0].split(',');
        const data = lines.slice(1).map(row =>
          Object.fromEntries(row.split(',').map((val, i) => [headers[i], val]))
        );
        setAnimais(data);
      });
  }, []);

  return (
    <div>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src="/logo_canto_superior_esquerdo.png" alt="Logo ESQ" />
        <img src="/logo_centro_superior.png" alt="Logo Centro" />
        <img src="/logo_canto_superior_direito.png" alt="Logo DIR" />
      </header>
      <main style={{ display: 'flex' }}>
        <section style={{ flex: 2, padding: 10 }}>
          <h2>Animais Disponíveis</h2>
          <ul>
            {animais.map((a, i) => (
              <li key={i}>{a.Nome || 'Sem nome'} - {a.Especie}</li>
            ))}
          </ul>
        </section>
        <aside style={{ flex: 1, padding: 10 }}>
          <h2>Gráficos</h2>
          <p>(em breve)</p>
        </aside>
      </main>
      <footer>
        <img src="/patas_canto_inferior_direito_abaixo_dos_graficos.png" alt="Rodapé" />
        <p>Projeto Patas Valparaíso</p>
      </footer>
    </div>
  );
}

export default App;
