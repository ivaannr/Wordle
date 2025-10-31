import React from "react";
import './word.css'
import Cell from '../../components/letter-cell/cell'

export default function Word() {
    return (
        <div className="letter">
                <Cell state="correct" letter="L" />
                <Cell state="miss" letter="A" />
                <Cell state="miss" letter="R" />
                <Cell state="misplaced" letter="G" />
                <Cell state="correct" letter="O" />
        </div>
    );
}