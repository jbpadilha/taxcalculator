export const formatIncome = (value: number | '' | undefined) => {
    if (value === '' || value === undefined) {
        return '';
    }
    return new Intl.NumberFormat().format(value);
};