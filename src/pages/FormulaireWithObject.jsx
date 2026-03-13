import { useState } from "react";

const FormulaireWithObject = () => {
    const [formData,setFormData] = useState({
        name:"",
        mail:"",
        message: ""
    });
    const [errors, setErrors] = useState({
        name: "",
        mail: "",
        message: ""
    });
    const [successSubmit, setSuccessSubmit] = useState('')

    const handleChange = (e) => {
        // destructuration
        const {name, value} = e.target;
        setFormData({...formData, [name] : value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let currentError = {};

        if (formData.name == "") {
            currentError.name = "Le champ Name doit être renseigner";
        }

        if (!formData.mail.includes("@")) {
            currentError.mail = "L'email doit contenir un @";
        }

        if (formData.message.length < 10) {
            currentError.message = "Le message doit faire plus de 10 caractères !";
        }

        // error = {
        // name : "Le champ Name doit être renseigner",
        // mail : "L'email doit contenir un @",
        // message = "Le message doit faire plus de 10 caractères !"  
        // }
        // Object.keys(error) => il me récupère toutes les clés de mon object et les mets dans un tableau
        // Object.keys(error) = [name, mail, message]
        // deuxiement exemple 
        // error = {}
        // Object.keys(error) = []
        
        if (Object.keys(currentError).length == 0) {
            setSuccessSubmit('Votre message à bien été envoyé');
            setErrors({
                name: "",
                mail: "",
                message: ""
            });
            setFormData({ 
                name: "",
                mail: "",
                message: ""
            })
        } else {
            setErrors(currentError);
            setSuccessSubmit('')
        }

    }

    return <>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }} >
            <label htmlFor="name">Name</label>
            <input placeholder="Dupont..." type="text" name="name" id="name" value={formData.name} onChange={handleChange} />
            <span style={{ backgroundColor: "red", color: "white", width: '100%', textAlign: "center" }}>
                {errors.name}
            </span>
            <label htmlFor="mail">Mail</label>
            <input placeholder="dupont@gmail.com..." type="text" name="mail" id="mail" value={formData.mail} onChange={handleChange} />
            <span style={{ backgroundColor: "red", color: "white", width: '100%', textAlign: "center" }}>
                {errors.mail}
            </span>
            <label htmlFor="message">Message</label>
            <textarea placeholder="Votre message..." style={{ resize: "none" /*Empeche le changement de taille du textarea par le user */ }}
                id="message" name="message" value={formData.message} onChange={handleChange}
                cols={50} rows={5}></textarea>
            <span style={{ backgroundColor: "red", color: "white", width: '100%', textAlign: "center" }}>
                {errors.message}
            </span>
            {/* <button type="submit">Envoyer</button> */}
            <input type="submit" value="Envoyer" />
            <span style={{ backgroundColor: "green", color: "white", width: '100%', textAlign: "center" }}>
                {successSubmit}
            </span>
        </form>
    </>;
}

export default FormulaireWithObject;