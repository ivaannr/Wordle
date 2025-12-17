import React, { useEffect } from "react";
import './footer.css'
import TinyCell from "../tinyCell/tinyCell";

export default function Footer({ lettersData = [] }) {

    return (
        <div id="footer">
            {lettersData.map((data, index) => (
                <TinyCell
                    key={index}
                    data={data}
                />
            ))}
        </div>
    );
}