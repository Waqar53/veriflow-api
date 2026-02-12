# Veriflow API 🌍
**The Unified Global Business Verification Standard.**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fveriflow-api)
[![Status](https://img.shields.io/badge/Status-Live-success)]()
[![Uptime](https://img.shields.io/badge/Uptime-99.9%25-green)]()

---

## 🚀 The Pitch
**Problem:**
Building a B2B product? You need to verify your customers (KYB).
*   Connecting to 100+ government registries (Companies House, Sirene, SEC) is a nightmare.
*   Data formats are fragmented (XML, SOAP, JSON).
*   Enterprise solutions cost **$20k+/year** and take weeks to integrate.

**Solution:**
**Veriflow.** One API Key. Global Coverage.
We standardize global business data into a single, beautiful JSON format.
*   ✅ **Instant Verification:** Check company status, directors, and address in <200ms.
*   ✅ **Global Reach:** UK, US, EU, and more out of the box.
*   ✅ **Developer First:** No sales calls. Just an API key.

---

## ⚡️ Live Demo
Test the API instantly on our Developer Portal:
👉 **[Launch Developer Portal](https://veriflow-api.vercel.app)**

---

## 🛠 Integration Guide

### Base URL
`https://veriflow-api.vercel.app/v1`

### Authentication
(Optional for Tier 1)
Add your API key to the header: `Authorization: Bearer YOUR_API_KEY`

### 1. Verify a UK Company (`/company/GB/:id`)

**cURL**
```bash
curl -X GET "https://veriflow-api.vercel.app/v1/company/GB/06400186"
```

**Node.js (Axios)**
```javascript
const axios = require('axios');

async function verifyBusiness() {
  const { data } = await axios.get('https://veriflow-api.vercel.app/v1/company/GB/06400186');
  console.log(data);
}
```

**Python**
```python
import requests

response = requests.get("https://veriflow-api.vercel.app/v1/company/GB/06400186")
print(response.json())
```

**Response Object**
```json
{
  "id": "06400186",
  "name": "MONZO BANK LIMITED",
  "status": "active",
  "jurisdiction": "GB",
  "verified_address": "Broadwalk House, 5 Appold Street, London...",
  "incorporation_date": "2007-10-23",
  "provider": "companies_house"
}
```

---

## 💰 Pricing Plans
Simple, pay-as-you-go pricing for modern startups.

| Plan | Price | Monthly Requests | Features |
| :--- | :--- | :--- | :--- |
| **Hobby** | **Free** | 50 | Sandbox Access |
| **Startup** | **$49/mo** | 1,000 | Live Data, Email Support |
| **Growth** | **$199/mo** | 5,000 | Priority Support, SLA |
| **Enterprise**| **Custom** | Unlimited | Dedicated Account Manager |

👉 **[Subscribe & Get API Key](https://rzp.io/rzp/gIr8CnwX)**

---

## ❓ FAQ

**Q: Is the data accurate?**
A: Yes. We source data *directly* from official government registries (e.g., Companies House UK, SEC US) in real-time.

**Q: Do you cache data?**
A: Yes, for performance. We cache results for 24 hours to ensure <200ms verify times.

**Q: Can I use this for KYC/AML?**
A: Veriflow is a data provider. While we provide the official data needed for KYB checks, you should consult your compliance officer for specific regulatory requirements.

---

## 📝 License
Copyright © 2026 Veriflow Inc. All rights reserved.
