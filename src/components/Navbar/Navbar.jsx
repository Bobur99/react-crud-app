import React from 'react'
import './Navbar.css'

function Navbar(props) {
  return (
    <div className='navbar' style={{backgroundColor: props.color}}>
        <h4>{props.title}</h4>
        <button>sign in</button>
    </div>
  )
}

export default Navbar