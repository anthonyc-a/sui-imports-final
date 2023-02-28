import React from 'react';
import VinesOne from '../Illustrations/VinesOne';

import styles from './LoadingScreen.module.css';

const LoadingScreen = () => {
    return (
        <div className={styles.loadingScreen}>
            <h2><span>SUI</span> Wine Imports</h2>
            <h2 className={styles.loading}>Loading...</h2>
            <VinesOne />
        </div>
    );
};

export default LoadingScreen;
