
document.addEventListener("DOMContentLoaded", function () {
  const csvUrl = "https://docs.google.com/spreadsheets/d/1vRYaXiI0WHt73BCQa69SR9dzaiEZagy5pQBeWh62xKBsOtvUDNs-VL8Rg4OX-ypHpKhoi6i3XKFu5VM/export?format=csv&gid=0";

  fetch(csvUrl)
    .then(response => response.text())
    .then(csv => {
      const data = Papa.parse(csv, { header: true }).data;

      const listContainer = document.getElementById("animal-list");
      listContainer.innerHTML = "";

      data.forEach(animal => {
        const item = document.createElement("div");
        item.classList.add("animal-card");

        item.innerHTML = `
          <h3>${animal.Nome || "Sem nome"}</h3>
          <p><strong>Espécie:</strong> ${animal.Especie || "N/A"}</p>
          <p><strong>Raça:</strong> ${animal.Raca || "N/A"}</p>
          <p><strong>Sexo:</strong> ${animal.Sexo || "N/A"}</p>
          <p><strong>Idade aprox.:</strong> ${animal.Idade || "N/A"}</p>
          <p><strong>Castrado:</strong> ${animal.Castrado || "N/A"}</p>
          <p><strong>Vacinado:</strong> ${animal.Vacinado || "N/A"}</p>
          <p><strong>Localização:</strong> ${animal.Localizacao || "N/A"}</p>
        `;

        listContainer.appendChild(item);
      });
    })
    .catch(error => {
      console.error("Erro ao carregar CSV:", error);
    });
});
