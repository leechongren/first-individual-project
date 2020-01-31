import React from 'react'
import './monsterCard.css'
import uuidv1 from 'uuid/v1'

const monsterCard = ({ monster, HP }) => {
    const { id, type, base } = monster

    function filterOutHpStat(arr) {
        return arr.filter(keyValuePair => {
            return keyValuePair[0] !== "HP"
        })
    }

    return (
        <div className="monster-card">
            <img className="monster-image" alt="Monster" src={process.env.PUBLIC_URL + `monsterImages/${id}.png`} />
            <div className="monster-stats">
                <div className="type">{type}</div>
                {filterOutHpStat(Object.entries(base)).map(seperateBase => {
                    return <div key={uuidv1()} className="base">{seperateBase[0] + ": " + seperateBase[1]}</div>
                })
                }
                <div>HP: {HP}</div>
            </div>
        </div>
    )

}

export default monsterCard