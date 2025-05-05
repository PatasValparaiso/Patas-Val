
document.addEventListener("DOMContentLoaded", function () {
    const csvUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRYaXiI0WHt73BCQa69SR9dzaiEZagy5pQBeWh62xKBsOtvUDNs-VL8Rg4OX-ypHpKhoi6i3XKFu5VM/pub?gid=0&single=true&output=csv';

    fetch(csvUrl)
        .then(response => response.text())
        .then(csvText => {
            const data = parseCSV(csvText);
            displayData(data);
            renderCharts(data);
            setupSearch(data);
        });

    function parseCSV(csvText) {
        const lines = csvText.trim().split('\n');
        const headers = lines[0].split(',');
        return lines.slice(1).map(line => {
            const values = line.split(',');
            return headers.reduce((obj, header, index) => {
                obj[header.trim()] = values[index]?.trim() || "";
                return obj;
            }, {});
        });
    }

    function displayData(dataArray) {
        const container = document.getElementById('data-container');
        container.innerHTML = ''; // Clear previous data

        dataArray.forEach(data => {
            const card = document.createElement('div');
            card.className = 'animal-card';

            card.innerHTML = `
                <p><strong>Nome:</strong> ${data.Nome}</p>
                <p><strong>Raça:</strong> ${data.Raça}</p>
                <p><strong>Sexo:</strong> ${data.Sexo}</p>
                <p><strong>Idade:</strong> ${data.Idade}</p>
                <p><strong>Situação:</strong> ${data.Situação}</p>
            `;

            container.appendChild(card);
        });
    }

    function renderCharts(dataArray) {
        const sexoCount = countBy(dataArray, 'Sexo');
        const idadeCount = countBy(dataArray, 'Idade');
        const situacaoCount = countBy(dataArray, 'Situação');

        createChart('chart1', 'Distribuição por Sexo', sexoCount);
        createChart('chart2', 'Distribuição por Idade', idadeCount);
        createChart('chart3', 'Distribuição por Situação', situacaoCount);
    }

    function countBy(array, key) {
        return array.reduce((acc, obj) => {
            const val = obj[key] || 'Não informado';
            acc[val] = (acc[val] || 0) + 1;
            return acc;
        }, {});
    }

    function createChart(canvasId, label, dataObj) {
        const ctx = document.getElementById(canvasId).getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(dataObj),
                datasets: [{
                    label,
                    data: Object.values(dataObj),
                    backgroundColor: '#007bff'
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                    title: { display: true, text: label }
                }
            }
        });
    }

    function setupSearch(fullData) {
        const input = document.getElementById('search-input');
        input.addEventListener('input', function () {
            const term = this.value.toLowerCase();
            const filtered = fullData.filter(item =>
                Object.values(item).some(value =>
                    value.toLowerCase().includes(term)
                )
            );
            displayData(filtered);
        });
    }
});
