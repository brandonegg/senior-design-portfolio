import { UserIcon } from "@heroicons/react/24/solid";

interface LinkDetails {
  label: string;
  href: string;
}

interface DropdownLinkDetails extends LinkDetails {
  Icon?: JSX.Element;
}

interface NavLinkDetails extends LinkDetails {
  label: string;
  href: string;
  dropdowns?: DropdownLinkDetails[];
}

const navLinks: NavLinkDetails[] = [
  {
    label: "Home",
    href: "/#home",
  },
  {
    label: "Team",
    href: "/#team",
    dropdowns: [
      {
        label: "Orlando",
        href: "/team/orlando",
        Icon: <UserIcon className="w-4 h-4 my-auto" />,
      },
      {
        label: "Gokul",
        href: "/team/gokul",
        Icon: <UserIcon className="w-4 h-4 my-auto" />,
      },
      {
        label: "Brandon",
        href: "https://brandonegger.com/",
        Icon: <UserIcon className="w-4 h-4 my-auto" />,
      },
    ],
  },
  {
    label: "Projects",
    href: "/#projects",
    dropdowns: [
      {
        label: "Temperature Monitor",
        href: "project/temperature_probe",
      },
      {
        label: "Safety Laser",
        href: "project/safety_laser",
      },
    ],
  },
];

/**
 * Single navlink element of the navbar
 */
function NavLink({ details }: { details: NavLinkDetails }) {
  return (
    <a
      href={details.href}
      className="group relative text-white py-2 px-4 text-xl font-semibold"
    >
      {details.label}
      {details.dropdowns ? (
        <div className="hidden group-hover:block justify-center absolute end-full left-1/2 right-1/2 -translate-x-2/4 text-center w-fit">
          <div
            className=""
            style={{
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "10px solid white",
              transform: "translateY(1px)",
              margin: "auto",
            }}
          ></div>
          <div className="flex flex-col border bg-white left-1/2 right-1/2 border-black w-fit start mx-auto rounded-lg divide-y overflow-hidden">
            {details.dropdowns?.map((dropdown, index) => {
              return (
                <a
                  key={index}
                  href={dropdown.href}
                  className="w-full flex flex-row space-x-2 justify-between px-2 py-1 text-black mx-auto font-normal text-left text-sm hover:bg-neutral-400"
                >
                  <span className="whitespace-nowrap block grow">
                    {dropdown.label}
                  </span>
                  {dropdown.Icon}
                </a>
              );
            })}
          </div>
        </div>
      ) : undefined}
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
