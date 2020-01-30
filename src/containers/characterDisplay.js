import React from 'react'
import playerdata from '../objects/player'
import { Link } from 'react-router-dom'
import PlayerCard from '../components/playerCard'
import './characterDisplay.css'
class CharacterDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            HP: playerdata[0].base.HP,
            Acquired_exp: playerdata[0].acquired_exp,
            ID: playerdata[0].id
        }
    }



    render() {
        const toBattle = {
            pathname: "/battle",
            HP: this.state.HP,
            Acquired_exp: this.state.Acquired_exp,
            MonsterID: Math.floor(Math.random() * Math.floor(2))
        }
        return <div className="start-char-display">
            Character Profile <br />
            <PlayerCard player={playerdata[0]} /> <br />
            HP: {this.state.HP}/{this.state.HP} <br />
            Acquired Exp: {this.state.Acquired_exp} <br />
            <Link to={toBattle}>
                <button>To Battle!</button>
            </Link>

        </div>

    }
}
export default CharacterDisplay
