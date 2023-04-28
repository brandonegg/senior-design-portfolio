import { NavBar } from "~/components/header";
import orlandoPage from "../../../public/profiles/orlandoPage.jpg";
import { CusDiscussion } from "~/components/comments";

function OrlandoBlog() {
  return (
    <div className="m-4 flex flex-col md:flex-row space-y-4 md:space-x-12">
      <div className="mx-auto shrink-0 rounded-full w-64 h-64 overflow-hidden">
        <img
          className="object-cover h-full"
          src={orlandoPage}
          alt="Gokul playing chess"
        />
      </div>
      <div className="shrink flex flex-col space-y-6 h-fit my-auto">
        <section className="space-y-2">
          <h1 className="text-6xl font-bold">Orlando Reyes</h1>
          <h2 className="font-bold text-xl">
            I'm currently a senior studying Electrical Engineering at the
            University of Iowa.
          </h2>
        </section>
        <section>
          <h3 className="font-bold text text-amber-900 text-xl">
            Apart from my studies, here are some things that I enjoy doing in my
            free time:
          </h3>
          <ul>
            <li>
              <b>Cooking:</b> I've been cooking from-scratch meals for my
              friends and family for about 10 years.
            </li>
            <li>
              <b>Exercise:</b> I have played baseball and various raquet sports
              all my life and have been going to the gym regularly.
            </li>
            <li>
              <b>Movies:</b> My roomate and I watch through entire movie
              franchises (it's funnier when they're bad), currently we're
              watching the entire extended Lord of the Rings series. Feel free
              to comment movie series recommendations!
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default function Orlando() {
  return (
    <main className="grid content-between justify-items-center min-h-screen bg-green-200">
      <NavBar />
      <div className="space-y-12 mt-20 sm:mt-28 max-w-6xl">
        <OrlandoBlog />
      </div>
      <div className="w-full sm:w-[600px] lg:w-[800px] p-4 max-w-6xl space-y-8 mx-auto mt-12 bg-white border-black border-t border-x rounded-t-xl shadow-xl">
        <h1 className="text-4xl font-bold">Discussion</h1>
        <CusDiscussion id="orlando-page" title="Orlando's Biography" />
      </div>
    </main>
  );
}
