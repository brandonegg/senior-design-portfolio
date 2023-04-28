import { NavBar } from "~/components/header";
import laserIcon from "../../../public/projects/laser_lab/laser-symbol.svg";
import esp32img from "../../../public/projects/laser_lab/esp32_demo.png";
import signalProcessingFlow from "../../../public/projects/laser_lab/signal_processing_flow.png";
import powerupFlow from "../../../public/projects/laser_lab/powerup_flow.png";
import { CusDiscussion } from "~/components/comments";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

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
    <section className="h-screen relative flex flex-col">
      <div
        style={{
          backgroundImage: `url("/backdrops/electronics-lab.jpg")`,
          backgroundPosition: `center`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          opacity: 0.5,
          zIndex: "0",
        }}
        className="absolute top-0 left-0 right-0 bottom-0"
      ></div>
      <div
        style={{
          WebkitBackdropFilter: `blur(100px)`,
          backdropFilter: "blur(100px)",
          zIndex: "1",
        }}
        className="h-full w-full grid place-items-center"
      >
        <div className="space-y-8">
          <div className="mx-auto w-fit space-x-4">
            <img
              className="inline-block mx-auto p-4 bg-black rounded-xl h-16 w-16 sm:h-32 sm:w-32 drop-shadow-lg"
              src={laserIcon}
            />
            <h1 className="inline align-middle text-white text-3xl sm:text-5xl font-bold">
              IR Safety Monitor
            </h1>
          </div>
          <div className="w-fit mx-auto">
            <p className="text-center w-[400px] text-neutral-200 text-md sm:text-xl">
              A safety device used for notifying operators when an object has
              entered a restricted area.
            </p>
          </div>
          <img
            alt="esp32 frequency reading"
            className="mx-auto w-80 rounded-xl shadow-xl shadow-neutral-400/50 border-2 border-neutral-900"
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

function TechnicalOverview() {
  return (
    <section className="mx-auto bg-neutral-900 w-full px-8 py-16 space-y-20">
      <div className="mx-auto max-w-6xl flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <img
          className="w-full sm:w-none max-w-lg mx-auto rounded-xl shadow-lg shadow-white/50 bg-white"
          src={signalProcessingFlow}
          alt="Signal processing flow diagram"
        />
        <div className="grid place-items-center grow my-auto text-center mx-auto space-y-8">
          <div>
            <h1 className="mx-auto text-3xl font-bold text-yellow-300">
              Signal Processing to the Rescue!
            </h1>
            <p className="text-neutral-300 max-w-xl mx-auto">
              To achieve high range, stability, and precision, we decided to
              utilize our ESP32 to do some simple signal processing to analyze
              the frequency of the IR light our receiver was detecting. Based on
              the samples collected, we could leverage the fast Fourier
              transform to quickly detect the frequency and whether that
              frequency reflected the IR light transmitter frequency.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-6xl flex flex-col-reverse lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="grid place-items-center grow mt-8 lg:mt-0 grow h-fit my-auto text-center mx-auto space-y-8">
          <div>
            <h1 className="mx-auto text-3xl font-bold text-yellow-300">
              Connecting to the World!
            </h1>
            <p className="text-neutral-300 max-w-xl mx-auto">
              Thanks to the ESP32’s onboard Wi-Fi and Bluetooth module, we can
              connect to the internet directly from the device and access
              various APIs to sync the internal clock with the local time, and
              even send text messages with Twilio to notify operators when a
              safety event as occurred!
            </p>
          </div>
        </div>
        <img
          className="w-full sm:w-none max-w-lg mx-auto rounded-xl shadow-lg shadow-white/50 bg-white"
          src={powerupFlow}
          alt="Signal processing flow diagram"
        />
      </div>

      <a
        href="https://github.com/brandonegg/esp32FFT"
        className="flex flex-row space-x-2 hover:scale-110 transition duration-200 group block bg-yellow-200 p-4 text-black rounded-lg drop-shadow mx-auto w-fit"
      >
        <span className="font-semibold">View on Github</span>
        <ArrowUpRightIcon className="group-hover:translate-x-1 group-hover:-translate-y-1 ease-out duration-200 my-auto w-4 inline-block" />
      </a>
    </section>
  );
}

export default function SafetyLaserProjectPage() {
  return (
    <main>
      <div className="drop-shadow-lg">
        <NavBar />
        <Cover />
        <Purpose />
        <TechnicalOverview />
      </div>
      <div className="block p-4 max-w-4xl space-y-8 mx-auto mt-4">
        <h1 className="text-4xl font-bold">Discussion</h1>
        <CusDiscussion id="project-safety-laser" title="Project Safety Laser" />
      </div>
    </main>
  );
}
