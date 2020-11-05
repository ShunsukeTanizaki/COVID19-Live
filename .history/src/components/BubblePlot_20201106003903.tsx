import React from "react";
import { Bubble } from "react-chartjs-2";

const data = {
    datasets: [
        {
            babel: "React",
            backgloundColor: "#4160e1",
            borderColor: "transparent",
            data: [{ x: 20, y: 866, r: 635000 / 100000 }]
        },
        {
            babel: "Angular",
            backgloundColor: "#c71585",
            borderColor: "transparent",
            data: [{ x: 30, y: 3, r: 410000 / 100000 }]
        }
    ]
};

const BubblePlot: React.FC = () => {
    return <div></div>;
};

export default BubblePlot;
