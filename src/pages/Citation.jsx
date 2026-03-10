import { useState } from "react";

function Citation() {
    // Etat citation qui est un tableau d'objet JSON avec des citations
    const [citations, setCitations] = useState (
 [
  {
    citation: "La connaissance parle, mais la sagesse écoute.",
    auteur: "Jimi Hendrix"
  },
  {
    citation: "Innover, c'est savoir abandonner des milliers de bonnes idées.",
    auteur: "Steve Jobs"
  },
  {
    citation: "Rien ne se perd, rien ne se crée, tout se transforme.",
    auteur: "Antoine Lavoisier"
  },
  {
    citation: "Le bonheur est la seule chose qui se double si on le partage.",
    auteur: "Albert Schweitzer"
  },
  {
    citation: "La simplicité est la sophistication suprême.",
    auteur: "Léonard de Vinci"
  },
  {
    citation: "Soyez le changement que vous voulez voir dans le monde.",
    auteur: "Mahatma Gandhi"
  },
  {
    citation: "L'imagination est plus importante que le savoir.",
    auteur: "Albert Einstein"
  },
  {
    citation: "Le courage n'est pas l'absence de peur, mais la capacité de la vaincre.",
    auteur: "Nelson Mandela"
  },
  {
    citation: "La meilleure façon de prédire l'avenir, c'est de le créer.",
    auteur: "Peter Drucker"
  },
  {
    citation: "Tout ce que nous sommes est le résultat de ce que nous avons pensé.",
    auteur: "Bouddha"
  }
]
    );
    // Chaque objet JSON contient citation et auteur
    // [{citation : "Votre citation", auteur : "toto"},
    // {citation : "Votre citation", auteur : "toto"}...]
    // Pour générer ce tableau, vous pouvez utiliser l'IA

    // Un deuxieme état qui stock la citation qui a été selectionné aléatoirement
    const [citation, setCitation] = useState ("")
    // (citations[Math.floor(Math.random() * citations.length)])

    return <>
        {/* Faire un bouton générer citation et lorsque l'on clique sur ce bouton, on va
        chercher une citation aléatoirement dans le tableau citations et on la stock dans notre deuxieme état */}
        <button onClick={() => {
          const randomCit = (citations[Math.floor(Math.random() * citations.length)])
          setCitation(randomCit);
          }}>Générer une citation</button>
        {/* Faire une balsie h3 qui affiche la citation selectionne si il y en a une */}
        {/* Sur ce h3, avoir la possibilité de cliquer dessu pour copier la citation */}
        <h3
        onClick={(e) => {
          // console.log(e.target.innerText);
          navigator.clipboard.writeText(e.target.innerText);
          alert("Citation copié !")
        }}
        >{citation.citation} - {citation.auteur}</h3>
        {citation.citation &&
          <button onClick={() => {
            alert("Vous aimez cette citation !")
          }}>LIKE</button>
        }
    </>

}

export default Citation;
