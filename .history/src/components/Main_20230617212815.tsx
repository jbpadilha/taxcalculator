import React from 'react';
import { years } from '../config/constants';

const styles = {
    content: {
        marginTop: 20,
        minHeight: 200,
        paddingLeft: 50,
    },
    title: {
        marginTop: 20,
        marginBottom: 20,
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#000000',
        textDecoration: 'none solid rgb(0, 0, 0)',
    },
    contentInput: {
        marginTop: 20,
    },
    marginInput: {
        marginTop: 10,
    },
    titleInput: {
        paddingTop: 10,
        width: 111,
        height: 18,
        fontFamily: 'Arial',
        fontSize: 16,
        color: '#000000',
        textSecoration: 'none solid rgb(0, 0, 0)',
    },
    input: {
        width: 233,
        height: 22,
        padding: '0px 8px',
        border: '1px solid #3598de',
        borderRadius: 8,
        backgroundColor: '#ffffff',
        backgroundSize: 'cover',
        fontFamily: 'Arial',
        fontSize: 14,
        color: '#3598de',
        textDecoration: 'none solid rgb(53, 152, 222)'
    },
    button: {
        width: 121,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#3598de',
        backgroundSize: 'cover',
        fontFamily: 'Arial',
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
            <div style={styles.content}>
                <div style={styles.contentInput}>
                    <div>
                        <label htmlFor='income' style={styles.titleInput}>Annual Income:</label>
                    </div>
                    <div style={styles.marginInput}>
                        <input style={styles.input} type="text" id="income" name="income" />
                    </div>
                </div>
                <div style={styles.contentInput}>
                    <div>
                        <label htmlFor='taxYear' style={styles.titleInput}>Tax Year:</label>
                    </div>
                    <div style={styles.marginInput}>
                    <select onChange={()=>{}} style={styles.input} id="taxYear" name="taxYear">
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
                <div style={styles.contentInput}>
                    <button style={styles.button} onClick={calculate}>Calculate</button>
                </div>
            </div>
        </div>
    );
}

export default Main;