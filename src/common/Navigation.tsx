import { AnimateSharedLayout, motion } from "framer-motion";
import { useParams, useLocation } from "react-router-dom";
import { isActiveLink } from "../lib/utils";

const links: { name: string; href: string }[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Animate",
    href: "/animate",
  },
  {
    name: "Sentry",
    href: "/sentry",
  },
];

const Navigation = (): JSX.Element => {
  const location = useLocation();

  return (
    <nav
      className="flex"
      style={{ display: "flex", justifyContent: "space-around" }}
    >
      {links.map(({ name, href }) => (
        <a
          key={name}
          href={href}
          className="mr-6 sm:mr-8 flex flex-col relative"
        >
          {name}
          {isActiveLink(href, location.pathname) && (
            <motion.div
              layoutId="navigation-underline"
              className="navigation-underline"
              animate
            />
          )}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
