 const GalleryItem = ({title, url, isSelected, onSelect}) => {
    return <>
    <div>
      <h3>{title}</h3>
      {/* onClick={onSelect} => Quand je clique sur l'image, j'appelle ma fonction onSelect */}
      <img src={url} alt="" style={{border : isSelected && "2px solid red", width: "300px", cursor: "pointer"}} onClick={onSelect}
      />

    </div>
    </>;
 }
  
 export default GalleryItem;