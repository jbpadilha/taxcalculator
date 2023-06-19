import React from 'react';
import { formatIncome } from '../helpers/formatIncome';
import { TaxOwed } from '../models/TaxOwed';

const styles = {
    contentResult: {
        flex: 1,
        margin: '28px 20px 0px 62px',
        maxWidth: 'fit-content'
    },
    titleResult: {
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
    totalCell: {
        flex: 1,
        padding: '8px',
        backgroundColor: '#f2f2f2',
    },
    verticalLine: {
        width: 1,
        backgroundColor: '#000',
        margin: 4
    }
};

type ResultProps = {
    income: number;
    year: number;
    taxOwned: TaxOwed;
};

const Results = ({income, year, taxOwned}: ResultProps) => {

    return (
        <div style={styles.contentResult}>
                        <div style={styles.titleResult} data-testid="titleResult">Marginal Tax Rate for yearly income of {formatIncome(income)} for the year of {year}:</div>
                        <div style={styles.table}>
                            <div style={styles.row}>
                                <div style={styles.heading}>Salary</div>
                                <div style={styles.verticalLine}></div>
                                <div style={styles.heading}>Rate</div>
                                <div style={styles.verticalLine}></div>
                                <div style={styles.heading}>Total Taxes</div>
                            </div>
                            {taxOwned.map((tax: TaxOwed) => (
                            <div style={styles.row} key={String(tax.salary)}>
                                <div style={styles.cell}>{tax.salary}</div>
                                <div style={styles.verticalLine}></div>
                                <div style={styles.cell}>{tax.rate}%</div>
                                <div style={styles.verticalLine}></div>
                                <div style={styles.cell}>{formatIncome(tax.total)}</div>
                            </div>
                            ))}
                            <div style={styles.row}>
                                <div style={styles.heading}></div>
                                <div style={styles.verticalLine}></div>
                                <div style={styles.heading}>Total</div>
                                <div style={styles.verticalLine}></div>
                                <div style={styles.totalCell}>{formatIncome(taxOwned.reduce((sum, tax) => sum + tax.total, 0))}</div>
                            </div>
                        </div>
                    </div>
    );
};

export default Results;