import { useState } from "react";

function UserCard() {
    // Etat user qui sera un object avec des valeurs par défaut
    const [user,setUser] = useState({name: 'Jean', email: 'jean@example.com', age: 52 });
    // Etat isModified avec comme valeur par défaut false
    const [isModified, setIsModified] = useState(false);
    // handleChange
    const [userModified, setUserModified] = useState({});

    // Copie l'object user dans une nouvelle variable
    // Modifier la clé que vous avez changé
    // enregistrer le nouvel objet avec setUser
    const handleSubmit = (e) => {
        setUser(userModified);
        setIsModified(false);
    }

    const handleChange = (e) => {
        let userToChange = {...userModified};
        
        
        // Faire une condtion
        if (e.target.name == "nom") {
            userToChange.name = e.target.value;
        } else if (e.target.name == "email") {
            userToChange.email = e.target.value;
        } else if (e.target.name == "age") {
            userToChange.age = e.target.value;
        }
        setUserModified(userToChange);
    }

    return <> 
        {/* Si isModified est false alors */}
        {isModified == false ? 
            <>
            {/* Afficher les infos du user */}
            <div
            style={{backgroundColor : "#98F527", height : "100px", width : "300px", display : "flex", alignItems : "center", justifyContent : "center", boxShadow : "0 0 15px white", color : "black", fontSize : "1.2rem"}}
            >{user.name} - {user.email} - {user.age}</div>
            <button onClick={() => {
                setIsModified(true);
                setUserModified(user);
                }}>Modifier</button>
            </>
         : 
            <>
            {/* Sinon j'affiche les inputs prérempli des valeurs de mon user */}
            {/* form */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="nom" id="nom" value={userModified.name} onChange={handleChange}/>
                <input type="text" name="email" id="email" value={userModified.email} onChange= {handleChange}/>
                <input type="text" name="age" id="age" value={userModified.age} onChange={handleChange}/>
                <input type="submit" value={"Sauvegarder"}/>
            </form>
                {/* <button onClick={() => {handleSubmit()}}>Sauvegarder</button> */}
            {/* bouton Sauvegarder */}
            {/* bouton annuler */}
            <button onClick={() => {
                setIsModified(false);
            }}>Annuler</button>
            </>
        }
    </>
}

export default UserCard