const PLANILHA_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRYaXiI0WHt73BCQa69SR9dzaiEZagy5pQBeWh62xKBsOtvUDNs-VL8Rg4OX-ypHpKhoi6i3XKFu5VM/pub?gid=0&single=true&output=csv";

async function carregarDados() {
  const res = await fetch(PLANILHA_URL);
  const texto = await res.text();
  const linhas = texto.trim().split("\n").map(l => l.split(","));

  const titulos = linhas[0];
  const dados = linhas.slice(1);
  document.getElementById("animalCards").innerHTML = "";

  let total = dados.length;
  let castrados = 0;
  let vacinados = 0;

  for (const linha of dados) {
    const info = Object.fromEntries(titulos.map((t, i) => [t, linha[i]]));
    if (info["Castrado"]?.toLowerCase() === "sim") castrados++;
    if (info["Vacina Raiva"]?.toLowerCase() === "sim" || info["Vacina Vírus"]?.toLowerCase() === "sim") vacinados++;

    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = \`
      <strong>\${info["Nome"] || "Animal"}</strong><br>
      Espécie: \${info["Espécie"] || "-"}<br>
      Sexo: \${info["Sexo"] || "-"}<br>
      Idade: \${info["Idade"] || "-"}<br>
      Raça: \${info["Raça"] || "-"}<br>
      Chip: \${info["Chip"] || "-"}<br>
      Vacina Raiva: \${info["Vacina Raiva"] || "-"}<br>
      Vacina Vírus: \${info["Vacina Vírus"] || "-"}<br>
      Castrado: \${info["Castrado"] || "-"}<br>
      Responsável: \${info["Responsável"] || "-"}<br>
      Endereço: \${info["Endereço"] || "-"}<br>
      Telefone: \${info["Telefone"] || "-"}
    \`;
    document.getElementById("animalCards").appendChild(div);
  }

  const naoCastrados = total - castrados;
  const naoVacinados = total - vacinados;

  new Chart(document.getElementById("graficoTotal"), {
    type: "doughnut",
    data: {
      labels: ["Total"],
      datasets: [{ data: [total], backgroundColor: ["#4CAF50"] }]
    }
  });

  new Chart(document.getElementById("graficoCastrados"), {
    type: "bar",
    data: {
      labels: ["Castrados", "Não Castrados"],
      datasets: [{
        data: [castrados, naoCastrados],
        backgroundColor: ["#2196F3", "#ccc"]
      }]
    },
    options: { plugins: { legend: { display: false } } }
  });

  new Chart(document.getElementById("graficoVacinados"), {
    type: "bar",
    data: {
      labels: ["Vacinados", "Não vacinados"],
      datasets: [{
        data: [vacinados, naoVacinados],
        backgroundColor: ["#FF9800", "#9C27B0"]
      }]
    },
    options: { plugins: { legend: { display: false } } }
  });

  document.getElementById("visitantes").textContent = "Visitantes: " + Math.floor(Math.random() * 1000);
}
carregarDados();