import { useState } from "react";


function ToDoList() {
    // Un état tasks avec comme valeur par defaut un [] -> Cet état va stocker toutes les taches
    const [tasks,setTasks] = useState([]);
    // Un etat task avec comme valeur par defaut un {} -> Cet état va stocker la tache que l'on est en train d'ajouter
    const [task,setTask] = useState({})
    const [state, setState] = useState("Toutes");

    // handleSubmit
    const handleSubmit = (e) => {
        e.preventDefault();
        // Vous allez construire un object pour que l'on puisse l'ajouter au tableau tasks
        // {id: tasks.lentgh + 1, title: task.title, done: false}
        setTasks([...tasks, {id : tasks.length + 1, title : task.title, done : false}])
    }

    // handleChange avec en paramatre une task(element du .map)
    const handleChange = (element) => {
        console.log(element);
        // On va aller chercher l'element correspondant dans le tableau tasks .find
        let elementToChange = tasks.findIndex((e) => {
            return e.id == element.id;
        })
        
        // newTasks va contenir toutes mes taches, les anciennes et celles modifié.
        let newTasks = [...tasks];
        // Une fois trouvé on va mettre a jour la valeur de done de cet object
        // newTasks[elementToChange] c'est l'objet {id: , title: , done: } que je vais modifier
        newTasks[elementToChange] = {
            // copie collle tout l'object
            ...newTasks[elementToChange],
            // Je change la valeur de done en mettant l'inverse de la valeur actuelle
            done: !newTasks[elementToChange].done
        }
        // On va mettre a jour tasks avec setTasks et ce nouvel objet
        setTasks(newTasks);
    }

    const handleDelete = (element) => {
        // Trouve la position de mon element dans le tableau
        let elementIndex = tasks.findIndex((e) => {
            return e.id == element.id;
        })
        // copie le tableau
        let newTasks = [...tasks];

        // supprimer l'element
        newTasks.splice(elementIndex, 1);

        setTasks(newTasks)
    }


    return <>
    {/* formulaire avec un onSubmit qui appelle la function handleSubmit */}
    <form style={{display : "flex", flexDirection : "column"}}
    onSubmit={handleSubmit}>
        <label htmlFor="task">Nouvelle tache :</label>
    {/* input pour le title qui aura comme valeur task.title */}
        <input type="text" id="task" value={task.title} style={{marginBottom : "10px"}} onChange={(e) => {setTask({title : e.target.value})}}/>
    {/* input/button type submit */}
        <input type="submit"  />
    {/* tasks.map pour parcourir les taches */}
        <ul style={{listStyle : "none"}}>
        {tasks.map((element) => {
            // Le key est l'equivalent d'un id, ne pas oublier de le mettre
            if (state == "Actives" && element.done == false) {
                return <li key={element.id} 
                style={{textDecoration : element.done ? 'line-through' : ""}}
                > {element.title}
                <input type="checkbox" checked={element.done} onChange={() => {handleChange(element)}} />
                {/* <input type="checkbox" value={element.done} onChange={(e) => {(e) => {element.done = !element.done}}} /> */}
                <button onClick={() => {handleDelete(element)}}>Delete</button>
                </li>                
            } else if (state == "Terminees" && element.done == true) {
                return <li key={element.id} 
                style={{textDecoration : element.done ? 'line-through' : ""}}
                > {element.title}
                <input type="checkbox" checked={element.done} onChange={() => {handleChange(element)}} />
                {/* <input type="checkbox" value={element.done} onChange={(e) => {(e) => {element.done = !element.done}}} /> */}
                <button onClick={() => {handleDelete(element)}}>Delete</button>
                </li>  
            } else if (state == "Toutes") {
                return <li key={element.id} 
                style={{textDecoration : element.done ? 'line-through' : ""}}
                > {element.title}
                <input type="checkbox" checked={element.done} onChange={() => {handleChange(element)}} />
                {/* <input type="checkbox" value={element.done} onChange={(e) => {(e) => {element.done = !element.done}}} /> */}
                <button onClick={() => {handleDelete(element)}}>Delete</button>
                </li>  
            }
        })}
        </ul>
    {/* afficher le title et la checkbox ci dessous */}
    {/* input(checkbox) pour la valeur de 'done' -> cette input aura onChange pour modifier
    l'objet task afficher */}
    </form>

    <label htmlFor="state">Filtre par etat</label>
    <select name="state" id="state" value={state} onChange={(e) => {setState(e.target.value);}}>
        <option value="Toutes">Toutes</option>
        <option value="Actives">Actives</option>
        <option value="Terminees">Terminees</option>
    </select>
    </>
}

export default ToDoList;