import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import LinePlot from "./components/LinePlot";
import PiePlot from "./components/PiePlot";
import BarPlot from "./components/BarPlot";
import { Radar } from "react-chartjs-2";

function App() {
    return (
        <div className="App">
            <LinePlot />
            <PiePlot />
            <BarPlot />
            <Radar />
        </div>
    );
}

export default App;
