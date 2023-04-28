import { NavBar } from "~/components/header";
import gokulPage from "../../../public/profiles/gokulPage.jpg";
import { json } from "@remix-run/node";
import { CusDiscussion } from "~/components/comments";

export function loader() {
  return json({
    ENV: {
      COMMENTBOX_PROJECT_ID: process.env.COMMENTBOX_PROJECT_ID,
    },
  });
}

function GokulBlog() {
  return (
    <div className="m-4 flex flex-col md:flex-row space-y-4 md:space-x-12">
      <div className="mx-auto shrink-0 rounded-full w-64 h-64 overflow-hidden">
        <img
          className="object-cover h-full"
          src={gokulPage}
          alt="Gokul playing chess"
        />
      </div>
      <div className="shrink flex flex-col space-y-6 h-fit my-auto">
        <section className="space-y-2">
          <h1 className="text-6xl font-bold">Gokul Thangavel</h1>
          <h2 className="font-bold text-xl">
            I'm currently a senior studying Computer Science and Engineering at
            the University of Iowa.
          </h2>
        </section>
        <section>
          <h3 className="font-bold text text-amber-900 text-xl">
            Apart from my studies, here are some things that I enjoy doing in my
            free time:
          </h3>
          <ul>
            <li>
              <b>Chess:</b> I've been playing chess for over 15 years and have
              achieved the title of Chess expert
            </li>
            <li>
              <b>Flag Football:</b> In the fall, I play intramural flag football
              with a group of friends. It's a great time and I have created a
              lot of cool memories!
            </li>
            <li>
              <b>Reading:</b> I recently got into reading books, currently I'm
              reading Atomic Habits and Thinking, Fast and Slow. Feel free to
              comment book recommendations!
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default function Gokul() {
  return (
    <main
      className="grid content-between justify-items-center min-h-screen"
      style={{
        backgroundColor: "#FFCBA4",
      }}
    >
      <NavBar />
      <div className="space-y-12 mt-20 sm:mt-28 max-w-6xl">
        <GokulBlog />
      </div>
      <div className="w-full sm:w-[600px] lg:w-[800px] p-4 max-w-6xl space-y-8 mx-auto mt-12 bg-white border-black border-t border-x rounded-t-xl shadow-xl">
        <h1 className="text-4xl font-bold">Discussion</h1>
        <CusDiscussion id="gokul-page" title="Gokul's Biography" />
      </div>
    </main>
  );
}
