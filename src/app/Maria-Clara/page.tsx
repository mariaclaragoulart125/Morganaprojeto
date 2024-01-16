'use client'

import styles from './page.module.css'

export default function MariaPage() {
const classes = [styles.red, styles.pink, styles.aqua]
const random = Math.floor(Math.random() * classes.length)
    const mudarCor = () => {
        document.getElementById("name")?.classList.add(styles.MariaPageColorName2)
    }
    return (
        <div>
            <h1 onClick={() => mudarCor()} id="name" className={styles.MariaPageColorName}>MariaPage</h1>
        </div>

    )
}
