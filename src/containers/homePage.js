import React from 'react'
import { Link } from 'react-router-dom'
import './homePage.css'

const HomePage = () => {
    return <div className='home-page-div'>
        Welcome to a simple RPG game! <br />
        <Link className='start-game-link' to='/profile'>
            <div className='start-game-icon'>
                Start Game
            </div>
        </Link>
    </div >
}

export default HomePage