import React from "react";
import { Bar, HorizontalBar } from "react-chartjs-2";

const data = {
    labels: ["Mon", "Tne", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
        {
            labsl: "Demo bdr plot",
            backgroundColor: "#20b2aa",
            borderColor: "transParent",
            hoverBackgroundColor: "#5f9ea0",
            data: [50, 30, 70, 15, 50, 50, 0, 100]
        }
    ]
};

const BarPlot: React.FC = () => {
    return (
        <div>
            <Bar data={data} />
            <HorizontalBar data={data} />
        </div>
    );
};

export default BarPlot;
