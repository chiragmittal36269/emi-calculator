import React from "react";

function Input({ type, title, value, step, min, max, onChange }) {
    const formattedNumber = new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    }).format(value);

    return (
        <div className="inputs">
            <label htmlFor={type} className="title">
                {title}
            </label>
            <label htmlFor={type} className="value">
                {/* {type === "interest" ? "" : ""}{" "} */}
                {/* {type === "interest" ? value : numberToWords.toWords(value)} */}
                {type === "interest" ? value : formattedNumber}
                {/* {type === "interest" ? "" : " indian rupees only"} */}
                {type === "interest" ? "%" : ""}
            </label>
            <input type="text" value={value} onChange={onChange} />
            <input
                type="range"
                id={type}
                step={step}
                min={min}
                max={max}
                value={value}
                onChange={onChange}
            />
            <div className="ranges">
                <p className="min-val">
                    {type === "interest" ? "" : "₹"} {min}
                    {type === "interest" ? "%" : ""}
                </p>
                <p className="max-val">
                    {type === "interest" ? "" : "₹"} {max}
                    {type === "interest" ? "%" : ""}
                </p>
            </div>
        </div>
    );
}

export default Input;
