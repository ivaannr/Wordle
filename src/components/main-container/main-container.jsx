import React from "react";
import './main-container.css'
import Word from "../word/word";

export default function MainContainer() {
    return (
        <>
            <div className="box">
                <Word />
                <Word />
                <Word />
                <Word />
                <Word />
                <Word />
            </div>
        </>
    );
}