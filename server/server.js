import express from 'express'
import { readFileSync } from 'fs'

const app = express()
const PORT = 3000

app.get('/api/tableData', (req, res) => {
  const data = JSON.parse(readFileSync('data/tableData.json', 'utf-8'));
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
