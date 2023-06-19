import { TaxBrackets } from '../models/TaxBrackets';
import { TaxOwed } from '../models/TaxOwed';
import { fetchTaxRates } from '../server/GenericServer';

const fetchTaxAsync = async(year: number) => {
    const response = await fetchTaxRates(year);
    const taxBrakets: TaxBrackets[] = response.data;
    console.log('taxBrakets: ', taxBrakets);
    return taxBrakets;
};

export const taxCalculator = (income: number, year: number): TaxOwed[] => {
    const taxOwed: TaxOwed[] | never = [];

    // Fetch
    const taxBrakets = fetchTaxAsync(year);

    // Calculate
    
    return taxOwed;
}