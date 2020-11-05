import React from "react";
import { Pie, Doughnut } from "react-chartjs-2";

const data = {
    labels: ["Windows", "Mac", "Linux"],
    datasets: [
        {
            data: [90, 7, 3],
            backgroundColor: ["#4196e1", "#ff1493", "#FFCE56"],
            hoverBackgroundColor: ["#36A2BE", "#FF6384", "FFCE56"],
            borderColor: ["transparent", "transparent", "transparent"]
        }
    ]
};

const PiePlot: React.FC = () => {
    return <div></div>;
};

export default PiePlot;
