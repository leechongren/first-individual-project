import React from 'react'
import playerdata from '../objects/player'
import PlayerCard from '../components/playerCard'
import monsterdata from '../objects/monster'
import MonsterCard from '../components/monsterCard'
import './battleDisplay.css'
import { Link } from 'react-router-dom'
import { DialogueBox, DefeatMonsterDialogueBox, DefeatedDialogueBox } from '../components/dialogueBox'

class BattleDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playerAttackStat: playerdata[0].base.Attack,
            playerRemainingHp: this.props.location.HP,
            monsterRemainingHp: monsterdata[0].base.HP,
            triggerDialogueBox: false,
            playerExp: this.props.location.Acquired_exp
        }

    }

    attackDamageCalculation = () => {
        this.setState({
            monsterRemainingHp: this.state.monsterRemainingHp - playerdata[0].base.Attack,
            playerRemainingHp: this.state.playerRemainingHp - monsterdata[0].base.Attack,
            triggerDialogueBox: true,
        })
    }



    render() {
        const updatedStats = {
            pathname: "/battle/profile",
            HP: this.state.playerRemainingHp,
            Exp: this.state.playerExp + monsterdata[0].exp
        }
        const playerHp = this.state.playerRemainingHp
        const isPlayerAlive = playerHp > 0 ? true : false
        const monsterHp = this.state.monsterRemainingHp
        const isMonsterAlive = monsterHp > 0 ? true : false
        return <div>
            <div className="display">
                <div className="playerDisplay">
                    <PlayerCard player={playerdata[0]} />
                    <div>HP: {playerHp}</div>
                    {isMonsterAlive &&
                        <button onClick={this.attackDamageCalculation}>Attack!</button>}
                </div>
                <div>
                    <MonsterCard monster={monsterdata[0]} />
                    <div>HP: {monsterHp}</div>
                </div>
            </div>
            {isPlayerAlive && this.state.triggerDialogueBox && isMonsterAlive && <DialogueBox
                playerAttack={playerdata[0].base.Attack}
                monster={monsterdata[0].type}
                monsterAttack={monsterdata[0].base.Attack}
            />}
            {isPlayerAlive && !isMonsterAlive && <DefeatMonsterDialogueBox
                monster={monsterdata[0].type}
                exp={monsterdata[0].exp}
            />
            }

            {isPlayerAlive && !isMonsterAlive && <div className="return-button" >
                <Link to={updatedStats}>
                    <button>Return</button>
                </Link>
            </div>}


            {!isPlayerAlive && <DefeatedDialogueBox />}

        </div>
    }
}


export default BattleDisplay