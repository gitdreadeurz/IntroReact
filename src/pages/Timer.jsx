import { useEffect, useState } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    // Si dans les dépendances de mon useEffect j'ai un []
    // alors je fait le code de la fonction une fois que ma page est chargé et une seule fois
    // useEffect(() => {
    //     console.log("Toto in useEffect");
    // }, [])

    // Si dans les dépendances de mon useEffect j'ai un [seconds]
    // alors je fait le code de la fonction une fois que ma page est chargé et une seule fois
    // useEffect(() => {
    //     console.log("seconds");
    // }, [seconds])

    // console.log("Toto hors useEffect");

    // Avoir un useEffect avec comme dependance isRunning
    // Et dans la fonction de useEffect une condition pour savoir si isRunning esr vrai et si c'est
    // vrai, je lance setInterval 
    useEffect(() => {
        let interval;
        if (isRunning == true) {
            interval = setInterval(() => {
                // On utilise (prev) => prev + 1 pour avoir toujours la valeur actuelle
                // setSeconds((Ici je recupere l'ancienne valeur) => et je lui ajoute 1)
                setSeconds((prev) => prev + 1)}, 1000);
            }
            return () => clearInterval(interval)
    }, [isRunning])
    
    return <>
        {/* Converti les secondes en mm:ss */}
        <h2>{new Date(seconds * 1000).toISOString().substring(14).substring(0,5)}</h2>
        <h2>{String(Math.floor(seconds/60)).padStart(2,0)} : {String(seconds%60).padStart(2,0)}</h2>
        {/* disabled permet de désactiver le bouton */}
        <button onClick={() => setIsRunning(true)} disabled={isRunning} >Démarrer</button>
        <button onClick={() => setIsRunning(false)} disabled={!isRunning}>Arrêter</button>
        <button onClick={() => {setIsRunning(false), setSeconds(0)}}>Réinitialiser</button>
    </>
}

export default Timer;