import axios from "axios"

export async function createLead(
    leadEmail: string,
    leadName: string,
    leadPhone: string,
    leadType: string,
    leadProduct: string,
    leadBillAvg: number,
    leadBillAvgAmount: number,
    leadInvestmentAvgAmount: number
) {
    const crmUrl: string = process.env.CRM_API_URL || ''
    const crmToken = process.env.CRM_API_TOKEN

    let crmPayload = {
        "email": leadEmail,
        "fields": {
            "name": leadName,
            "phone": leadPhone,
            "lead_type": leadType,
            "product_of_interest": leadProduct,
            "bill_avg": leadBillAvg,
            "bill_avg_amount": leadBillAvgAmount,
            "investment_avg_amount": leadInvestmentAvgAmount
        }
    }

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authentication': `Bearer ${crmToken}`
        }
    };

    let response = await axios.post(crmUrl, crmPayload, config);

    if (response.status === 200 || response.status === 201) {
        return true;
    }

    return false;
}