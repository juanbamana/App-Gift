import React, { useState } from 'react'
import { AddAnime } from './components/AddAnime'
import { GifGrid } from './components/GifGrid'







export const EmogisApp = () => {


  const [anime, setAnime] = useState(['Bola de dan'])


  const addAnime = (newValue) => {
    if (anime.includes(newValue)) return
    setAnime([newValue, ...anime, ])

  }

  return (
    <>

      <AddAnime
        onNewValue={addAnime}

      />

        {anime.map((anime) => (

          <GifGrid
            key={anime}
            anime={anime} />
        ))
        }

    </>
  )
}
