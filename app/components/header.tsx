import { UserIcon } from "@heroicons/react/24/solid";

interface LinkDetails {
  label: string;
  href: string;
}

interface DropdownLinkDetails extends LinkDetails {
  Icon: JSX.Element;
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
        href: "/team/brandon",
        Icon: <UserIcon className="w-4 h-4 my-auto" />,
      },
    ],
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
      className="group relative text-white py-2 px-4 text-xl font-semibold"
    >
      {details.label}
      {details.dropdowns ? (
        <div className="hidden group-hover:grid place-items-center absolute end-full left-0 right-0 -translate-x-1/4 text-center w-full">
          <div
            className=""
            style={{
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: "10px solid white",
              transform: "translateY(1px)",
            }}
          ></div>
          <div className="flex flex-col border bg-white border-black w-32 start mx-auto rounded-lg divide-y overflow-hidden">
            {details.dropdowns?.map((dropdown, index) => {
              return (
                <a
                  key={index}
                  href={dropdown.href}
                  className="flex flex-row justify-between px-2 py-1 text-black font-normal text-left text-sm hover:bg-neutral-400"
                >
                  <span>{dropdown.label}</span>
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
