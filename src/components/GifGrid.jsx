
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";




export const GrifGrid = ({ category }) => {
  const {images, isLoading} = useFetchGifs(category)


  return (
    <>
      <h3> { category } </h3>
      {
        isLoading && (<h2 > Cargano... </h2>)
      }

      <div className="card-grid">
        {images.map(img=> <GifItem key={img.id} {...img}/>)}
      </div>
    </>
  )
}
