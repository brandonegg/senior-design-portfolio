import uiowaLogo from '../../public/icons/uiowa-logo.jpg';

export function headers({
  loaderHeaders,
  parentHeaders,
}: {
  loaderHeaders: Headers;
  parentHeaders: Headers;
}) {
  console.log(
    "This is an example of how to set caching headers for a route, feel free to change the value of 60 seconds or remove the header"
  );
  return {
    // This is an example of how to set caching headers for a route
    // For more info on headers in Remix, see: https://remix.run/docs/en/v1/route/headers
    "Cache-Control": "public, max-age=60, s-maxage=60",
  };
}

/**
 * Main intro title
 */
function TitleSection() {
  return (
    <section id="home" style={{
      backgroundImage: `url("/backdrops/seaman-center.jpg")`,
      backgroundPosition: `center`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }} className="snap-y h-full">
      <div style={{
        backdropFilter: 'blur(10px)',
      }} className="h-full w-full grid place-items-center">
        <div className="w-96 text-center">
          <img alt="University of Iowa logo" className="mb-8 mx-auto rounded-xl w-28 drop-shadow-lg" src={uiowaLogo}></img>
          <div className='space-y-2'>
            <h2 className='text-yellow-300 font-bold text-4xl'>University of Iowa</h2>
            <h1 className='text-white font-bold text-8xl'>SENIOR DESIGN</h1>
            <h2 style={{
              background: '-webkit-linear-gradient(#F8CA28, #FAC30040)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }} className='text-4xl font-bold'>2023</h2>
          </div>
          <p className='mt-8 text-gray-100'>A project portfolio and team overview for senior design at the University of Iowa</p>
        </div>
      </div>
    </section>
  );
}

/**
 * Display team introduction for senior design.
 */
function TeamSection() {
  return (
    <section id="team" className="snap-y h-full bg-gradient-to-r from-indigo-500">

    </section>
  );
}

/**
 * Display project info summary for senior design
 */
function ProjectSection() {
  return (
    <section id="projects" className="snap-y h-full">

    </section>
  );
}

export default function Index() {
  return (
    <main className="h-screen" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <TitleSection />
      <TeamSection />
      <ProjectSection />
    </main>
  );
}
