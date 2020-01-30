import React from 'react'
import './playerCard.css'

const playerCard = ({ player }) => {
    const { id, type, base } = player

    function filterOutHpStat(arr) {
        return arr.filter(keyValuePair => {
            return keyValuePair[0] !== "HP"
        })
    }

    return (
        <div className="player-card">
            <img className="player-image" alt="Warrior" src={process.env.PUBLIC_URL + `/characterImages/${id}.png`} />
            <div className="type">{type}</div>
            {filterOutHpStat(Object.entries(base)).map(seperateBase => {
                return <p className="base">{seperateBase[0] + ": " + seperateBase[1]}</p>
            })
            }
        </div>
    )

}

export default playerCard