import React from 'react'
import styles from "./footer.module.css"
export default function Footer({completedtodos,totaltodos}) {
  return (
    <div className={styles.stylefooter}>
      <span className={styles.list}>Completed Todos: {completedtodos}</span>
      <span className={styles.list}>Total Todos: {totaltodos}</span>
    </div>
  )
}
