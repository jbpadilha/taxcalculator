export const formatIncome = (value: number | '' | undefined) => {
    if (value === '' || value === undefined) {
        return '';
    }
    console.log('value:', value);
    const formattedValue = new Intl.NumberFormat().format(value);
    console.log('formattedValue:', formattedValue);
    return formattedValue;
};