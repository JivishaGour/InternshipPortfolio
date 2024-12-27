import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";

const MenuData = [
  { id: 1, title: "Home", link: "/home" },
  { id: 2, title: "Youtube playlists", link: "/youtube" },
  { id: 3, title: "Notes", link: "/notes" },
  { id: 4, title: "Code Files", link: "/codefile" },
  { id: 5, title: "Projects", link: "/projects" },
];

const Navbar = () => {
  return (
    <>
      <nav className=" text-white ">
        <div className="bg-stone-600 backdrop-blur-smcontainer flex justify-between py-3">
          {/* {logo section} */}
          <div>
            <img src={logo} alt="" className="max-w-[120px]" />
          </div>
          {/* {Menu section} */}
          <div>
            <ul className="flex items-center gap-5">
              {MenuData.map((item) => {
                return (
                  <li key={item.id}>
                    <NavLink
                      to={item.link}
                      className="uppercase text-xs"
                      activeClassName="font-bold underline"
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
              <li>
                <button className="border border-white px-4 py-2 hover:bg-stone-500 rounded-full">
                  Login
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
