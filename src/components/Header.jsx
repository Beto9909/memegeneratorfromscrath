import React from 'react'
import img from '../assets/Images/troll2.png'
import '../styles/Header.scss'

export default function Header() {
  return (
    <div className="header">
        <div className="rigth">
            <img className='header--img' src={img} alt="Mi juan"/>
            <h2 className='header--h2'>Meme generator</h2>
        </div>
        <h3>React course - Project 3</h3>
    </div>

  )
}
