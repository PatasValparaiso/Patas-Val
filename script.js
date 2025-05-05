// Exemplo simples de uso do Chart.js
const ctx1 = document.getElementById('grafico1').getContext('2d');
const ctx2 = document.getElementById('grafico2').getContext('2d');
const ctx3 = document.getElementById('grafico3').getContext('2d');

new Chart(ctx1, {
  type: 'line',
  data: { labels: ['Jan', 'Fev'], datasets: [{ label: 'Cadastros', data: [5, 10], borderColor: 'blue' }] }
});

new Chart(ctx2, {
  type: 'bar',
  data: { labels: ['Castrações'], datasets: [{ label: 'Total', data: [3], backgroundColor: 'green' }] }
});

new Chart(ctx3, {
  type: 'bar',
  data: { labels: ['Vacinações'], datasets: [{ label: 'Total', data: [4], backgroundColor: 'orange' }] }
});
