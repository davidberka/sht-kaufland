import logo from "../assets/logo_sht.svg";
import tt from "../assets/TT@1x.svg";
import fb from "../assets/IG@1x.svg";
import ig from "../assets/FB@1x.svg";

const Footer = () => {
  return (
    <footer className="bg-white px-3 py-4">
      <div className="flex items-center mb-3">
        <img className="mr-5" src={logo} alt="" />
        <p className="font-bold text-base text-blue-main">
          &copy; 2021 ŠKOLA HOKEJOVÝCH TALENTŮ & ESPORTS.CZ, S.R.O.
        </p>
      </div>
      <div>
        <p className="mb-3 text-sm text-blue-main">
          +420 777 825 223 / info@skolatalentu.cz
        </p>
        <div className="flex space-x-3">
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
    </footer>
  );
};

export default Footer;
