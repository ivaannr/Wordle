import './main-container.css'
import Word from '../word/word';
import UserStatsPanel from './userStatsPanel/UserStatsPanel';

export default function MainContainer({ 
  currentWordIndex, 
  currentLetterIndex, 
  length, 
  lettersData, 
  previousWords, 
  currentLetter, 
  previousLetters,
  setPreviousLetters, 
  wordCount,
  isMultiplayer,
  user
}) {

  return (
    <>
      <div className={`box ${isMultiplayer ? 'expanded' : ''}`}>
        {Array.from({ length: wordCount }).map((_, index) => {
          return (
            <Word
              key={index}
              letterID={index}
              currentWordIndex={currentWordIndex}
              lettersData={index === currentWordIndex ? lettersData : []}
              length={length}
              currentLetterIndex={currentLetterIndex}
              previousWords={previousWords}
              currentLetter={currentLetter}
              previousLetters={previousLetters}
              setPreviousLetters={setPreviousLetters}
              isMultiplayer={isMultiplayer}
            />
          )
        })}

        <UserStatsPanel active={isMultiplayer} user={user}/>
      </div>
    </>
  );
}