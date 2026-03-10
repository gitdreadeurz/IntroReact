import { useEffect, useState } from "react"

const Guess = () => {
    // Etat try, SetTry
    const [essai, setEssai] = useState(0);
    // Nombre aléatoire = Math.random()
    const [nombreAleatoire, setNombreAleatoire] = useState (Math.floor(Math.random() * 100) + 1);
    const [tentatives, setTentatives] = useState(0);
    // Empeche le rafraichissement de la page
    const handleSubmit = (e) => {
        e.preventDefault();
        // Sert au débuggage
        // console.log("essai :", essai);
        // console.log("Nombre aléatoire :", nombreAleatoire);
        setTentatives(tentatives + 1)
        if (essai == nombreAleatoire) {
            alert ("Gagné !!")
            setNombreAleatoire(Math.floor(Math.random() * 100) + 1);
            setTentatives(0);
        } else if (essai > nombreAleatoire) {
            alert ("Trop grand !")
        } else {
            alert ("Trop petit !")
        }
    }

    // Permet de générer ce code qu'une seule fois
    // useEffect(() => {
    //     // const nombreAleatoire
    // const nombreAleatoire = Math.floor(Math.random() * 100) + 1
    // console.log(nombreAleatoire);
    // }, [])

    return <>
    {/* form avec un input, onSubmit */}
        <form style={{ display : "flex", flexDirection : "column" }} onSubmit={handleSubmit}>
            <input  style={{ width : "200px", fontSize : "1rem" }} type="number" min={0} max={100} step={1}
            // La valeur de mon input est celui d'essai
            // essai != 0 && essai equivaut a
            // if (essai != 0){
            // return essai  
            // }
            value={essai != 0 && essai} onChange={(e) => {setEssai(e.target.value)}}
            />
            <input style={{width : "207px", fontSize : "1rem"}} 
            type="submit" value="Tentez-votre chance !"
            />
        </form>
        <h3>Tentatives : {tentatives}</h3>
    </>
}

export default Guess;