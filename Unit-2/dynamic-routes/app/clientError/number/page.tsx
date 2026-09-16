"use client";

import { useState } from "react";

export default function Num() {
    const [value, setValue] = useState<number>(10);

    function checkNumber() {
        try {
            if (value > 5) {
                throw new Error("Number is greater than 5");
            }

            alert("Number is okay!");
        } catch (error) {
            alert("Error: Number is too big!");
        }
    }

    return (
        <div>
            <h1>Number Example</h1>

            <h2>Value: {value}</h2>

            <button
                onClick={() => setValue(value + 1)}
                style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "10px 20px",
                    margin: "5px",
                    fontSize: "16px",
                    cursor: "pointer",
                    border: "1px solid black",
                    borderRadius: "5px"
                }}
            >
                Increment
            </button>

            <button
                onClick={() => setValue(value - 1)}
                style={{
                    backgroundColor: "red",
                    color: "white",
                    padding: "10px 20px",
                    margin: "5px",
                    fontSize: "16px",
                    cursor: "pointer",
                    border: "1px solid black",
                    borderRadius: "5px"
                }}
            >
                Decrement
            </button>

            <button
                onClick={checkNumber}
                style={{
                    backgroundColor: "blue",
                    color: "white",
                    padding: "10px 20px",
                    margin: "5px",
                    fontSize: "16px",
                    cursor: "pointer",
                    border: "1px solid black",
                    borderRadius: "5px"
                }}
            >
                Check Number
            </button>
        </div>
    );
}