import React from 'react'
import playerdata from '../objects/player'
import { Link } from 'react-router-dom'
import PlayerCard from '../components/PlayerCard'
import './CharacterDisplay.css'
class CharacterDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            HP: playerdata[0].base.HP,
            Acquired_exp: playerdata[0].acquired_exp,
            ID: playerdata[0].id,
            Level: playerdata[0].level
        }
    }

    getrandomId = (num) => {
        return Math.floor(Math.random() * Math.floor(num))
    }

    render() {
        const toBattle = {
            pathname: "/battle",
            HP: this.state.HP,
            Acquired_exp: this.state.Acquired_exp,
            MonsterID: this.getrandomId(2),
            Level: this.state.Level
        }
        return <div className="start-char-display">
            Character Profile <br />
            <PlayerCard player={playerdata[0]}
                HP={this.state.HP}
                MaxHP={this.state.HP}
                Exp={this.state.Acquired_exp}
                Level={this.state.Level} /> <br />

            <Link to={toBattle}>
                <button>To Battle!</button>
            </Link>

        </div>

    }
}
export default CharacterDisplay
