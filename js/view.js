const output = document.getElementById('output');
const chartCanvas = document.getElementById('chart');
const runs = JSON.parse(localStorage.getItem('runs')) || [];

document.getElementById('viewDataBtn').addEventListener('click', showList);
document.getElementById('viewTableBtn').addEventListener('click', showTable);
document.getElementById('viewChartBtn').addEventListener('click', showChart);

function showList() {
  chartCanvas.classList.add('hidden');
  if (runs.length === 0) {
    output.innerHTML = '<p>Тренировок пока нет.</p>';
    return;
  }

  let html = '<ul>';
  runs.forEach(run => {
    html += `<li>
      <strong>${run.date} ${run.time}</strong> — ${run.distance} км, темп: ${run.pace}, скорость: ${run.speed} км/ч, пульс: ${run.heartRate}
    </li>`;
  });
  html += '</ul>';
  output.innerHTML = html;
}

function showTable() {
  chartCanvas.classList.add('hidden');
  if (runs.length === 0) {
    output.innerHTML = '<p>Нет данных для таблицы.</p>';
    return;
  }

  let html = `
    <table>
      <thead>
        <tr>
          <th>Дата</th>
          <th>Время</th>
          <th>Дистанция (км)</th>
          <th>Темп</th>
          <th>Скорость (км/ч)</th>
          <th>Пульс</th>
        </tr>
      </thead>
      <tbody>
  `;
  runs.forEach(run => {
    html += `
      <tr>
        <td>${run.date}</td>
        <td>${run.time}</td>
        <td>${run.distance}</td>
        <td>${run.pace}</td>
        <td>${run.speed}</td>
        <td>${run.heartRate}</td>
      </tr>
    `;
  });
  html += '</tbody></table>';
  output.innerHTML = html;
}

function showChart() {
  output.innerHTML = '';
  chartCanvas.classList.remove('hidden');

  if (runs.length === 0) {
    chartCanvas.classList.add('hidden');
    output.innerHTML = '<p>Нет данных для графика.</p>';
    return;
  }

  const labels = runs.map(r => r.date);
  const speeds = runs.map(r => r.speed);
  const heartRates = runs.map(r => r.heartRate);
  const distances = runs.map(r => r.distance);

  // Удалим предыдущий график, если был
  if (Chart.getChart(chartCanvas)) {
    Chart.getChart(chartCanvas).destroy();
  }

  new Chart(chartCanvas, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Скорость (км/ч)',
          data: speeds,
          borderColor: 'blue',
          fill: false
        },
        {
          label: 'Пульс (уд/мин)',
          data: heartRates,
          borderColor: 'red',
          fill: false
        },
        {
          label: 'Дистанция (км)',
          data: distances,
          borderColor: 'green',
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      },
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  });
}
