import React from 'react';

const styles = {
    marginTop: {
        marginTop: 20,
    },
    errorContent: {
        paddingLeft: 50,
    },
    error: {
        fontSize: 16,
        color: 'darkred',
        fontWeight: 'bold'
    },
};

const ErrorComponent = ({ error }: { error: string}) => (
    <div style={{...styles.marginTop, ...styles.errorContent}}>
        <span style={styles.error}>{error}</span>
    </div>
);

export default ErrorComponent;