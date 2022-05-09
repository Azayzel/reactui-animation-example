import DarkModeToggle from "./ToggleDarkMode";
import Navigation from "./Navigation";

const Header = (): JSX.Element => (
  <header
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100vw",
    }}
  >
    <a>
      <span className="show sm:hide">CH</span>
      <span className="hide sm:show">Robinson</span>
    </a>
    <div style={{ display: "flex", width: 250 }}>
      <Navigation />
      <DarkModeToggle />
    </div>
  </header>
);

export default Header;
