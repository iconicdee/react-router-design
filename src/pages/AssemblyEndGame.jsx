import React ,{useState,useEffect}from 'react'
import {languages} from "../data"





const AssemblyEndGame = () => {
    const [guessedLetters, setGuessedLetters] = useState([]);
    const [languageList, setLanguageList] = useState(languages);
    const [wordArray, setWordArray] = useState([]);
    const [currentWord, setCurrentWord] = useState("react"); 

    const alphabet= "abcdefghijklmnopqrstuvwxyz";

    const currentWordArray= currentWord.split("")
    const alphabetArray = alphabet.split("")
    const alphabetElements = alphabetArray.map((letter, index) => {
        let bgColor = "";
        if (guessedLetters.includes(letter)) {
            bgColor = currentWordArray.includes(letter) ? "green" : "red";
        }
        return (
            <span
                style={{ backgroundColor: bgColor }}
                onClick={() => handleDisplayGuessedLetter(index)}
                className='alphabet-chip'
                key={index}
            >
                {letter.toUpperCase()}
            </span>
        );
    })
    
    
    
    function handleDisplayGuessedLetter(index) {
        const letter = alphabetArray[index];
        setGuessedLetters(prev => [...prev, letter]);
        if (!currentWordArray.includes(letter)) {
            setLanguageList(prev => prev.slice(0, -1)); 
        }
    }
   
    

    const letterElements= currentWordArray.map((letter,index)=>(<span key={index} className='word-chip'>{
        guessedLetters.includes(letter) ? letter.toUpperCase(): "_"
    }</span>)) 

    const allGuess = currentWordArray.every(letter=>guessedLetters.includes(letter))

    const maxAttempts = 9;
    const attempts = languages.length - languageList.length;
    const gameOver = allGuess || attempts >= maxAttempts;

    function handleReset() {
        setGuessedLetters([]);
    setLanguageList(languages);
    if (wordArray.length > 0) {
        const randomNumber = Math.floor(Math.random() * wordArray.length);
        setCurrentWord(wordArray[randomNumber]);
    }
}

    

    useEffect(() => {
        async function fetchRandomWords() {
            const response = await fetch("https://api.datamuse.com/words?ml=random&max=50");
            const result = await response.json();
            const resultArray = result.map(word => word.word);
            setWordArray(resultArray);
            const randomNumber = Math.floor(Math.random() * resultArray.length);
            setCurrentWord(resultArray[randomNumber]);
        }
        fetchRandomWords();
    }, []);
    
  return (
    <div className='assembly-main'>
      <header className='assembly-header'>
        <h1>Assembly:Endgame</h1>
        <p>Guess the word within 8 attempts to keep the world safe from Assembly!</p>
      </header>
      {
        gameOver ? <section className='assembly-game-status'>
        <h2>You Lose!</h2>
        <p>Try your Luck next time ❌❌❌❌❌</p>
      </section> : null
      }
      {allGuess?<section className='assembly-game-status'>
        <h2>You win!</h2>
        <p>Well done 🎉🎉🎉🎉</p>
      </section> : null}
      <section>
        <ul className='assembly-language-list'>
            {languageList.map((language,index)=>{
                return <li className='chip' style={{backgroundColor:`${language.backgroundColor}`,color:`${language.color}`}} key={index}>{language.name}</li>
            })}
        </ul>
      </section>
      <section className='word'>
        {letterElements}
      </section>
      <section className='alphabets'>
        {alphabetElements}
      </section>
      <button className='alphabet-button' onClick={handleReset}>New Game</button>
    </div>
  )
} 

export default AssemblyEndGame
