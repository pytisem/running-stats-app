const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

let runs = [
  { id: 1, date: '2025-07-20', distance: 5, time: 30, pace: 6, speed: 10, heartRate: 150 },
  // можно добавить несколько тренировок для примера
];

// Получить список тренировок
app.get('/runs', (req, res) => {
  res.json(runs);
});

// Добавить тренировку
app.post('/runs', (req, res) => {
  const newRun = { id: Date.now(), ...req.body };
  runs.push(newRun);
  res.status(201).json(newRun);
});

// Удалить тренировку по id
app.delete('/runs/:id', (req, res) => {
  const id = Number(req.params.id);
  runs = runs.filter(run => run.id !== id);
  res.status(204).end();
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
