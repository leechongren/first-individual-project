import React from 'react'
import playerdata from '../objects/player'
import { Link } from 'react-router-dom'
import PlayerCard from '../components/playerCard'
import './characterInBattleDisplay.css'

class CharacterInBattleDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            HP: this.props.location.HP,
            Exp: this.props.location.Exp,
            MaxHP: playerdata[0].base.HP,
            ID: playerdata[0].id
        }
    }




    render() {
        const toBattle = {
            pathname: "/battle",
            HP: this.state.HP,
            Acquired_exp: this.state.Exp,
            MonsterID: Math.floor(Math.random() * Math.floor(2))
        }
        return <div className="char-display">
            Character Profile <br />
            <PlayerCard player={playerdata[0]} />
            HP: {this.state.HP}/{this.state.MaxHP} <br />
            Acquired Exp: {this.state.Exp} <br />
            <Link to={toBattle}>
                <button>To Battle!</button>
            </Link>

        </div>

    }

}

export default CharacterInBattleDisplay