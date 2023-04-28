import { NavBar } from "~/components/header";
import orlandoPage from "../../../public/profiles/orlandoPage.jpg";

export default function Orlando() {
  return (
    <main
      style={{
        backgroundColor: "#008000",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <NavBar />
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={orlandoPage}
          alt="My Image"
          style={{
            marginRight: "1rem",
            height: "300px",
            width: "300px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
        <div style={{ marginLeft: "3rem", marginBottom: "3rem" }}>
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
            Orlando Reyes
          </h1>
          <p>
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              I'm currently a senior studying Electrical Engineering at the
              University of Iowa.
            </span>
            <br />
            <br />
            <span
              style={{
                fontSize: "1.2rem",
                color: "#693A00",
                fontWeight: "bold",
              }}
            >
              Apart from my studies, here are some things that I enjoy doing in
              my free time:
            </span>
            <ul>
              <li>
                <span style={{ fontWeight: "bold" }}>Cooking:</span> I've been
                cooking from-scratch meals for my friends and family for about
                10 years.
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>Exercise:</span> I have
                played baseball and various raquet sports all my life and have
                been going to the gym regularly.
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>Movies:</span> My roomate
                and I watch through entire movie franchises (it's funnier when
                they're bad), currently we're watching the entire extended Lord
                of the Rings series. Feel free to comment movie series
                recommendations!
              </li>
            </ul>
          </p>
        </div>
      </div>
    </main>
  );
}
