"use client"

import { useState } from "react";
import styles from "./page.module.css"

export default function CounterPage() {
    const [count, setCount] = useState(0);
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [number3, setNumber3] = useState(0);
    const [number4, setNumber4] = useState(0);

    return (
        <>
            {
                count == 0 ? <p>{count}</p> : count > 0 ? <p className={styles.green}>{count}</p> : <p className={styles.red}>{count}</p>
            }


            <button onClick={() => setCount(count + 1)} className={styles.inputSomar}>Somar</button>
            <button onClick={() => setCount(count - 1)} className={styles.inputSubtrair}>Subtrair</button>
            <button onClick={() => setCount(count * 2)} className={styles.inputMultiplicar}>Multiplicar</button>
            <button onClick={() => setCount(count / 2)} className={styles.inputDividir}>Dividir</button>
            <div>
                <div className={styles.inputSomar}>
                    <input type="number" value={number1} onChange={(event) => setNumber1(parseInt(event.target.value))} />
                    +<input type="number" value={number2} onChange={(event) => setNumber2(parseInt(event.target.value))} />
                    {number1 + number2}
                </div>
                <div className={styles.inputSubtrair}>
                    <input type="number" value={number3} onChange={(event) => setNumber3(parseInt(event.target.value))} />
                    -<input type="number" value={number4} onChange={(event) => setNumber4(parseInt(event.target.value))} />
                    {number3 - number4}
                </div>
            </div>
        </>


    )
}

