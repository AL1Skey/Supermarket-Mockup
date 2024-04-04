import React from "react";
import Menu from "./Menu";
const Navbar = () => {
  return (
    <nav className="bg-primary w-full flex items-center justify-evenly p-3">
      <header>
        Supermarket
      </header>
      <form action="" method="get">
        <input type="text" className="bg-white border border-1 border-black rounded-lg  px-3" placeholder="search" />
      </form>
      <ul className="flex justify-end gap-10 items-center">
        {["Home", "About", "Job", "Products"].map((text) => {
          if (text == "Products") {
            return (
              <Menu items={[ "Fruits", "Vegetables", "Vegan", "Toys"]}>{text}</Menu>
            );
          } else {
            return (
              <li>
                <a href={"#" + text}>{text}</a>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
