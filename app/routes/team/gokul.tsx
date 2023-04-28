import { NavBar } from "~/components/header";
import gokulPage from "../../../public/profiles/gokulPage.jpg";
import { CommentBox } from "~/components/comments";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export function loader() {
  return json({
    ENV: {
      COMMENTBOX_PROJECT_ID: process.env.COMMENTBOX_PROJECT_ID,
    },
  });
}

export default function Gokul() {
  const data = useLoaderData<typeof loader>();

  return (
    <div
      style={{
        backgroundColor: "#FFCBA4",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={gokulPage}
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
            Gokul Thangavel
          </h1>
          <p>
            <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
              I'm currently a senior studying Computer Science and Engineering
              at the University of Iowa.
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
                <span style={{ fontWeight: "bold" }}>Chess:</span> I've been
                playing chess for over 15 years and have achieved the title of
                Chess expert
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>Flag Football:</span> In
                the fall, I play intramural flag football with a group of
                friends. It's a great time and I have created a lot of cool
                memories!
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>Reading:</span> I recently
                got into reading books, currently I'm reading{" "}
                <em>Atomic Habits</em> and <em>Thinking, Fast and Slow</em>.
                Feel free to comment book recommendations!
              </li>
            </ul>
          </p>
        </div>
      </div>
      {/* <CommentBox projectId={data.ENV.COMMENTBOX_PROJECT_ID} /> */}
    </div>
  );
}
