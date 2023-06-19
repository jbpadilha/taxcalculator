import ActionBase from './ControllerBase';


const actionBase = ActionBase.getInstance();

export const fetchTaxRates = async (year: number): Promise<any> => {
    const result = await actionBase.get(`/tax-year/${year}`);
    if (result) {
        return result;
    }
    return null;
};
