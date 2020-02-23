import React from 'react'
import playerdata from '../objects/player'
import { Link } from 'react-router-dom'
import PlayerCard from '../components/PlayerCard'
import './CharacterInBattleDisplay.css'

class CharacterInBattleDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            HP: this.props.location.HP,
            Exp: this.props.location.Exp,
            MaxHP: playerdata[0].base.HP,
            ID: playerdata[0].id,
            Level: this.props.location.Level
        }
    }


    getrandomId = (num) => {
        return Math.floor(Math.random() * Math.floor(num))
    }

    render() {
        const toBattle = {
            pathname: "/battle",
            HP: this.state.HP,
            Acquired_exp: this.state.Exp,
            MonsterID: this.getrandomId(2),
            Level: this.state.Level
        }
        return <div className="char-display">
            Character Profile <br />
            <PlayerCard
                player={playerdata[0]}
                HP={this.state.HP}
                MaxHP={this.state.MaxHP}
                Exp={this.state.Exp}
                Level={this.state.Level} /> <br />
            <Link to={toBattle}>
                <button>To Battle!</button>
            </Link>

        </div>

    }

}

export default CharacterInBattleDisplay