import React, { useEffect, useState } from "react"

import styles from './Scrollbar.module.css';

const Scrollbar = () => {
  const [scrollTop, setScrollTop] = useState(0)

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrolled = (winScroll / height) * 100

    setScrollTop(scrolled)
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onscroll)
  }, [])

  return (
    <div className={styles.scrollbar}>
      <div
        className={styles.scrollbarInner}
        style={{ width: `${scrollTop}%` }}
      ></div>
    </div>
  )
}

export default Scrollbar