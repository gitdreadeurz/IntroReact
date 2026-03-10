import { useState } from "react";

function Compteur() {
    const [compteur,setCompteur] = useState(0);
    const couleurTexte = compteur >= 10 ? "darkorange" : "white";

    return <>
        <p style={{color : couleurTexte}}>{compteur}</p>
        <div>
            <button onClick={() => {
                setCompteur(compteur + 1)}}>Ajouter 1</button>
            <button onClick={() => {
                if (compteur - 1 < 0) {
                    return;
                }
                setCompteur(compteur-1)
                }}>Retirer 1</button>
            <button onClick={() => {setCompteur(compteur + 10)}}>Ajouter 10</button>
            <button onClick={() => {
                if (compteur - 10 < 0){
                    return;
                }
                setCompteur(compteur -10)
                }}>Retirer 10</button>
            <button onClick={() => {setCompteur(0)}}>Reset</button>
        </div>
    </>
}


export default Compteur;