import ButtonComponent from "../components/ButtonComponent";

 const Buttons = () => {
    return <>
        <ButtonComponent title={"toto"} onclick={() => {console.log("Je suis toto");}}/>
        <ButtonComponent title={"tata"} onclick={() => {console.log("Je suis tata")}}/>
        <ButtonComponent title={"Bernard"} styles={{backgroundColor : "darkorange"}}/>
        <ButtonComponent title={"Gerard"}/>
        <ButtonComponent/>
        <ButtonComponent/>
        <ButtonComponent/>
        <ButtonComponent/>
        <ButtonComponent/>
    </>;
 }
  
 export default Buttons;