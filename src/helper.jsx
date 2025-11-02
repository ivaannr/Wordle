import React from "react";

function getColor(state) {
    switch (state) {
        case "correct": return "#3fbf00";
        case "misplaced": return "#ff9300";
        case "miss": return "#323232ff";
    };
}

async function fetchWord() {
    const url = 'https://random-word-api.herokuapp.com/word?length=5&lang=es';
    const response = await fetch(url);
    const json = await response.json();
    console.log("Palabra:", json[0])
    return json[0];
}

function checkWordMatches(word, letters) {
    const result = []
    const wordArray = word.split("");

    letters.forEach(letter => {
        if (wordArray.includes(letter)) {
            const expectedIndex = wordArray.indexOf(letter);

            result.push(
                createRecord(
                    letter,
                    letters.index(letter),
                    getLetterState(letter, letters, expectedIndex)
                )
            );
        } else {
            result.push(
                createRecord(
                    letter, letters.index(letter), "miss"
                )
            );
        }
    });

    return result
}

function getLetterState(letter, letters, expectedIndex) {
    let state = "contains";
    if (getLetterCount(letters, letter) <= 1) {
        if (letters.index(letter) == expectedIndex) {
            return "correct";
        }
    } else {
        
    }

    return state;
}

function createRecord(letter, index, state) {
    return {
        letter: letter,
        index: index,
        state: state
    }
}

function getLetterCount(letters, letter) {
    let count = 0;

    for (let i = 0; i < letters.count(); i++) {
        if (letters[i] === letter) {
            count++;
        }
    }

    return count;
}

function replaceAccents(word) {
    const accents = ["Á", "É", "Í", "Ó", "Ú"];
    const replacements = ["A", "E", "I", "O", "U"];

    let formattedWord = "";

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        const index = accents.indexOf(letter);

        if (index !== -1) {
            formattedWord += replacements[index];
        } else {
            formattedWord += letter;
        }
    }

    return formattedWord;
}

export { fetchWord, getColor, checkWordMatches, replaceAccents }