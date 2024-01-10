const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Dummy-Daten für Kundenverträge
const contracts = [
    { id: 1, client: 'Kunde A', budget: 5000, description: 'Beschreibung A', team: 'Entwicklungsteam 1', status: 'In Bearbeitung' },
    // Weitere Verträge...
];

// Routen für Kundenverträge
app.get('/contracts', (req, res) => {
    res.json(contracts);
});

app.post('/contracts', (req, res) => {
    const newContract = req.body;
    contracts.push(newContract);
    res.json(newContract);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

const { Client } = require('pg');

const dbClient = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'db',
    port: '5432',
    database: 'postgres',
});

// Verbindung zur Datenbank herstellen
dbClient.connect()
   .then(() => console.log('Connected to the database'))
   .catch(err => console.error('Error connecting to the database', err));

