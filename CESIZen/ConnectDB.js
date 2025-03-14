const sql = require('mssql');

const config = {
  server: 'localhost',  
  database: 'CESIZen',
  options: {
    encrypt: true, 
    trustServerCertificate: true
  }
};

async function connectDB() {
  try {
    await sql.connect(config);
    console.log("Connecté à la base de données");
  } catch (err) {
    console.error('Erreur de connexion à la base de données:', err);
  }
}

connectDB();
