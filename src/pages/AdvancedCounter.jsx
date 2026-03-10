import { useState } from "react";

function AdvancedCounter() {
    // Etat count avec une valeur par defaut à 0
    const [count, setCount] = useState (0);
    // Etat history avec une valeur par défaut tableau vide []
    const [history, setHistory] = useState ([]);
    const [clic, setClic] = useState(0);


    return <>
    <h3>Nombre de clics : {clic}</h3>
    {/* h3 qui affiche count */}
    <h3>{count}</h3>
    {/* Bouton + 1 -> Lorsque j'appuie sur ce bouton, j'ajoute 1 a cout et je push cette valeur dans history */}
    <button onClick={() => {
        setCount(count + 1)
        setHistory([...history, count])
        setClic(clic + 1)
    }}>+ 1</button>
    {/* Bouton - 1 -> Lorsque j'appuie sur ce bouton, je retire 1 a cout et je push cette valeur dans history */}
    <button onClick={() => {
        // if (count - 1 < 0) {
        //     return;
        // }
        setCount(count - 1);
        setHistory([...history, count]);
        setClic(clic + 1)
    }}>- 1</button>
    <button onClick={() => {
        setCount(0)
        // setHistory([]);
        setHistory([...history, count]);
        setClic(clic + 1)
    }}>Reset</button>
    {/* Cree un ul */}
    <ul style={{listStyle : "none"}}>
        {history.map((element) => {
            return <li>{element}</li>
        })}
    </ul>
    {/* Faire un .map sur history et pour chaque element, afficher un li */}
    {/* history.map((element) => {
        }) 
    */}
    <button onClick={() => {
        if (history.length > 0) {
              setCount(history.pop())
        }
    }}>Annuler dernier</button>
</>
}

export default AdvancedCounter;