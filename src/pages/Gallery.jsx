 import { useState } from "react";
import GalleryItem from "../components/GalleryItem"
 
 const Gallery = () => {
    const images = [{id: 1, title: "Chien", url:"https://images.ctfassets.net/denf86kkcx7r/2Ghp9VQgpJxmXD14Bb3mva/43352c7e00f45cf55c464ef46f8d44ac/quelle-est-esperance-vie-chiens-13?fm=webp&w=612"},
                   {id: 2, title: "Chat", url: "https://cdn.unitycms.io/images/EF--jPg4aPLB5B8xbzCOSt.jpg"},
                   {id: 3, title: "Éléphant", url: "https://fr.worldanimalprotection.ca/cdn-cgi/image/width=1280,format=auto/siteassets/shutterstock_2118427715_cropped.jpg"},
                   {id: 4, title: "Lion", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdkZurc-Y2YVK7AH6boLTH67QSQmExEm24Ug&s"},
                   {id: 5, title: "Forêt", url: "https://i.notretemps.com/1200x0/smart/2021/03/25/sorties-nature-4-forets-ou-il-fait-bon-flaner.jpg"},
                   {id: 6, title: "Océan", url: "https://i0.wp.com/ocean-climate.org/wp-content/uploads/2019/07/SPENCER_LOWELL_TARA_MEDITERRANEAN_101-copie.jpg?fit=1200%2C795&ssl=1"},
                   {id: 7, title: "Montagne", url: "https://www.ecoledeski.fr/media/cache/resolve/cover_site_content/2021/10/0010-800x600-lac-allos-1970.jpg"},
                   {id: 8, title: "Espace", url: "https://starwalk.space/gallery/images/what-is-space/1140x641.jpg"},
                   {id: 9, title: "Technologie", url: "https://www.zdnet.fr/wp-content/uploads/zdnet/2024/02/technologie-1.jpg"},
                   {id: 10, title: "Cuisine", url: "https://www.inova-cuisine.fr/storage/app/media/cuisines/Photos-generiques/Associations/Association-2.jpg"}]

      // On commence à l'id 1 car l'on renvoit forcement une image
      const [idSelected,setIdSelected] = useState(0);
      const [titleSelected, setTitlteSelected] = useState("Aucune image selectionne")


    return <>
    {/* Si on ne veut pas mettre de return, il faut mettre des () à la place des {} */}
    <h2>{idSelected}</h2>
    <h2>{titleSelected}</h2>
    {/* <h1>{images.find((el) => idSelected == el.id) ? images.find((el) => idSelected == el.id).title : titleSelected}</h1> */}
    {images.map((element) => {
      return <GalleryItem key={element.id} title={element.title} url={element.url} onSelect={() => {setIdSelected(element.id); setTitlteSelected(element.title)}}
      // Est ce que mon idSelected correspond à celui de mon image
      isSelected={idSelected == element.id}
      />
    })}
    {/* <GalleryItem */}
    </>;
 }
  
 export default Gallery;