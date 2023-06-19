export const formatIncome = (value: number) => {
    const locale = navigator.language;

    // Finding Currency
    const currencyFormatter = new Intl.NumberFormat(locale, { style: 'currency', currencyDisplay: 'symbol' });
    const parts = currencyFormatter.formatToParts(0);
    const currency = parts.find(part => part.type === 'currency')?.value || '';

    console.log(currency);

    return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(value || 0)
};