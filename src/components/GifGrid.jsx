import { useFetchGifs } from "../hooks/useFetchGifs"
import { GifItem } from "./GifItem"


export const GifGrid = ({ anime }) => {

const {images, isLoading} = useFetchGifs(anime)

    return (

        <>

            <h3>{anime}</h3>

            <div className="card-grid">

                {
                    images.map((img) => (
                        <GifItem 
                        key={img.id} 
                       {...img}
                        />

                    ))
                }
            </div>






        </>
    )
}
