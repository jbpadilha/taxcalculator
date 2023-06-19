import React from 'react';

const styles = {
    title: {
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
        <div>
            <span style={styles.title}>Test Calculator</span>
            
        </div>
    );
}

export default Main;