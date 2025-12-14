import '../letter-cell/cell.css'
import { getColor } from "../../helper";

export default function OppCell( { id, data } ) {

    const thisLetterData = data?.[id] ?? null;

    const color = getColor(thisLetterData?.state) ?? "#1b1b1b";
    const letter = thisLetterData?.letter ?? "";

    return (
        <div
            className="cell"
            style={ {
                backgroundColor: color,
                border: `1px solid #444444`,
                borderRadius: `5px`
            } }
        >
            <h1>
                {letter}
            </h1>
        </div>
    );
}