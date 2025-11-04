import React from "react";
import './Keyboard.css'
import ButtonCell from "../cell-button/CellButton";

export default function Keyboard(props) {
    return (
        <>
            <div className="keyboard">
                <div className="row">
                    <ButtonCell letter="Q" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="W" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="E" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="R" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="T" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                </div>
                <div className="row">
                    <ButtonCell letter="Y" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="U" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="I" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="O" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="P" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="A" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                </div>
                <div className="row">
                    <ButtonCell letter="S" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="D" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="F" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="G" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="H" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="J" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                </div>
                <div className="row">
                    <ButtonCell letter="K" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="L" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="Ñ" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="Z" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="X" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="C" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                </div>
                <div className="row">
                    <ButtonCell letter="V" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="B" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="N" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                    <ButtonCell letter="M" letters={props.letters} setLetters={props.setLetters} length={props.length} />
                </div>
                <div className="row">
                    <ButtonCell
                    
                        letter="✓"
                        letters={props.letters}
                        setLetters={props.setLetters}
                        currentWordIndex={props.currentWordIndex}
                        setCurrentWordIndex={props.setCurrentWordIndex}
                        setLettersData={props.setLettersData}
                        matches={props.matches}
                        submitWord={true}

                    />
                    <ButtonCell
                        letter="⬅"
                        letters={props.letters}
                        setLetters={props.setLetters}
                        remove={true}
                    />
                </div>

            </div>
        </>
    );
}