import React from 'react'
import playerdata from '../objects/player'
import { Link } from 'react-router-dom'
class CharacterInBattleDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Vocation: playerdata[0].type,
            HP: this.props.location.HP,
            Attack: playerdata[0].base.Attack,
            Defence: playerdata[0].base.Defence,
            Exp: this.props.location.Exp
        }
    }


    render() {
        const updatedStats = {
            pathname: "/battle",
            HP: this.state.HP,
            Acquired_exp: this.state.Exp
        }
        return <div>
            Character Profile <br />
            Vocation: {this.state.Vocation} <br />
            HP: {this.state.HP} <br />
            Attack: {this.state.Attack} <br />
            Defence: {this.state.Defence} <br />
            Exp: {this.state.Exp} <br />
            <Link to={updatedStats}>
                <button>To Battle!</button>
            </Link>

        </div>

    }

}

export default CharacterInBattleDisplay