import React from 'react'

import styles from './Contact.module.css';

const Contact = ({ contactOpen, setContactOpen }: any) => {
    return (
        <div className={styles.modal}>
            <div className={styles.modalBg} onClick={() => {
                setContactOpen(false)
            }} />
            <div className={styles.modalInner}>
                <div className={styles.closeBtn} onClick={() => {
                    setContactOpen(false)
                }}>Close</div>
            </div>

        </div>
    )
}

export default Contact