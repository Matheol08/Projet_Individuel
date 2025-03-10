import axios from 'axios';

axios.get('http://192.168.1.23:5000/api/test')  // Remplace par l'IP de ton PC
  .then(response => {
    console.log(response.data);  // Affiche la réponse du backend dans la console
  })
  .catch(error => {
    console.error("Il y a eu une erreur avec la connexion API : ", error);
  });
