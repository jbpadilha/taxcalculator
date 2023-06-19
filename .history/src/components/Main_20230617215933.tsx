import React from 'react';
import { years } from '../config/constants';

const styles = {
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
        textDecoration: 'none solid rgb(0, 0, 0)',
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
        textSecoration: 'none solid rgb(0, 0, 0)',
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
    },
};

const Main = () => {

    const calculate = () => {};

    return (
        <div style={styles.content}>
            <div style={styles.title}>Test Calculator</div>
            <div style={styles.marginTop}>
                <div style={styles.marginTop}>
                    <div>
                        <label htmlFor='income' style={styles.titleInput}>Annual Income:</label>
                    </div>
                    <div style={styles.marginTop}>
                        <input style={{...styles.input, ...styles.textInput}} type="text" id="income" name="income" />
                    </div>
                </div>
                <div style={styles.marginTop}>
                    <div>
                        <label htmlFor='taxYear' style={styles.titleInput}>Tax Year:</label>
                    </div>
                    <div style={styles.marginTop}>
                    <select onChange={()=>{}} style={{...styles.input, ...styles.selectInput}} id="taxYear" name="taxYear">
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
                    <button style={styles.button} onClick={calculate}>Calculate</button>
                </div>
            </div>
        </div>
    );
}

export default Main;