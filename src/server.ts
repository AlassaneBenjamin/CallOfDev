import express from 'express';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Dummy-Daten für Kundenverträge
const contracts = [
    { id: 1, client: 'Kunde A', budget: 5000, description: 'Beschreibung A', team: 'Entwicklungsteam 1', status: 'In Bearbeitung' },
    // Weitere Verträge...
];

app.get('/test', async (req, res) => {
    const user = await prisma.user.create({
        data: {
            name: 'Alice',
            email: 'alice@prisma.io',
        },
    })
    console.log(user)
    res.json(contracts);
});

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

