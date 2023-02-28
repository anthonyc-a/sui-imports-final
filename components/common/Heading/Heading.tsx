import React from 'react'
import styles from './Heading.module.css';

const Heading = ({text}:any) => {
  return (
    <div className={styles.heading}>
      <span>{text}</span>
    </div>
  )
}

export default Heading