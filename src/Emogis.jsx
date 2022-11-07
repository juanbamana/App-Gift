import React, { useState } from 'react'
import { AddAnime } from './components/AddAnime'








export const EmogisApp = () => {


const [anime, setAnime] = useState(['Bola de dan', 'Dragon Ball'])


const addAnime = (newValue)=>{
 
    setAnime([...anime, newValue])

}

  return (
    <>
    <div>Lista Anime</div><ol>
    <AddAnime 
    onNewValue={addAnime}
    
    />

        <button onClick={addAnime}>Añadir</button>

          {anime.map((anime) => {

             return <li key={anime}>{anime}</li>
          })}

      </ol>
      </>
  )
}
