const express = require('express');
const app = express();

// Exemple de route de test
app.get('/api/test', (req, res) => {
  res.json({ message: "Connexion entre backend et frontend réussie!" });
});

// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur backend lancé sur http://localhost:${PORT}`);
});
