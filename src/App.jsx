import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calculatrice from './pages/Calculatrice';
import Exercice1 from './pages/Exercice1';
import Guess from './pages/Guess'
import Compteur from './pages/Compteur';
import Citation from './pages/Citation';
import Convertisseur from './pages/Convertisseur'

function App() {
  const [compteur, setCompteur] = useState(0);
  // compteur = 0
  // variable, setVariable
  // function setCompteur(newValue){
  // compteur = newValue;
  // }

  return (
    <>
      {/* <h1>Hello tout le monde !!!</h1> */}
      {/* if compteur > 0 {
          {compteur};
      }else{
       "Compteur is NULL";
      }*/}

      {/* <p>{compteur > 0 ? compteur : "NULL"}</p> */}
      {/* () => {} est une function flechée */}
      {/* equivalent function(){} */}
      {/* <button onClick={() => {setCompteur(compteur + 1)}}>Incrementer</button> */}
      {/* BOUTON DECREMENTATION */ }
      {/* <button onClick={() => {setCompteur(compteur - 1)}}>Decrementer</button>  */}
      {/* <Calculatrice /> */}
      {/* <Exercice1/> */}
      {/* <Guess /> */}
      {/* < Compteur /> */}
      {/* < Citation /> */}
      < Convertisseur />
    </>
  )
}

export default App
