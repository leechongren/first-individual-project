import React from 'react'
import './dialogueBox.css'

export const DialogueBox = ({ playerAttack, monster, monsterAttack }) => {
    return <div className="dialogue-box">
        <p className="text-paragraph">You hit {monster} with {playerAttack} points of damage!<br />
            {monster} hits you with {monsterAttack} points of damage!</p>
    </div>
}

export const DefeatMonsterDialogueBox = ({ monster }) => {
    return <div className="dialogue-box">
        <p className="text-paragraph"> You defeated {monster}!</p>
    </div>
}

