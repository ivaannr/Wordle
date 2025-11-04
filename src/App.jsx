import './App.css'
import { useState, useEffect } from 'react'
import { fetchWord, getWordMatches, replaceAccents } from './helper'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import Stack from './Stack'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import MainContainer from './components/main-container/main-container'
import Keyboard from './components/keyboard/keyboard'

export default function App() {
  const [length, setLength] = useState(5);
  const [lettersData, setLettersData] = useState([])
  const [currentWordIndex, setCurrentWordIndex] = useState(-1)
  const [letters, setLetters] = useState(new Stack())
  const [word, setWord] = useState("");
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchWordAsync = async () => {
      const w = await fetchWord();
      setWord(w);
    };

    fetchWordAsync();
  }, []);


  useEffect(() => {



    console.log("Letters cambió: ", letters.print());
    const formattedWord = replaceAccents(word.toUpperCase());

    setMatches(getWordMatches(formattedWord, letters));
    console.log("Resultado:", matches)

  }, [letters]);




  return (
    <>
      <Header />

      <MainContainer
        letters={letters}
        setLetters={setLetters}
        currentWordIndex={currentWordIndex}
        matches={matches}
        lettersData={lettersData}
        length={length}
      />

      <Keyboard
        letters={letters}
        setLetters={setLetters}
        currentWordIndex={currentWordIndex}
        setCurrentWordIndex={setCurrentWordIndex}
        setLettersData={setLettersData}
        length={length}
        matches={matches}
      />

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        limit={3}
        pauseOnHover
        theme="dark"
      />
    </>
  )
}