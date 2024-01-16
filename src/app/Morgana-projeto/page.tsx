'use client';
import { useState } from "react";
export default function Morganaprojeto() {
const [numeroSecreto, setNumeroSecreto] = useState(Math.round(Math.random() * 100));
const [chute, setChute] = useState(0);
const [feedback, setFeedback] = useState(NaN);

return (
<>
<input type= "number" value={chute} onChange={(event) => setChute(parseInt(event.target.value))}/>
<button onClick={() => setFeedback(chute)}> Numero aleatório </button>
{
numeroSecreto > feedback ? <p>digite um número maior</p> :
numeroSecreto < feedback ? <p>digite um número menor</p> :
numeroSecreto === feedback ? <p> acertou o numero</p> : null
}
</>
)  
}