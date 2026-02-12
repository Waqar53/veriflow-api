export interface CompanyVerification {
    id: string;
    name: string;
    status: string;
    jurisdiction: string;
    incorporation_date?: string;
    verified_address?: string;
    directors?: string[];
    provider: string;
    raw_data?: any;
}

export interface VerificationProvider {
    getCompany(id: string): Promise<CompanyVerification>;
}
