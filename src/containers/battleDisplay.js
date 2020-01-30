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
            monsterRemainingHp: monsterdata[this.props.location.MonsterID].base.HP,
            triggerDialogueBox: false,
            playerExp: this.props.location.Acquired_exp,
            monsterID: this.props.location.MonsterID,
            playerMaxHP: playerdata[0].base.HP
        }

    }

    attackDamageCalculation = () => {
        this.setState({
            monsterRemainingHp: this.state.monsterRemainingHp - playerdata[0].base.Attack,
            playerRemainingHp: this.state.playerRemainingHp - monsterdata[this.state.monsterID].base.Attack,
            triggerDialogueBox: true,
        })
    }



    render() {
        const updatedStats = {
            pathname: "/battle/profile",
            HP: this.state.playerRemainingHp,
            Exp: this.state.playerExp + monsterdata[this.state.monsterID].exp,
            MonsterID: this.state.monsterID
        }
        const playerHp = this.state.playerRemainingHp
        const isPlayerAlive = playerHp > 0 ? true : false
        const monsterHp = this.state.monsterRemainingHp
        const isMonsterAlive = monsterHp > 0 ? true : false
        return <div>
            <div className="display">
                <div className="playerDisplay">
                    <PlayerCard player={playerdata[0]} />
                    <div>HP: {playerHp}/{this.state.playerMaxHP}</div>
                    {isMonsterAlive &&
                        <button onClick={this.attackDamageCalculation}>Attack!</button>}
                </div>
                <div>
                    <MonsterCard monster={monsterdata[this.state.monsterID]} />
                    <div>HP: {monsterHp}</div>
                </div>
            </div>
            {isPlayerAlive && this.state.triggerDialogueBox && isMonsterAlive && <DialogueBox
                playerAttack={playerdata[0].base.Attack}
                monster={monsterdata[this.state.monsterID].type}
                monsterAttack={monsterdata[this.state.monsterID].base.Attack}
            />}
            {isPlayerAlive && !isMonsterAlive && <DefeatMonsterDialogueBox
                monster={monsterdata[this.state.monsterID].type}
                exp={monsterdata[this.state.monsterID].exp}
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