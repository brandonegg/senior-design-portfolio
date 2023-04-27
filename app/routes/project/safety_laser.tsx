import { NavBar } from "~/components/header";
import laserIcon from "../../../public/projects/laser_lab/laser-symbol.svg";
import esp32img from "../../../public/projects/laser_lab/esp32_demo.png";

const topics = [
  "esp32",
  "platformio",
  "signal processing",
  "signal processing",
  "fourier transform",
  "arduino",
  "infrared",
  "hardware",
];

function Cover() {
  return (
    <section className="h-full flex flex-col">
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
        <div className="space-y-8">
          <div className="mx-auto w-fit space-x-4">
            <img
              className="inline-block mx-auto p-4 bg-black rounded-xl h-32 w-32 drop-shadow-lg"
              src={laserIcon}
            />
            <h1 className="inline align-middle text-white text-5xl font-bold">
              IR Safety Monitor
            </h1>
          </div>
          <div className="w-fit mx-auto">
            <p className="text-center w-[400px] text-neutral-200 text-xl">
              A safety device used for notifying operators when an object has
              entered a restricted area.
            </p>
          </div>
          <img
            alt="esp32 frequency reading"
            className="mx-auto w-80 rounded-xl drop-shadow-xl border-2 border-neutral-900"
            src={esp32img}
          />
        </div>
      </div>
    </section>
  );
}

function Topics() {
  function Topic({ label }: { label: string }) {
    return (
      <div className="inline-block p-2 bg-white rounded-xl border border-neutral-500 drop-shadow-md">
        <span className="italic text-black">{label}</span>
      </div>
    );
  }

  return (
    <div className="w-fit mx-auto space-x-4 space-y-4">
      {topics.map((topic, index) => {
        return <Topic key={index} label={topic} />;
      })}
    </div>
  );
}

function Purpose() {
  return (
    <section className="border-y border-neutral-800 p-4 sm:p-12 bg-yellow-200 justify-center">
      <div className="flex flex-col md:flex-row md:divide-x divide-neutral-900">
        <div className="p-8 sm:p-16 grow-0 text-neutral-800 font-bold text-4xl m-auto">
          <h1 className="text-center">PURPOSE</h1>
        </div>
        <div className="grow-1 md:pl-16">
          <div></div>
          <p>
            As much of industry becomes more automated, heavy machinery and
            robotics can be found almost anywhere you go whether it be
            warehouses, manufacturing plants, or even your local grocery stores.
            This machinery is powerful by design and helps eliminate dangerous
            jobs previously done by humans. However, this machinery presents its
            own dangers, as they are typically very powerful and potentially
            hazardous to individuals nearby when it is operating. The goal of
            the safety monitoring tool is to allow for easy invisible security
            walls to be placed anywhere with the power of IR light. This
            solution allows machine operators to easily set up no-go zones for
            employees, and quickly alert them if anyone happens to enter the
            area so proper safety precautions can be taken. The IR safety
            monitor needs to be fast, reliable, and work in a wide variety of
            lighting environments to help protect individuals from a dangerous
            encounter.
          </p>
        </div>
      </div>
      <div className="mt-16 text-center space-y-8">
        <h1 className="text-4xl italic underline">Topics</h1>
        <Topics />
      </div>
    </section>
  );
}

function Technologies() {
  return <section></section>;
}

export default function SafetyLaserProjectPage() {
  return (
    <main className="relative h-screen">
      <NavBar />
      <Cover />
      <Purpose />
      <Technologies />
    </main>
  );
}
