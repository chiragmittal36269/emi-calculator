import React, { useState } from "react";
import Inputs from "./Input";
import "./Main.css";
import Result from "./Result";

function Main() {
    const [data, setData] = useState({
        homeValue: 3000,
        downPayment: 3000 * 0.2,
        loanAmount: 3000 * 0.8,
        loanTerm: 5,
        interestRate: 5,
    });

    const setHomeValue = (e) => {
        setData({
            ...data,
            homeValue: e.target.value,
            downPayment: e.target.value * 0.2,
            loanAmount: e.target.value * 0.8,
        });
    };

    const setDownPayment = (e) => {
        setData({
            ...data,
            downPayment: e.target.value,
            loanAmount: data.homeValue - e.target.value,
        });
    };

    const setLoanAmount = (e) => {
        setData({
            ...data,
            loanAmount: e.target.value,
            downPayment: data.homeValue - e.target.value,
        });
    };

    const setInterest = (e) => {
        setData({
            ...data,
            interestRate: e.target.value,
        });
    };

    const setTenure = (e) => {
        setData({
            ...data,
            loanTerm: e.target.value,
        });
    };

    return (
        <main>
            <div className="container">
                <Inputs
                    type="home"
                    title="Home Value"
                    value={data.homeValue}
                    onChange={setHomeValue}
                    step={1}
                    min={1000}
                    max={10000000}
                />

                <Inputs
                    type="down"
                    title="Down Payment"
                    value={data.downPayment}
                    step={100}
                    min={0}
                    max={data.homeValue}
                    onChange={setDownPayment}
                />

                <Inputs
                    type="loan"
                    title="Loan Amount"
                    value={data.loanAmount}
                    step={100}
                    min={0}
                    max={data.homeValue}
                    onChange={setLoanAmount}
                />

                <Inputs
                    type="interest"
                    title="Interest Rate"
                    value={data.interestRate}
                    step={0.01}
                    min={1}
                    max={27}
                    onChange={setInterest}
                />

                <div className="inputs">
                    <label htmlFor="tenure">Tenure</label>
                    <select
                        className="round"
                        id="tenure"
                        value={data.loanTerm}
                        onChange={setTenure}>
                        <option value="5">5 Years</option>
                        <option value="10">10 Years</option>
                        <option value="15">15 Years</option>
                        <option value="20">20 Years</option>
                        <option value="25">25 Years</option>
                    </select>
                </div>
            </div>
            <Result data={data} />
        </main>
    );
}

export default Main;
