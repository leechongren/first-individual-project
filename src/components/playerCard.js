import React from 'react'
import './PlayerCard.css'
import uuidv1 from 'uuid/v1'


const playerCard = ({ player, HP, MaxHP, Exp, Level }) => {
    const { id, type, base } = player

    function filterOutHpStat(arr) {
        return arr.filter(keyValuePair => {
            return keyValuePair[0] !== "HP"
        })
    }

    return (
        <div className="player-card">
            <img className="player-image" alt="Warrior" src={process.env.PUBLIC_URL + `/characterImages/${id}.png`} />
            <div className="player-stat-box">
                <div className="type">{type}</div>
                {filterOutHpStat(Object.entries(base)).map(seperateBase => {
                    return <div key={uuidv1()} className="base">{seperateBase[0] + ": " + seperateBase[1]}</div>
                })
                }
                <div className="HP">HP: {HP}/{MaxHP}</div>
                <div className="Exp">Acquired Exp: {Exp}</div>
                <div className="Level">Level: {Level}</div>
            </div>
        </div>
    )

}

export default playerCard