const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./config.db');

app.get('/', (req, res) => {
  console.log('root');
});

app.get('/movies', (req, res) => {
  console.log('/movies');
});

app.listen(PORT, () => {
  console.log(`Server on: http://localhost:${PORT}`);
});

//app.get(json)
