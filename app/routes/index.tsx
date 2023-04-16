import { ArrowDownIcon } from '@heroicons/react/24/solid';

import uiowaLogo from '../../public/icons/uiowa-logo.jpg';

import { NavBar } from '~/components/header';
import { ProjectSection } from '~/components/home/projects';
import { TeamSection } from '~/components/home/teams';

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
    }} className="snap-always snap-center h-full">
      <div style={{
        WebkitBackdropFilter: `blur(15px)`,
        backdropFilter: 'blur(15px)',
      }} className="h-full w-full grid place-items-center relative">
        <div className="w-96 text-center">
          <img alt="University of Iowa logo" className="mb-8 mx-auto rounded-xl w-28 drop-shadow-lg" src={uiowaLogo}></img>
          <div className='space-y-2'>
            <h2 className='text-yellow-300 font-bold text-3xl sm:text-4xl'>University of Iowa</h2>
            <h1 className='text-white font-bold text-7xl sm:text-8xl'>SENIOR DESIGN</h1>
            <h2 style={{
              background: '-webkit-linear-gradient(#F8CA28, #FAC30040)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }} className='text-3xl sm:text-4xl font-bold'>2023</h2>
          </div>
          <p className='mt-8 text-gray-100'>A project portfolio and team overview for senior design at the University of Iowa</p>
        </div>

        {/** Down arrow */}
        <div className='absolute bottom-10'>
          <ArrowDownIcon className='animate-bounce text-gray-300 h-12 w-12'/>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <main className="overflow-y-scroll snap snap-y snap-mandatory h-screen relative" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <NavBar />
      <TitleSection />
      <TeamSection />
      <ProjectSection />
    </main>
  );
}
