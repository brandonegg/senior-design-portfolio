import tempData from "../../../public/backdrops/tempdataFlowChart.jpg";
import tempBox from "../../../public/backdrops/tempBox.jpg";
import getReq from "../../../public/backdrops/httpGetRequestFlowchart.jpg";
import flowTemp from "../../../public/backdrops/FlowchartTempSensor.jpg";
import txtMessage from "../../../public/backdrops/txtMessageFlowChart.jpg";
import { NavBar } from "~/components/header";

export default function TempProbeProjectPage() {
  return (
    <div
      style={{
        backgroundColor: "#FFCBA4",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "2rem",
      }}
    >
      <NavBar />
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          marginTop: "4rem",
          marginBottom: "1rem",
        }}
      >
        Temperature Probe Lab
      </h1>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "1rem 0",
        }}
      >
        Introduction
      </h2>
      <p
        style={{
          fontSize: "1rem",
          margin: "1rem 0",
          textAlign: "center",
          maxWidth: "800px",
        }}
      >
        In this laboratory exercise, the goal was to design a
        temperature-measuring system with a web interface. It contained a
        computer utilized for user interface, display, and control. A
        thermometer sensor that was about 2m long, and capable of withstanding
        some force. A third box contained a display to read out the temperature
        measured, a button, a battery, and a power switch.
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <img
          src={tempBox}
          alt="Image 3"
          style={{ width: "800px", marginRight: "1rem", marginBottom: "1rem" }}
        />
      </div>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "1rem 0",
        }}
      >
        Design Process
      </h2>
      <p
        style={{
          fontSize: "1rem",
          margin: "1rem 0",
        }}
      >
        Below is the design flowchart utilized to construct our temperature box
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "2rem",
        }}
      >
        <img
          src={flowTemp}
          alt="Image 1"
          style={{ width: "400px", marginRight: "2rem" }}
        />
      </div>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "1rem 0",
        }}
      >
        Images
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src={tempData}
          alt="Image 2"
          style={{ width: "600px", marginRight: "1rem", marginBottom: "1rem" }}
        />
        <img
          src={getReq}
          alt="Image 4"
          style={{ width: "600px", marginRight: "1rem", marginBottom: "1rem" }}
        />
        <img
          src={txtMessage}
          alt="Image 5"
          style={{ width: "600px", marginBottom: "1rem" }}
        />
      </div>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          margin: "1rem 0",
        }}
      >
        Links
      </h2>
      <p
        style={{
          fontSize: "1rem",
          margin: "1rem 0",
          textAlign: "center",
          maxWidth: "800px",
          fontWeight: "bold",
          color: "purple",
        }}
      >
        <p>
          <a href="https://github.com/brandonegg/tempProbe">GitHub</a>
        </p>
        <p>
          <a href="https://docs.google.com/document/d/18lWFbsJdO7S7cYBTHRVicrGnA-bmipCV3nlR_OmbQhU/edit?usp=sharing">
            Lab Report
          </a>
        </p>
      </p>
    </div>
  );
}
