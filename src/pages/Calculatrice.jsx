import { useState } from 'react';
import '../styles/Calculatrice.css';

const Calculatrice = () => {
    const [result, setResult] = useState("");
    // function Calculatrice(){}
    return <>
        <h2>Calculatrice</h2>
        {/* Crée mes div et mes button de calculatrice */}
        <div className="result">{result == "" ? "0" : result}</div>
        {/* SI result est égale a chaine de caractere vide ALORS(?) j'affiche '0' SINON(:) j'affiche result */}
        <div className="row">
            {/* Sur chaque bouton faire un onClick qui ajoute la valeur associé à mon calcul */}
            <div className="button number" onClick={() => {setResult(result + 7)}}>7</div>
            <div className="button number" onClick={() => {setResult(result + 8)}}>8</div>
            <div className="button number" onClick={() => {setResult(result + 9)}}>9</div>
            <div className="button operator" onClick={() => {setResult(result + "-")}}>-</div>
        </div>
        <div className="row">
            <div className="button number" onClick={() => {setResult(result + 4)}}>4</div>
            <div className="button number" onClick={() => {setResult(result + 5)}}>5</div>
            <div className="button number" onClick={() => {setResult(result + 6)}}>6</div>
            <div className="button operator" onClick={() => {setResult(result + "+")}}>+</div>
        </div>
        <div className="row">
            <div className="button number" onClick={() => {setResult(result + 1)}}>1</div>
            <div className="button number" onClick={() => {setResult(result + 2)}}>2</div>
            <div className="button number" onClick={() => {setResult(result + 3)}}>3</div>
            <div className="button operator" onClick={() => {setResult(result + "*")}}>*</div>
        </div>
        <div className="row">
            <div className="button number" onClick={() => {setResult(result + 0)}}>0</div>
            <div className="button number" onClick={() => {setResult(result + ".")}}>.</div>
            <div className="button fonction" id="clear" onClick={() => {setResult("")}}>C</div>
            <div className="button operator" onClick={() => {setResult(result + "/")}}>/</div>
        </div>
        <div className="row">
            <div className="button fonction" onClick={() => {setResult(result.slice(0,-1))}}id="delete">DELETE</div>
            <div className="button operator" onClick={() => {setResult(eval(result))}} id="equal">=</div>
        </div>
    </>
}

export default Calculatrice;