import React from 'react'
import './Word.css'

function Word() {

  return (
    <div className='word--container'>
        <div className='word--letter'>
            <h1>C</h1>
        </div>
        <div className='word--letter'>
            <h1>H</h1>
        </div>
        <div className='word--letter'>
            <h1>A</h1>
        </div>
        <div className='word--letter'>
            <h1>S</h1>
        </div>
        <div className='word--letter'>
            <h1>E</h1>
        </div>

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