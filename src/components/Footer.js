import logo from "../assets/logo_sht.svg";
// import tt from "../assets/TT@1x.svg";
// import fb from "../assets/IG@1x.svg";
// import ig from "../assets/FB@1x.svg";

const Footer = () => {
  return (
    <footer id="contact" className="bg-white px-3 py-4 w-full">
      <div className="w-full md:w-5/6 2xl:w-3/4 3xl:w-7/12 md:mx-auto lg:flex">
        <div className="flex items-center mb-3 lg:mb-0 lg:w-7/12 2xl:w-2/3">
          <img className="mr-5" src={logo} alt="" />
          <p className="font-bold text-base text-blue-main">
            &copy; 2021 ŠKOLA HOKEJOVÝCH TALENTŮ & ESPORTS.CZ, S.R.O.
          </p>
        </div>
        <div className="md:flex md:items-center lg:justify-between 2xl:w-1/3">
          <p className="mb-3 md:mb-0 md:mr-5 lg:w-8/12 text-sm text-blue-main">
            +420 777 825 223 / info@skolatalentu.cz
          </p>
          {/* <div className="flex space-x-3">
            <a href="#" target="_blank">
              <img src={fb} alt="" />
            </a>
            <a href="#" target="_blank">
              <img src={ig} alt="" />
            </a>
            <a href="#" target="_blank">
              <img src={tt} alt="" />
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
