import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

// Main Developer Portal
app.get('/', (req: Request, res: Response) => {
    res.sendFile(__dirname + '/../public/index.html');
});

import { CompaniesHouseProvider } from './providers/CompaniesHouse';

// ... (existing helper function if needed, or instantiate provider here)

app.get('/v1/company/GB/:company_number', async (req: Request, res: Response) => {
    const { company_number } = req.params;
    const apiKey = process.env.COMPANIES_HOUSE_API_KEY || 'mock'; // Default to mock for testing

    if (!apiKey) {
        return res.status(500).json({ error: 'Configuration error: API key missing' });
    }

    try {
        const provider = new CompaniesHouseProvider(apiKey);
        const result = await provider.getCompany(company_number as string);
        res.json(result);
    } catch (error: any) {
        res.status(404).json({ error: error.message || 'Company not found' });
    }
});

// ... (existing imports)
import { USProvider } from './providers/USProvider';

app.get('/v1/company/US/:company_number', async (req: Request, res: Response) => {
    const { company_number } = req.params;
    try {
        const provider = new USProvider();
        const result = await provider.getCompany(company_number as string);
        res.json(result);
    } catch (error: any) {
        res.status(404).json({ error: error.message || 'Company not found' });
    }
});

app.listen(port, () => {
    // ...
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
