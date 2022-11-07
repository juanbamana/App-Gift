import React from 'react'
import { useState } from 'react'

export const AddAnime = () => {

const [inputValue, setinputValue] = useState('Hola')



const onChangedInput = (e)=>{

setinputValue(e.target.value)
console.log(e.target.value)
}

const onSubmit = (e)=>{

e.preventDefault()    
    }


  return (
    <div>

<form   onSubmit={(e)=>onSubmit(e)}>
        <input
        type="text"
        placeholder='Añade Anime'
        value={inputValue}
        onChange={(e)=>{onChangedInput(e)}}

        >
        
        
        </input>

        </form>
    </div>
  )
}
