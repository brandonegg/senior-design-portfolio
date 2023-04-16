/**
 * Display project info summary for senior design
 */
function ProjectSection() {
  return (
    <section style={{
      backgroundImage: `url("/backdrops/electronics-lab.jpg")`,
      backgroundPosition: `center`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    }}id="projects" className="snap-center snap-always h-full">
      <div style={{
        WebkitBackdropFilter: `blur(15px)`,
        backdropFilter: 'blur(15px)',
      }} className="h-full w-full">
      </div>
    </section>
  );
}

export {
  ProjectSection
};
