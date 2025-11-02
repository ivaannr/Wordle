import './App.css'
import { useState, useEffect } from 'react'
import { fetchWord, checkWordMatches, replaceAccents } from './helper'
import Stack from './Stack'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import MainContainer from './components/main-container/main-container'
import Keyboard from './components/keyboard/keyboard'


export default function App() {
  const [letters, setLetters] = useState(new Stack())
  const [word, setWord] = useState("");

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

    const result = checkWordMatches(formattedWord, letters);

    console.log("resultado:", result)

  }, [letters]);


  return (
    <>
      <Header />
      <MainContainer letters={letters} setLetters={setLetters} />
      <Keyboard letters={letters} setLetters={setLetters} />
      <Footer />
    </>
  )
}