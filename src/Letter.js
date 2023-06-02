import React from 'react'
import './Letter.css'

function Letter(props) {
  return (
    <div className='word--letter'>
            <h1>{props.value}</h1>
    </div>
  )
}

export default Letter