import { useState } from "react"

const Convertisseur = () => {
    // Etat pour stocker la valeur en celsisus
    const [celsius, setCelsius] = useState(0);
    // Etat pour stocker la valeur en Fahrenheit
    const [farheneit, setFahrenheit] = useState(32);

    return <>
        <form>
        {/* Input ou tu rentre la valeur en celsius */}
        <label htmlFor="celcius">C °</label>
        <input id="celcius" type="number"
        value={celsius}
        onChange={(e) => {
            // On stocke la valeur et on la remet dans Fahreinet
            setCelsius(e.target.value);
            setFahrenheit(e.target.value * (9/5) + 32);
        }}
        />
        {/* Des que l'input Celsius change tu met la valeur dans l'etat celsius et tu l'a
        converti pour l'état Fahrenheit */}
        {/* Input ou tu rentre la valeur en Fahrenheit */}
        <label htmlFor="Fahrenheit">F°</label>
        <input type="number" 
        value={farheneit}
        onChange={(e) => {
            setFahrenheit(e.target.value);
            setCelsius((e.target.value - 32) * (5/9))
        }}
        />
        {/* Des que l'input Fahrenheit change tu met la valeur dans l'etat celsius et tu l'a
        converti pour l'état Celsius */}
       </form>
    </>
}

export default Convertisseur;