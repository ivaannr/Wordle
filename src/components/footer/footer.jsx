import React, { useEffect } from "react";
import './footer.css'
import TinyCell from "../tinyCell/tinyCell";

export default function Footer({ lettersData = [] }) {

    const rows = [];
    let currentRow = [];

    lettersData.forEach(data => {
        currentRow.push(data);
        if (currentRow.length === 12) {
            rows.push(currentRow);
            currentRow = [];
        }
    });

    if (currentRow.length > 0) {
        rows.push(currentRow);
    }

    const renderRow = (row) =>
        row.map((data, index) => (
            <TinyCell
                key={index}
                data={data}
            />
        ));

    return (
        <div id="footer">
            {rows.map((row, rowIndex) => (
                <div className="footerContainer" key={rowIndex}>
                    <div className="footerRow">
                        {renderRow(row)}
                    </div>
                </div>
            ))}
        </div>
    );
}