'use client';
import styles from "./page.module.css"
import { useState } from "react";

export default function InputPage() {
    const [text, setText] = useState('');

    return (
        <div>
            <h1>
                input
            </h1>
            <input className={styles.inputStyles} type="text" value={text} onChange={(event) => setText(event.target.value)} />
            <div>
                {text}
            </div>
        </div>
    )
}