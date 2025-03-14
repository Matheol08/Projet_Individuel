const express = require('express');
const { connectDB } = require('./ConnectDB'); 

const app = express();

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  res.send('API fonctionne !');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur en fonctionnement sur le port ${PORT}`);
});
