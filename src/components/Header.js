import logo from "../assets/logo_dhsk.png";
import bgLogo from "../assets/KL_Logo_SHT_Final@1x.svg";

const Header = () => {
  return (
    <header className="bg-white h-20 w-full px-3 flex items-center justify-between border-b-2 border-blue-main">
      <div className="relative h-full w-32 flex items-center justify-center">
        <img
          className="absolute -bottom-2 opacity-20 h-full w-full"
          src={bgLogo}
          alt=""
          loading="lazy"
        />
        <img className="h-2/3" src={logo} alt="logo" loading="lazy" />
      </div>
      <div className="hidden">
        <nav>
          <ul>
            <li>O ŠKOLE</li>
            <li>NÁPLŇ</li>
            <li>TRENÉŘÍ A LEKTOŘI</li>
            <li>PARTNER</li>
            <li>KONTAKT</li>
          </ul>
        </nav>
        <div>
          <span>fb</span>
          <span>ig</span>
          <span>tt</span>
        </div>
      </div>
      <div className="p-3 cursor-pointer">
        <div className="w-8 h-1 bg-blue-main rounded"></div>
        <div className="w-8 h-1 bg-blue-main my-2 rounded"></div>
        <div className="w-8 h-1 bg-blue-main rounded"></div>
      </div>
    </header>
  );
};

export default Header;
