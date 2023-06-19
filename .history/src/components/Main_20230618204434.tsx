import React, { useState } from 'react';
import { years } from '../config/constants';
import { NumericFormat } from 'react-number-format';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { formatIncome } from '../helpers/formatIncome';
import { taxCalculator } from '../helpers/taxCalculator';
import { TaxOwed } from '../models/TaxOwed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const styles = {
    container: {
        display: 'flex',
    },
    content: {
        marginTop: 20,
        minHeight: 200,
        paddingLeft: 50,
        width: 250
    },
    contentResult: {
        flex: 1,
        margin: '76px 20px 0px 62px',
        maxWidth: 'fit-content'
    },
    marginTop: {
        marginTop: 20,
    },
    title: {
        marginTop: 20,
        paddingBottom: 20,
        fontFamily: 'Roboto',
        fontSize: 30,
        color: '#000000',
        textDecoration: 'none solid rgb(0, 0, 0)'
    },
    description: {

    },
    contentButton: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'flex-end'
    },
    titleInput: {
        paddingTop: 10,
        width: 111,
        height: 18,
        fontSize: 16,
        color: '#000000',
        textSecoration: 'none solid rgb(0, 0, 0)'
    },
    input: {
        padding: '0px 8px',
        border: '1px solid #3598de',
        borderRadius: 8,
        backgroundColor: '#ffffff',
        backgroundSize: 'cover',
        fontSize: 14,
        color: '#3598de',
        textDecoration: 'none solid rgb(53, 152, 222)'
    },
    textInput: {
        width: 233,
        height: 22,
    },
    selectInput: {
        width: '100%',
        height: 27,
    },
    button: {
        width: 121,
        height: 40,
        border: 0,
        borderRadius: 10,
        backgroundColor: '#3598de',
        backgroundSize: 'cover',
        fontSize: 16,
        color: '#ffffff',
        textDecoration: 'none solid rgb(255, 255, 255)',
        cursor: 'pointer',
        ':hover': {
            backgroundColor: '#38748C',
        }
    },
    errorContent: {
        paddingLeft: 50,
    },
    error: {
        fontSize: 16,
        color: 'darkred',
        fontWeight: 'bold'
    },
    titleResukt: {
        marginTop: 20,
        paddingBottom: 20,
        fontFamily: 'Roboto',
        fontSize: 25,
        color: '#000000',
        textDecoration: 'none solid rgb(0, 0, 0)'
    },
    table: {
        border: '1px solid #000',
        width: '100%'
    },
    row: {
        display: 'flex',
        borderBottom: '1px solid #000',
    },
    heading: {
        flex: 1,
        padding: '8px',
        fontWeight: 'bold',
        backgroundColor: '#f2f2f2'
    },
    cell: {
        flex: 1,
        padding: '8px',
    },
    verticalLine: {
        width: 1,
        backgroundColor: '#000',
        margin: 4
    }
};

const Main = () => {

    const [income, setIncome] = useState<number | ''>();
    const [year, setYear] = useState('');
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [taxOwned, setTaxOwned] = useState<TaxOwed[]>();

    const handleIncome = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const parsedNumber = Number(inputValue.replace(/[^0-9\\.-]+/g,""));
        setIncome(parsedNumber.valueOf());
    };

    const handleYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedYear = event.target.value;
        setYear(selectedYear);
    }

    const calculate = async () => {
        try {
            setIsLoading(true)
            const taxOwned: TaxOwed[] = await taxCalculator(Number(income), Number(year));
            console.log('taxOwned:', taxOwned);
            setTaxOwned(taxOwned);
            setError(undefined);
        }catch(error: any) {
            setError(error);
            setTaxOwned(undefined);
        }
        setIsLoading(false);
    };
    

    return (
        <div>
            <div style={styles.container}>
                <div style={styles.content}>
                    <div style={styles.title}>Test Calculator</div>
                    <div style={styles.marginTop}>
                        <div style={styles.marginTop}>
                            <div>
                                <label htmlFor='income' style={styles.titleInput}>Annual Salary:</label>
                            </div>
                            <div style={styles.marginTop}>
                                <NumericFormat 
                                    style={{...styles.input, ...styles.textInput}} 
                                    thousandSeparator="," 
                                    decimalSeparator="." 
                                    prefix="$" 
                                    value={formatIncome(income)} 
                                    onChange={handleIncome} 
                                    id='income'
                                    placeholder='$'
                                    defaultValue={formatIncome(income)}
                                />
                            </div>
                        </div>
                        <div style={styles.marginTop}>
                            <div>
                                <label htmlFor='taxYear' style={styles.titleInput}>Tax Year:</label>
                            </div>
                            <div style={styles.marginTop}>
                            <select onChange={handleYear} style={{...styles.input, ...styles.selectInput}} id="taxYear" name="taxYear">
                                <option>Please choose the year</option>
                                {Array.from(years.entries()).map((entry) => {
                                    const [key, value ] = entry;
                                    return (<option key={key} >
                                        {value}
                                    </option>);
                                })}
                            </select>
                            </div>
                        </div>
                        <div style={styles.contentButton}>
                            <button style={styles.button} onClick={calculate} disabled={isLoading}>
                                {isLoading ? (
                                    <FontAwesomeIcon icon={faSpinner} spin />
                                ) : (
                                    'Calculate'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {taxOwned && (
                    <div style={styles.contentResult}>
                        <div style={styles.titleResukt}>Marginal Tax Rate for an income of {income} for the year of {year}:</div>
                        <div style={styles.table}>
                            <div style={styles.row}>
                                <div style={styles.heading}>Salary</div>
                                <div style={styles.verticalLine}></div>
                                <div style={styles.heading}>Total Taxes</div>
                            </div>
                            {taxOwned.map((tax: TaxOwed) => (
                            <div style={styles.row}>
                                <div style={styles.cell}>{tax.salary}</div>
                                <div style={styles.verticalLine}></div>
                                <div style={styles.cell}>{tax.salary}</div>
                            </div>
                            ))}
                            <div style={styles.row}>
                                <div style={styles.cell}>Total</div>
                                <div style={styles.verticalLine}></div>
                                <div style={styles.heading}>{taxOwned.reduce((sum, tax) => sum + tax.total, 0)}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            {error && (
                <div style={{...styles.marginTop, ...styles.errorContent}}>
                    <span style={styles.error}>{error}</span>
                </div>
            )}
        </div>
    );
}

export default Main;