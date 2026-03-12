    const ButtonComponent = ({title, styles, onclick}) => {
        return <>
            <button style={styles} onClick={onclick}>{title}</button>
        </>;
    }
     
    export default ButtonComponent;