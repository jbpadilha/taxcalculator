export const formatIncome = (value: number | '' | undefined) => {
    if (value === '' || value === undefined) {
        return '';
    }
    const locale = navigator.language;
    console.log('value:', value);
    const formattedValue = new Intl.NumberFormat(locale).format(value);
    console.log('formattedValue:', formattedValue);
    return formattedValue;
};