import React from 'react'
import { useState } from 'react'

export const AddAnime = ({ onNewValue }) => {

  const [inputValue, setinputValue] = useState('')



  const onChangedInput = (e) => {

    setinputValue(e.target.value)
  }




  const onSubmit = (e) => {

    e.preventDefault()

    if (inputValue.trim().length <= 1) return
    onNewValue(inputValue.trim())

    setinputValue('')
  }


  return (
    <div>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder='Añade Anime'
          value={inputValue}
          onChange={(e) => { onChangedInput(e) }}

        >


        </input>

      </form>
    </div>
  )
}
