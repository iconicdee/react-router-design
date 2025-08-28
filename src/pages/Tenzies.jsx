import React, { useEffect, useState,useRef } from 'react'
import Die from './Die'
import Confetti from 'react-confetti'

const Tenzies = () => {
    const [dieNumber, setDieNumber] = useState(generateAllNewDice)
    const [timer,setTimer] = useState(0);
    const [isActive,setIsActive] = useState(false)
    const newGameBtnRef= useRef(null);


    
    // console.log(isActive)


    function generateAllNewDice() {
        return new Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            }))
    }

    function rollDice() {
        setDieNumber(oldDice =>
            oldDice.map(die =>
                die.isHeld
                    ? die
                    : { value: Math.ceil(Math.random() * 6), isHeld: false }
            )
        );
    }

    function resetGame() {
        setDieNumber(generateAllNewDice())
        setTimer(0)
    }
    function toggleHold(index) {
        setDieNumber(oldDice =>
            oldDice.map((die, i) =>
                i === index ? { ...die, isHeld: !die.isHeld } : die
            )
        )
    }

    // Compute gameWon directly
    const firstHeldDie = dieNumber.find(die => die.isHeld === true);
    const firstHeldValue = firstHeldDie ? firstHeldDie.value : null;
    const allHeld = dieNumber.every(die => die.isHeld === true);
    const sameValue = dieNumber.every(die => die.value === firstHeldValue);
    const gameWon = allHeld && sameValue && firstHeldValue !== null;
    
    useEffect(() => {
        if (gameWon ) {
            newGameBtnRef.current.focus();
        }
    }, [gameWon]);
    useEffect(()=>{
        let interval= null;
        if(isActive,!gameWon) {
            interval= setInterval(()=>{
                setTimer(prev=> (isActive) ? prev + 1 : 0)
            },1000)
        } else{
            setIsActive(false)
            clearInterval(interval)
        }
        return ()=> clearInterval(interval)
    },[gameWon,isActive])

    return (
        <main className='tenzies-main'>
            <button className='tenzy-button' onClick={()=>setIsActive(prev=> !prev)}>Play</button>
            {gameWon && <Confetti />}
            <div aria-live='polite' className='sr-only'>
                {gameWon && "you won,press new game"}
            </div>
            <h1 className='tenzies-title'>Tenzies</h1>
            <p className='tenzies-instruction'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            {gameWon && <h2>You won!</h2>}
            <ul className='tenzy-box'>
                {dieNumber.map((numObj, index) => (
                    <li key={index}>
                        <Die
                            value={numObj.value}
                            isHeld={numObj.isHeld}
                            onHold={() => toggleHold(index)}
                        />
                    </li>
                ))}
            </ul>
            {gameWon
                ? <button ref={newGameBtnRef} className='tenzy-button' onClick={resetGame}>New Game</button>
                : <button className='tenzy-button' onClick={rollDice}>ROLL</button>
            }
            <p className='tenzies-timer'>Time: {timer}s</p>
        </main>
    )
}

export default Tenzies
