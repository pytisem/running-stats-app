document.getElementById('addForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const data = {
    date: this.date.value,
    time: this.time.value,
    distance: parseFloat(this.distance.value),
    pace: this.pace.value,
    speed: parseFloat(this.speed.value),
    heartRate: parseInt(this.heartRate.value)
  };

  let runs = JSON.parse(localStorage.getItem('runs')) || [];
  runs.push(data);
  localStorage.setItem('runs', JSON.stringify(runs));

  alert('Тренировка добавлена!');
  this.reset();
});
