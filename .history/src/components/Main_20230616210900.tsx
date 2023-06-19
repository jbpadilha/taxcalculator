import React from 'react';

const styles = {
    content: {
        marginTop: 20,
        minHeight: 200,
    },
    title: {
        margin: 'auto',
        marginTop: 20,
        width: 164,
        height: 28,
        fontFamily: 'Arial',
        fontSize: 24,
        color: '#000000',
        textDecoration: 'none solid rgb(0, 0, 0)',
    },
    contentInput: {
        marginTop: 20,
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
};

const Main = () => {

    return (
        <div style={styles.content}>
            <div style={styles.title}>Test Calculator</div>
            <div style={styles.content}>
                <div style={styles.contentInput}>
                    <div>
                        <label htmlFor='income' style={styles.titleInput}>Annual Income:</label>
                    </div>
                    <div>
                        <input style={styles.input} type="text" id="income" name="income" />
                    </div>
                </div>
                <div style={styles.contentInput}>
                    <label htmlFor='taxYear' style={styles.titleInput}>Tax Year:</label>
                    <input style={styles.input} type="text" id="taxYear" name="taxYear" />
                </div>
            </div>
        </div>
    );
}

export default Main;