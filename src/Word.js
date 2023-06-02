import React from 'react'
import './Word.css'
import Letter from './Letter'

function Word() {

    //each word needs to be passed an empty array to start

    const word = ['', '', '', '', '']

    function createLetters() {
        return word.map(letter => <Letter value={letter} />)
    }

    const letterElements = createLetters()

  return (
    <div className='word--container'>
        {letterElements}
    </div>
  )
}

export default Word

    //will make a grid of words?
    //and each word will be five divs?
    //or do i make a grid of letters
    //might need to make a letter component if im going to copy all of this code
    //how do i update the typing
    //use effect whenever word is updated then set array 
    //event listener with updates when array is less than five letters and 