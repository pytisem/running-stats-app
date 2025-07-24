function displayRuns() {
  const runs = JSON.parse(localStorage.getItem('runs')) || [];
  const container = document.getElementById('runsList');
  if (runs.length === 0) {
    container.innerHTML = '<p>Тренировок пока нет.</p>';
    return;
  }

  let html = '<ul>';
  runs.forEach((run, i) => {
    html += `<li>
      <strong>${run.date} ${run.time}</strong> — ${run.distance} км, темп: ${run.pace}, скорость: ${run.speed} км/ч, пульс: ${run.heartRate}
    </li>`;
  });
  html += '</ul>';
  container.innerHTML = html;
}

displayRuns();
