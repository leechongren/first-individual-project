import React from 'react'
import './dialogueBox.css'
import { Link } from 'react-router-dom'

export const DialogueBox = ({ playerAttack, monster, monsterAttack }) => {
    return <div className="dialogue-box">
        <p className="text-paragraph">You hit {monster} with {playerAttack} points of damage!<br />
            {monster} hits you with {monsterAttack} points of damage!</p>
    </div>
}

export const DefeatMonsterDialogueBox = ({ monster, exp }) => {
    return <div className="dialogue-box">
        <p className="text-paragraph"> You defeated {monster}!<br />
            You gained {exp} experience points!
        </p>
    </div>
}

export const DefeatedDialogueBox = () => {
    return <div className="dialogue-box">
        <p className="text-paragraph"> You have been defeated...<br />
            Please try again
        </p><br />
        <Link to='/'>
            <button>Return to home</button>
        </Link>

    </div>
}

