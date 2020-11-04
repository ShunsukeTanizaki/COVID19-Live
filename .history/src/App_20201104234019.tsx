import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Line } from "react-chartjs-2";
import LinePlot from "./components/LinePlot";

function App() {
    return (
        <div className="App">
            <LinePlot />
        </div>
    );
}

export default App;
