import axios from 'axios';
import { CompanyVerification, VerificationProvider } from '../types';

export class CompaniesHouseProvider implements VerificationProvider {
    private apiKey: string;
    private baseUrl = 'https://api.company-information.service.gov.uk';

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async getCompany(companyNumber: string): Promise<CompanyVerification> {
        try {
            // Companies House uses Basic Auth with the API key as the username
            const token = Buffer.from(`${this.apiKey}:`).toString('base64');

            // MOCK MODE: If API key is 'mock', return sample data
            if (this.apiKey === 'mock') {
                if (companyNumber === 'invalid_id' || companyNumber === '404') {
                    throw new Error('Company not found');
                }
                return {
                    id: companyNumber,
                    name: "MOCK UK LTD (Test)",
                    status: "active",
                    jurisdiction: "GB",
                    incorporation_date: "2023-01-01",
                    verified_address: "10 Downing Street, London, SW1A 2AA",
                    provider: "companies_house_mock"
                };
            }

            const response = await axios.get(`${this.baseUrl}/company/${companyNumber}`, {
                headers: {
                    'Authorization': `Basic ${token}`
                }
            });

            const data = response.data;

            // Map standard fields
            const verification: CompanyVerification = {
                id: data.company_number,
                name: data.company_name,
                status: data.company_status,
                jurisdiction: 'GB',
                incorporation_date: data.date_of_creation,
                verified_address: this.formatAddress(data.registered_office_address),
                provider: 'companies_house',
                // raw_data: data // Optional: Include raw data if needed
            };

            return verification;
        } catch (error: any) {
            console.error('Companies House API Error:', error.response?.data || error.message);
            throw new Error('Failed to fetch company data from Companies House');
        }
    }

    private formatAddress(address: any): string {
        if (!address) return '';
        const parts = [
            address.premises,
            address.address_line_1,
            address.address_line_2,
            address.locality,
            address.region,
            address.postal_code,
            address.country
        ];
        return parts.filter(Boolean).join(', ');
    }
}
