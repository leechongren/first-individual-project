import React from 'react'
import playerdata from '../objects/player'
import PlayerCard from '../components/playerCard'
import monsterdata from '../objects/monster'
import MonsterCard from '../components/monsterCard'
import './battleDisplay.css'
import { Link } from 'react-router-dom'
import { DialogueBox, TieDialogueBox, DefeatMonsterDialogueBox, DefeatedDialogueBox } from '../components/dialogueBox'

class BattleDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playerAttackStat: playerdata[0].base.Attack,
            playerRemainingHp: this.props.location.HP,
            monsterRemainingHp: monsterdata[this.props.location.MonsterID].base.HP,
            triggerDialogueBox: false,
            triggerTieDialogueBox: false,
            playerExp: this.props.location.Acquired_exp,
            monsterID: this.props.location.MonsterID,
            playerMaxHP: playerdata[0].base.HP,
            Level: this.props.location.Level,
            monsterDmg: 0,
            monsterAction: "",
            playerDmg: 0,
            playerAction: "",

        }

    }

    attackDamageCalculation = (playerAttack) => {
        const monsterAttackTypes = ["slash", "stab", "shield"]
        const monsterAttack = monsterAttackTypes[Math.floor(Math.random() * 3)]

        const isPlayerWin =
            (playerAttack === "slash" && monsterAttack === "stab") ||
            (playerAttack === "stab" && monsterAttack === "shield") ||
            (playerAttack === "shield" && monsterAttack === "slash")
        const tie = (playerAttack === monsterAttack);


        if (isPlayerWin) {
            this.setState({
                monsterRemainingHp: Math.max(this.state.monsterRemainingHp - playerdata[0].base.Attack, 0),
                triggerDialogueBox: true,
                triggerTieDialogueBox: false,
                playerDmg: playerdata[0].base.Attack,
                playerAction: playerAttack,
                monsterDmg: 0,
                monsterAction: monsterAttack,

            })
        } else if (tie) {
            this.setState({
                triggerDialogueBox: false,
                triggerTieDialogueBox: true,
                playerAction: playerAttack,
                monsterAction: monsterAttack,
                playerDmg: 0,
                monsterDmg: 0,

            })
        } else {
            this.setState({
                playerRemainingHp: Math.max(this.state.playerRemainingHp - monsterdata[this.state.monsterID].base.Attack, 0),
                triggerDialogueBox: true,
                triggerTieDialogueBox: false,
                playerDmg: 0,
                playerAction: playerAttack,
                monsterDmg: monsterdata[this.state.monsterID].base.Attack,
                monsterAction: monsterAttack,

            })
        }

    }

    render() {
        const updatedStats = {
            pathname: "/battle/profile",
            HP: this.state.playerRemainingHp,
            Exp: this.state.playerExp + monsterdata[this.state.monsterID].exp,
            MonsterID: this.state.monsterID,
            Level: this.state.Level
        }
        const playerHp = this.state.playerRemainingHp
        const isPlayerAlive = playerHp > 0 ? true : false
        const monsterHp = this.state.monsterRemainingHp
        const isMonsterAlive = monsterHp > 0 ? true : false
        return <div>
            <div className="display">
                <div className="playerDisplay">
                    <PlayerCard
                        player={playerdata[0]}
                        HP={playerHp}
                        MaxHP={this.state.playerMaxHP}
                        Exp={this.state.playerExp}
                        Level={this.state.Level} />
                    {isMonsterAlive && isPlayerAlive && <div>
                        <button className='slash-button' onClick={() => this.attackDamageCalculation("slash")}>Slash</button>
                        <button className='shield-button' onClick={() => this.attackDamageCalculation("shield")}>Shield</button>
                        <button className='stab-button' onClick={() => this.attackDamageCalculation("stab")}>Stab</button>
                    </div>}
                </div>
                <div>
                    <MonsterCard monster={monsterdata[this.state.monsterID]} HP={this.state.monsterRemainingHp} />
                </div>
            </div>
            {isPlayerAlive && this.state.triggerDialogueBox && isMonsterAlive &&
                <DialogueBox
                    playerAttack={this.state.playerDmg}
                    monster={monsterdata[this.state.monsterID].type}
                    monsterAttack={this.state.monsterDmg}
                    playerAction={this.state.playerAction}
                    monsterAction={this.state.monsterAction}
                />}
            {isPlayerAlive && this.state.triggerTieDialogueBox && isMonsterAlive &&
                <TieDialogueBox
                    playerAction={this.state.playerAction} />}

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