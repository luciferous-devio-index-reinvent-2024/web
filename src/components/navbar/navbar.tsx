import Styles from "./navbar.module.css";
import classNames from "classnames";
import { useState, SetStateAction, Dispatch } from "react";

export type NavbarMenuItem = {
  text: string;
  onClick: () => void;
};

type Props = {
  menuItems?: NavbarMenuItem[];
};

export function Navbar(props: Props) {
  const menuItems = props.menuItems ?? [];
  const [showBurger, setShowBurger] = useState(false);

  const burger =
    menuItems.length === 0 ? null : (
      <a
        role="button"
        className={classNames("navbar-burger", { "is-active": showBurger })}
        aria-label="menu"
        aria-expanded="false"
        onClick={() => setShowBurger(!showBurger)}
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    );

  return (
    <nav
      className="navbar is-black is-spaced"
      role="navigation"
      aria-label="main navigation"
      style={{ width: "100%" }}
    >
      <div className="navbar-brand">
        <h2 className={classNames("navbar-item", Styles.title)}>
          Developers.IO re:Invent 2024 索引
        </h2>
        {burger}
      </div>
      <NavbarMenu
        menuItems={menuItems}
        showBurger={showBurger}
        setShowBurger={setShowBurger}
      />
    </nav>
  );
}

function NavbarMenu(props: {
  menuItems: NavbarMenuItem[];
  showBurger: boolean;
  setShowBurger: Dispatch<SetStateAction<boolean>>;
}) {
  if (props.menuItems.length === 0) {
    return true;
  }
  const menuClass = classNames("navbar-menu", {
    "is-active": props.showBurger,
  });
  if (props.showBurger) {
    const items = props.menuItems.map((x) => (
      <a
        className="navbar-item"
        onClick={() => {
          props.setShowBurger(false);
          x.onClick();
        }}
      >
        {x.text}
      </a>
    ));
    return (
      <div className={menuClass}>
        <div className="navbar-end">{items}</div>
      </div>
    );
  } else {
    const buttons = props.menuItems.map((x) => (
      <button
        type="button"
        className="button"
        key={x.text}
        onClick={() => {
          props.setShowBurger(false);
          x.onClick();
        }}
      >
        {x.text}
      </button>
    ));
    return (
      <div className={menuClass}>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">{buttons}</div>
          </div>
        </div>
      </div>
    );
  }
}
