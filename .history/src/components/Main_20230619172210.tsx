import React, { useState } from 'react';
import { years } from '../config/constants';
import { NumericFormat } from 'react-number-format';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { formatIncome } from '../helpers/formatIncome';
import { taxCalculator } from '../helpers/taxCalculator';
import { TaxOwed } from '../models/TaxOwed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Results from './Results';
import ErrorComponent from './ErrorComponent';

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
};

const Main = () => {

    const [income, setIncome] = useState<number | ''>('');
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
                    <div style={styles.title} id="title">Test Calculator</div>
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
                                    <FontAwesomeIcon icon={faSpinner} spin data-testid="loading-spinner" />
                                ) : (
                                    'Calculate'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                {taxOwned && (
                    <Results income={income} year={year} taxOwned={taxOwned} />
                )}
            </div>
            {error && (
                <ErrorComponent error={error} />
            )}
        </div>
    );
}

export default Main;