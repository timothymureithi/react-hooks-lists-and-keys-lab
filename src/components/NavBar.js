import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  //created navlink varible 
  const navLinks = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));

  //display of navlinks
  return (
    <nav>
    {navLinks}
    </nav>
  );
}


export default NavBar;
