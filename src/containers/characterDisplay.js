import React from 'react'
import playerdata from '../objects/player'
import { Link } from 'react-router-dom'

class CharacterDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Vocation: playerdata[0].type,
            HP: playerdata[0].base.HP,
            Attack: playerdata[0].base.Attack,
            Defence: playerdata[0].base.Defence,
            Acquired_exp: playerdata[0].acquired_exp
        }
    }

    render() {
        const originalStats = {
            pathname: "/battle",
            HP: this.state.HP,
            Acquired_exp: this.state.Acquired_exp
        }
        return <div>
            Character Profile <br />
            Vocation: {this.state.Vocation} <br />
            HP: {this.state.HP} <br />
            Attack: {this.state.Attack} <br />
            Defence: {this.state.Defence} <br />
            Acquired Exp: {this.state.Acquired_exp} <br />
            <Link to={originalStats}>
                <button>To Battle!</button>
            </Link>

        </div>

    }
}
export default CharacterDisplay
