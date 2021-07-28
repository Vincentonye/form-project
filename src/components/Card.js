// this is a functional component
import React from 'react'

// this is just a javascript function that represents a component
// you can create a component by class(collects and sends data) or function component(only renders data).
// use rafce.
// my card component.
// props here is a constant
const Card = (props) => {
  return (
    <article className='article' style = {{backgroundColor: props.bgcolor}}>
      <div>
        <img src={props.logo} alt='' />
      </div>
      <div className='text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <div>
        <button className='btn-1'> Learn More </button>
      </div>
    </article>
  )
}

export default Card
