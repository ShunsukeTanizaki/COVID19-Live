import React from "react";
import { Bubble } from "react-chartjs-2";

const data = {
    datasets: [
        {
            label: "React",
            backgroundColor: "#4160e1",
            borderColor: "transparent",
            data: [{ x: 20, y: 866, r: 6350000 / 100000 }]
        },
        {
            label: "Angular",
            backgroundColor: "#c71585",
            borderColor: "transparent",
            data: [{ x: 30, y: 389, r: 410000 / 100000 }]
        },
        {
            label: "Vue",
            backgroundColor: "#008080",
            borderColor: "transparent",
            data: [{ x: 10, y: 749, r: 1320000 / 100000 }]
        }
    ]
};

const options = {
    title: {
        display: true,
        fontsize: 18,
        text: "NPM downloads comparison (global)"
    },
    scales: {
        yAxes: [
            {
                scaleLabal: {
                    display: true,
                    labelString: "Number of job offer LinkedIn (Japan)",
                    fontSize: 18
                },
                ticks: {
                    min: 0,
                    max: 1300,
                    fontSize: 14
                }
            }
        ],
        xAxes: [
            {
                scaleLabal: {
                    display: true,
                    labelString: "Learning Cost",
                    fontSize: 18
                },
                ticks: {
                    min: 5,
                    max: 35,
                    fontSize: 14
                }
            }
        ]
    }
};

const BubblePlot: React.FC = () => {
    return (
        <div>
            <Bubble data={data} options={options} />
        </div>
    );
};

export default BubblePlot;
