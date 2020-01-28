import React from 'react'
import playerdata from '../objects/player'
import PlayerCard from '../components/playerCard'
import monsterdata from '../objects/monster'
import MonsterCard from '../components/monsterCard'
import './battleDisplay.css'
import { DialogueBox, DefeatMonsterDialogueBox } from '../components/dialogueBox'

class BattleDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playerRemainingHp: playerdata[0].base.HP,
            monsterRemainingHp: monsterdata[0].base.HP,
            triggerDialogueBox: false
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
        return <div>
            <div className="display">
                <div className="playerDisplay">
                    <PlayerCard player={playerdata[0]} />
                    <div>HP: {this.state.playerRemainingHp}</div>
                    <button onClick={this.attackDamageCalculation}>Attack!</button>
                </div>
                <div>
                    <MonsterCard monster={monsterdata[0]} />
                    <div>HP: {this.state.monsterRemainingHp}</div>
                </div>
            </div>
            {this.state.triggerDialogueBox && this.state.monsterRemainingHp > 0 && <DialogueBox
                playerAttack={playerdata[0].base.Attack}
                monster={monsterdata[0].type}
                monsterAttack={monsterdata[0].base.Attack}
            />}
            {this.state.monsterRemainingHp <= 0 && <DefeatMonsterDialogueBox
                monster={monsterdata[0].type}
            />}

        </div>
    }
}


export default BattleDisplay