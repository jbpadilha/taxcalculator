import React from 'react';

const styles = {
    content: {
        marginTop: 20,
    },
    title: {
        marginTop: 20,
        width: 164,
        height: 28,
        fontFamily: 'Arial',
        fontSize: 24,
        color: '#000000',
        textDecoration: 'none solid rgb(0, 0, 0)',
    }
};

const Main = () => {

    return (
        <div style={styles.content}>
            <span style={styles.title}>Test Calculator</span>
            
        </div>
    );
}

export default Main;