import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import thermometerIcon from "../../../public/projects/thermometer.svg";
import laserIcon from "../../../public/projects/laser-symbol.svg";

interface ProjectSummary {
  title: string;
  description: string;
  link: string;
  icon: string;
}

const projects: ProjectSummary[] = [
  {
    title: "Wireless Temperature Probe",
    description:
      "A compact temperature probe which connects over WiFi to a computer for remote monitoring.",
    link: "",
    icon: thermometerIcon,
  },
  {
    title: "IR Safety Monitor",
    description:
      "A safety device used for notifying operators when an object has entered a restricted area.",
    link: "",
    icon: laserIcon,
  },
];

function ProjectSummary({ summary }: { summary: ProjectSummary }) {
  return (
    <div className="mx-auto flex flex-col space-y-4 h-[320px]">
      <img
        className="mx-auto p-4 bg-black rounded-xl h-24 w-24 drop-shadow-lg"
        src={summary.icon}
      />
      <div className="text-center mx-auto space-y-4 w-96">
        <h1 className="text-4xl text-white">{summary.title}</h1>
        <p className="text-lg text-neutral-300">{summary.description}</p>
      </div>
      <button className="space-x-4 px-4 py-2 rounded-xl bg-yellow-200 border border-neutral-900 drop-shadow-xl hover:drop-shadow-none transition duration-200 mx-auto">
        <span className="font-semibold">Learn More</span>
        <ArrowUpRightIcon className="my-auto w-4 inline-block" />
      </button>
    </div>
  );
}

function ProjectSelector({
  selectedIndex,
  setSelectedIndex,
  index,
  summary,
}: {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number;
  summary: ProjectSummary;
}) {
  if (selectedIndex === index) {
    return (
      <div className="flex flex-row bg-black border border-white rounded-2xl p-2 space-x-2 w-72">
        <img
          className="p-2 bg-neutral-300 rounded-xl w-16 h-16 drop-shadow-lg"
          src={summary.icon}
        />
        <h1 className="grow my-auto text-white text-center">{summary.title}</h1>
      </div>
    );
  }

  const onClick = () => {
    setSelectedIndex(index);
  };

  return (
    <button
      onClick={onClick}
      className="drop-shadow-xl flex flex-row bg-white border border-black rounded-2xl p-2 space-x-2 w-72"
    >
      <img
        className="p-2 bg-black rounded-xl w-16 h-16 drop-shadow-lg"
        src={summary.icon}
      />
      <h1 className="grow my-auto text-neutral-800 text-center">
        {summary.title}
      </h1>
    </button>
  );
}

/**
 * Display project info summary for senior design
 */
function ProjectSection() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <section id="projects" className="snap-center snap-always h-full relative">
      <div
        style={{
          backgroundImage: `url("/backdrops/electronics-lab.jpg")`,
          backgroundPosition: `center`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.7,
        }}
        className="absolute top-0 left-0 right-0 bottom-0"
      ></div>
      <div
        style={{
          WebkitBackdropFilter: `blur(10px)`,
          backdropFilter: "blur(10px)",
        }}
        className="h-full w-full grid place-items-center"
      >
        <div className="flex flex-col space-y-8">
          <div className="text-center">
            <h2 className="text-yellow-300 text-xl font-semibold">
              Hardware and Software
            </h2>
            <h1 className="text-5xl font-bold">PROJECTS</h1>
          </div>
          <ProjectSummary summary={projects[selectedIndex]} />
          <div className="mx-auto flex flex-row space-x-4">
            {projects.map((project, index) => {
              return (
                <ProjectSelector
                  key={index}
                  index={index}
                  summary={project}
                  setSelectedIndex={setSelectedIndex}
                  selectedIndex={selectedIndex}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export { ProjectSection };
