import React from "react";
import { Radar } from "react-chartjs-2";

const data = {
    labels: [
        "React",
        "Vue",
        "Angular",
        "JavaScript",
        "TypeScript",
        "Redux",
        "REST API"
    ],
    datasets: [
        {
            label: "Person A",
            backgloundColor: "rgba(179,181,198,0.2)",
            borderColor: "#008b8b",
            pointBackgloundColor: "#008b8b",
            pointBorderColor: "#fff",
            data: [100, 50, 30, 90, 50, 70, 40]
        }
    ]
};
const RaderPlot: React.FC = () => {
    return <div></div>;
};

export default RaderPlot;
