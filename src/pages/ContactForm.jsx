import { useState } from "react";

const ContactForm = () => {
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const [errorsName, setErrorsName] = useState("");
    const [errorsEmail, setErrorsEmail] = useState("");
    const [errorsMessage, setErrorsMessage] = useState("")

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (name.trim() == "") {
            setErrorsName('Ce champ est requis')
        } else {
            setErrorsName("");
        }

        if (!emailRegex.test(email) ) {
            setErrorsEmail('Format invalide !')
        } else {
            setErrorsEmail("")
        }

        if (message.length < 10) {
            setErrorsMessage('Le message doit contenir au moins 10 caractères')
        } else {
            setErrorsMessage("")    
        }

        console.log(errorsName);
        

        if (name.trim() !== "" && emailRegex.test(email) && message.length > 10) {
            alert("Formulaire envoyé !");
            setName("");
            setEmail("");
            setMessage("");
        }
        
    }
    
        
        

return <>
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
            <label htmlFor="">Nom </label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
            <span>{errorsName}</span>
            <label htmlFor="">Email </label>
            <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <span>{errorsEmail}</span>
            <label htmlFor="">Message </label>
            <textarea name="message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <span>{errorsMessage}</span>
            <input type="submit" />
        </form>
    </>

} 

export default ContactForm;