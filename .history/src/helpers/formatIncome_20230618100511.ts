export const formatIncome = (value: number) => {
    return new Intl.NumberFormat().format(value);
};