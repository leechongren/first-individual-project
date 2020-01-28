import React from 'react'
import './monsterCard.css'

const monsterCard = ({ monster }) => {
    const { id, type, base } = monster

    function filterOutHpStat(arr) {
        return arr.filter(keyValuePair => {
            return keyValuePair[0] !== "HP"
        })
    }

    return (
        <div className="monster-card">
            <img className="monster-image" alt="Monster" src={process.env.PUBLIC_URL + `monsterImages/${id}.png`} />
            <div className="type">{type}</div>
            {filterOutHpStat(Object.entries(base)).map(seperateBase => {
                return <p className="base">{seperateBase[0] + ": " + seperateBase[1]}</p>
            })
            }
        </div>
    )

}

export default monsterCard