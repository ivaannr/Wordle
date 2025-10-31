import React from "react";
import './cell.css'
import { getColor, fetchWord } from "../../helper";

export default function Cell(props) {
    const letter = props.letter
    const state = props.state

    const color = getColor(state);

    const cell = (
    <div
        className="cell"
        style={{ backgroundColor: color }}
    >
        <h1>{letter.toString().toUpperCase()}</h1>
    </div>
    );

    return cell;
}