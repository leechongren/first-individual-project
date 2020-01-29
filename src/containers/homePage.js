import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return <div>
        Welcome to a simple RPG game!
        <Link to='/profile'>
            <div>
                Start Game
            </div>
        </Link>
    </div>
}

export default HomePage