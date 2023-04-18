interface LinkDetails {
  label: string;
  href: string;
}
interface NavLinkDetails extends LinkDetails {
  label: string;
  href: string;
  dropdowns?: LinkDetails[];
}

const navLinks: NavLinkDetails[] = [
  {
    label: "Home",
    href: "/#home",
  },
  {
    label: "Team",
    href: "/#team",
  },
  {
    label: "Projects",
    href: "/#projects",
  },
];

/**
 * Single navlink element of the navbar
 */
function NavLink({ details }: { details: NavLinkDetails }) {
  return (
    <a
      href={details.href}
      className="text-white py-2 px-4 text-xl font-semibold"
    >
      {details.label}
    </a>
  );
}

/**
 * Fixed navbar
 */
function NavBar() {
  return (
    <nav className="fixed top-0 sm:top-5 left-0 right-0 z-50">
      <div className="max-w-4xl bg-black mx-auto sm:rounded-xl drop-shadow-xl sm:border border-gray-300">
        <ul className="flex flex-row justify-center space-x-8">
          {navLinks.map((link, index) => {
            return <NavLink key={index} details={link} />;
          })}
        </ul>
      </div>
    </nav>
  );
}

export { NavBar };
