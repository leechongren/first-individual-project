import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'

const HomePage = () => {
    return <div className='home-page-div'>
        <div >
            <img className='gif-intro-page' alt="gif" src="https://media2.giphy.com/media/B2eg9CmW4i9ZC/giphy.gif?cid=790b761164642416952e19e6d05a7aae9228d4c4cd191bc6&rid=giphy.gif" />
        </div>
        <div className="intro-text">Welcome to a simple RPG game!</div> <br />
        <Link className='start-game-link' to='/profile'>
            <div className='start-game-icon'>
                Start Game
            </div>
        </Link>
    </div >
}

export default HomePage