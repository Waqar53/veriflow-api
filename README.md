# Veriflow API (MVP)

Global Business Verification API wrapper.

## Setup

1.  `npm install`
2.  Create `.env` based on `.env.example`
3.  `npm run dev`

## Endpoints

### GET /v1/company/:country_code/:company_number

Example: `/v1/company/GB/01234567`

Returns:
```json
{
  "id": "01234567",
  "name": "Acme Ltd",
  "status": "active",
  "jurisdiction": "GB",
  "verified_address": "123 High St, London...",
  "incorporation_date": "2020-01-01",
  "provider": "companies_house"
}
```
