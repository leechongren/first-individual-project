import React from 'react'
import playerdata from '../objects/player'
import { Link } from 'react-router-dom'
// 1. change to class component
// 2. create state for profile
// 3. Use Route to show profile, pass data from state to profile props
// 3. use route to show battle, pass method to update states
class CharacterDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Vocation: playerdata[0].type,
            HP: playerdata[0].base.HP,
            Attack: playerdata[0].base.Attack,
            Defence: playerdata[0].base.Defence
        }
    }

    render() {
        const originalStats = {
            pathname: "/battle",
            HP: this.state.HP
        }
        return <div>
            Character Profile <br />
            Vocation: {this.state.Vocation} <br />
            HP: {this.state.HP} <br />
            Attack: {this.state.Attack} <br />
            Defence: {this.state.Defence} <br />
            <Link to={originalStats}>
                <button>To Battle!</button>
            </Link>

        </div>

    }
}
export default CharacterDisplay
