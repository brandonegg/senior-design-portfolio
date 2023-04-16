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
    <section className="snap-y h-full">

    </section>
  );
}

/**
 * Display team introduction for senior design.
 */
function TeamSection() {
  return (
    <section className="snap-y h-full">

    </section>
  );
}

/**
 * Display project info summary for senior design
 */
function ProjectSection() {
  return (
    <section className="snap-y h-full">

    </section>
  );
}

export default function Index() {
  return (
    <main className="h-screen" style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <TitleSection />
    </main>
  );
}
