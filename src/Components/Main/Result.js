import { ArcElement, Chart, Legend, Title, Tooltip } from "chart.js";
import React from "react";
import { Pie } from "react-chartjs-2";

Chart.register(Tooltip, Legend, ArcElement, Title);

const option = {};

function Result({ data }) {
    const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;

    const totalLoanMonths = loanTerm * 12;
    const interestPerMonth = interestRate / 100 / 12;
    const monthlyPayment =
        (loanAmount *
            interestPerMonth *
            (1 + interestPerMonth) ** totalLoanMonths) /
        ((1 + interestPerMonth) ** totalLoanMonths - 1);
    const totalInterestGenerated =
        monthlyPayment * totalLoanMonths - loanAmount;

    const pieChartData = {
        labels: ["Principle", "Interest", "Monthly Payment", "Down Payment"],
        datasets: [
            {
                label: "Ratio of Principle and Interest",
                data: [
                    homeValue,
                    totalInterestGenerated,
                    monthlyPayment,
                    downPayment,
                ],
                backgroundColor: [
                    "rgb(255, 171, 146)",
                    "rgb(95, 189, 255)",
                    "rgb(123, 102, 255)",
                    "rgb(150, 239, 255)",
                ],
                borderColor: [
                    "rgba(255, 171, 146, 0.2)",
                    "rgba(95, 189, 255, 0.2)",
                    "rgba(123, 102, 0.2)",
                    "rgba(150, 239, 255, 0.2)",
                ],
                borderWidth: 1,
                hoverOffset: 4,
            },
        ],
    };

    return (
        <div className="container result">
            <h2>
                Monthly Payment: <span>{monthlyPayment.toFixed(3)}</span>
            </h2>
            <div className="chart">
                <Pie data={pieChartData} option={option} />
            </div>
        </div>
    );
}

export default Result;
