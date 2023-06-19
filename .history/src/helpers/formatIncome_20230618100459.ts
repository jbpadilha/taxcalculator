export const formatIncome = (value: number) => {
    const locale = navigator.language;
    console.log('locale: ', locale);

    // Finding Currency
    const currencyFormatter = new Intl.NumberFormat(locale, { style: 'currency', currencyDisplay: 'symbol' });
    console.log('currencyFormatter: ', currencyFormatter);
    const parts = currencyFormatter.formatToParts(0);
    const currency = parts.find(part => part.type === 'currency')?.value || '';
    console.log('currency: ', currency)

    // return new Intl.NumberFormat(locale, { style: 'currency', currency: currency }).format(value || 0)
    return new Intl.NumberFormat().format(value);
};