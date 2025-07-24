function displayRuns() {
  const runs = JSON.parse(localStorage.getItem('runs')) || [];
  const container = document.getElementById('runsList');
  if (runs.length === 0) {
    container.innerHTML = '<p>Тренировок для удаления нет.</p>';
    return;
  }

  let html = '<ul>';
  runs.forEach((run, i) => {
    html += `<li>
      <strong>${run.date} ${run.time}</strong> — ${run.distance} км, темп: ${run.pace}, скорость: ${run.speed} км/ч, пульс: ${run.heartRate}
      <button data-index="${i}">Удалить</button>
    </li>`;
  });
  html += '</ul>';
  container.innerHTML = html;

  container.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function() {
      const index = parseInt(this.getAttribute('data-index'));
      if (confirm('Удалить эту тренировку?')) {
        runs.splice(index, 1);
        localStorage.setItem('runs', JSON.stringify(runs));
        displayRuns();
      }
    });
  });
}

displayRuns();
