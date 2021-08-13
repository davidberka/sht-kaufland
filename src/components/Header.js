import logo from "../assets/logo_dhsk.png";
import bgLogo from "../assets/KL_Logo_SHT_Final@1x.svg";
import tt from "../assets/TT@1x.svg";
import fb from "../assets/IG@1x.svg";
import ig from "../assets/FB@1x.svg";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const menuHandler = () => {
    setMenu(!menu);
  };

  const scrollToHandler = (id) => {
    const sectionId = document.querySelector(id);
    sectionId.scrollIntoView();

    setMenu(false);
  };

  return (
    <>
      <div className={`${menu ? "" : "hidden"} absolute w-screen h-screen`} />
      <header className="bg-white h-20 lg:h-24 w-full px-3 border-b-2 lg:border-b-4 border-blue-main">
        <div className="w-full h-full lg:w-5/6 2xl:w-3/4 3xl:w-7/12 lg:mx-auto flex items-center justify-between">
          <div className="relative h-full w-32 lg:w-40 flex items-center justify-center">
            <img
              className="absolute -bottom-2 opacity-20 h-full w-full"
              src={bgLogo}
              alt=""
              loading="lazy"
            />
            <img className="h-2/3" src={logo} alt="logo" loading="lazy" />
          </div>
          <div
            className={`${
              menu ? "translate-x-0" : "translate-x-full lg:translate-x-0"
            } transform transition-transform duration-300 w-2/3 md:w-5/12 lg:w-full h-screen lg:h-24 absolute lg:relative top-0 right-0 bg-gray-200 lg:bg-transparent z-20 flex flex-col lg:flex-row items-center justify-around lg:justify-end`}
          >
            <nav className="h-2/3">
              <ul className="h-full flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-4 2xl:space-x-6 lg:w-full lg:items-center justify-center">
                <li
                  onClick={() => scrollToHandler("#about")}
                  className="font-bold text-xl text-blue-main hover:text-red-main cursor-pointer"
                >
                  O ŠKOLE
                </li>
                <li
                  onClick={() => scrollToHandler("#content")}
                  className="font-bold text-xl text-blue-main hover:text-red-main cursor-pointer"
                >
                  NÁPLŇ
                </li>
                <li
                  onClick={() => scrollToHandler("#coaches")}
                  className="font-bold text-xl text-blue-main hover:text-red-main cursor-pointer"
                >
                  TRENÉŘI A LEKTOŘI
                </li>
                <li
                  onClick={() => scrollToHandler("#sponsor")}
                  className="font-bold text-xl text-blue-main hover:text-red-main cursor-pointer"
                >
                  PARTNER
                </li>
                <li
                  onClick={() => scrollToHandler("#contact")}
                  className="font-bold text-xl text-blue-main hover:text-red-main cursor-pointer"
                >
                  KONTAKT
                </li>
              </ul>
            </nav>
            <div className="flex space-x-3 lg:ml-10">
              <a href="#" target="_blank">
                <img src={fb} alt="" />
              </a>
              <a href="#" target="_blank">
                <img src={ig} alt="" />
              </a>
              <a href="#" target="_blank">
                <img src={tt} alt="" />
              </a>
            </div>
          </div>
          <div
            className="p-3 cursor-pointer z-20 lg:hidden"
            onClick={menuHandler}
          >
            <div className="w-8 h-1 bg-blue-main rounded"></div>
            <div className="w-8 h-1 bg-blue-main my-2 rounded"></div>
            <div className="w-8 h-1 bg-blue-main rounded"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
