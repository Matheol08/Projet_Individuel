import axios from 'axios';

const API_URL = "http://localhost:3000"; // Mets l'IP de ton PC si tu testes sur un téléphone

export const getTest = async () => {
    try {
        const response = await axios.get(`${API_URL}/test`);
        console.log("Réponse du serveur :", response.data);
    } catch (error) {
        console.error("Erreur lors de la requête :", error);
    }
};
