export const formatIncome = (value: number | '' | undefined) => {
    if (value === '' || value === undefined) {
        return '';
    }
    const locale = navigator.language;
    const formattedValue = new Intl.NumberFormat(locale, { style: "currency", currency: "CAD" }).format(value);
    return formattedValue;
};