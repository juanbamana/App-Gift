import React, { useState } from 'react'
import { AddAnime } from './components/AddAnime'








export const EmogisApp = () => {


const [anime, setAnime] = useState(['Bola de dan', 'Dragon Ball'])


const addAnime = ()=>{
 
    setAnime([...anime, 'Carolina es una puta'])

}

  return (
    <>
    <div>Lista Anime</div><ol>
    <AddAnime/>

        <button onClick={addAnime}>Añadir</button>

          {anime.map((anime) => {

             return <li key={anime}>{anime}</li>
          })}

      </ol>
      </>
  )
}
