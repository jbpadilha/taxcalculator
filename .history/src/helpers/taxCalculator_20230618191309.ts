import { TaxBrackets } from '../models/TaxBrackets';
import { TaxOwed } from '../models/TaxOwed';
import { fetchTaxRates } from '../server/GenericServer';

const fetchTaxAsync = async(year: number): Promise<TaxBrackets[]> => {
    try {
        const response = await fetchTaxRates(year);
        const taxBrackets: TaxBrackets[] = response.data;
        return taxBrackets;
    } catch(error: any) {
        console.log('Error:', error);
        throw error; // Throw the error to be caught by the caller
    }
};

export const taxCalculator = async (income: number, year: number): Promise<TaxOwed[]>  => {
    try {
        // Fetch tax brackets
        const taxBrackets: TaxBrackets[] = await fetchTaxAsync(year);
    
        // Tax Calculation
        const taxOwed: TaxOwed[] = taxBrackets.map((taxBracket: TaxBrackets) => {
            const newTax: TaxOwed = {
                salary: taxBracket.min,
                total: taxBracket.max * taxBracket.rate,
            };
            return newTax;
        });
    
        return taxOwed;
      } catch (error) {
        console.log('Error:', error);
        throw error; // Throw the error to be caught by the caller
      }
}