import '../word/word.css'
import OppCell from './opponentCell';

export default function OppWord({ id, data, length, opponentWordIndex, previousOpponentWords }) {

  const isWordActive = opponentWordIndex === id;
  const letters = previousOpponentWords[id]?.letters;

  if (isWordActive) {
    return (
      <div className="letter">
        {Array.from({ length }).map((_, i) => {
          return (
            <OppCell
              key={i}
              id={i}
              data={data?.letters?.[i]}
            />
          );
        })}
      </div>
    );
  } else {
    console.log(`Letters word ${id}:`, letters);
    return (
      <div className="letter">
        {Array.from({ length }).map((_, i) => {
          return (
            <OppCell
              key={i}
              id={i}
              data={letters}
            />
          );
        })}
      </div>
    );
  }
}