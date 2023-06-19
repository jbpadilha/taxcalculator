import { TaxBrackets } from '../models/TaxBrackets';
import { TaxOwed } from '../models/TaxOwed';
import { fetchTaxRates } from '../server/GenericServer';
import { formatIncome } from './formatIncome';

export const fetchTaxAsync = async(year: number): Promise<TaxBrackets[]> => {
    try {
        const response = await fetchTaxRates(year);
        const taxBrackets: TaxBrackets[] = response.data.tax_brackets;
        return taxBrackets;
    } catch(error: any) {
        throw error; // Throw the error to be caught by the caller
    }
};

const getSalaryRange = (taxBracket: TaxBrackets) => {
    const { min, max } = taxBracket;
    const salary = max ? `${formatIncome(min)} - ${formatIncome(max)}` : `${formatIncome(min)}+`;
    return salary;
};

export const taxCalculator = async (income: number, year: number): Promise<TaxOwed[]>  => {
    try {
        // Fetch tax brackets
        const taxBrackets: TaxBrackets[] = await fetchTaxAsync(year);
        let remainingIncome = income;
        // Tax Calculation
        const taxOwed: TaxOwed[] = taxBrackets.map((taxBracket: TaxBrackets, index) => {
            const { min, max, rate } = taxBracket;
            const taxableIncome = Math.min(max - min + 1, remainingIncome);
            const taxAmount = taxableIncome * rate;
            remainingIncome -= taxableIncome;
            const newTax: TaxOwed = {
                salary: getSalaryRange(taxBracket),
                rate: Math.round(taxBracket.rate * 100),
                total: isNaN(taxAmount) ? 0 : taxAmount,
            };
            return newTax;
        });
        return taxOwed;
      } catch (error: any) {
        throw error; // Throw the error to be caught by the caller
      }
}