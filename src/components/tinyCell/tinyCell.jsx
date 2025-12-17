import './tinyCell.css'
import { getColor } from "../../helper";

const TinyCell = ( { data } ) => {

    const color = getColor(data?.state);
    const letter = data?.letter;

    return (
        <div
            className="tinyCell"
            style={{
                backgroundColor: color
            }}
        >
            <h1>{letter}</h1>
        </div>
    );
};

export default TinyCell;