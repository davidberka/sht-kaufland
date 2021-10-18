import Header from "./components/Header";
import mainImg from "./assets/Group_2.png";
import activityImage from "./assets/Group.png";
import SliderSection from "./components/SliderSection";
import logoKauf from "./assets/logo_kauf.png";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full font-body relative overflow-x-hidden">
      <Header />

      {/* FIRST SECTION */}
      <div className="bg-redBg bg-cover h-88 md:h-96 lg:h-100 2xl:h-110 3xl:h-main w-full">
        <div className="h-full md:w-5/6 2xl:w-3/4 3xl:w-7/12 3xl:px-0 md:mx-auto px-3">
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/LFGi_itb3fU?rel=0&controls=1&autoplay=0&mute=0&start=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div
        id="about"
        className="px-3 3xl:px-0 md:w-5/6 2xl:w-3/4 3xl:w-7/12 md:mx-auto py-10 2xl:py-20 w-full flex flex-col lg:flex-row items-center lg:justify-between"
      >
        <div className="relative mb-8 w-72 lg:w-1/2 3xl:w-5/12 3xl:pr-20">
          <img
            className="mt-5 lg:w-5/6 3xl:w-full"
            src={mainImg}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="lg:w-1/2 3xl:w-7/12">
          <h3 className="text-red-main text-3xl 2xl:text-h3 font-bold mb-2 2xl:mb-4">
            ŠKOLA HOKEJOVÝCH TALENTŮ
          </h3>
          <p className="font-normal text-base 2xl:text-lg">
            Představujeme vám nový projekt{" "}
            <span className="font-bold">hokejových tréninků a workshopů</span>{" "}
            pro mladé hokejisty ve věku 5.-8. třídy základních škol, vedené
            sportovními trenéry a odborníky. Tým je doplněn o{" "}
            <span className="font-bold">trenéry partnerských klubů</span>.
            Hlavním zaměřením není pouze{" "}
            <span className="font-bold">hokej</span>, ale i{" "}
            <span className="font-bold">rozvoj osobnosti</span> mladých hřáčů na
            základě přednášek a workshopů. Akce se uskuteční na zimních
            stadionech partnerských klubů.
            <br />
            <br />
            Cílem není primárně vychovávat{" "}
            <span className="font-bold">sportovní hvězdy</span>. I když
            sportovní ambice škola nezapírá. Jejím úkolem je vytvořit skvělé{" "}
            <span className="font-bold">prostředí</span> pro mladé hráče v
            jejich <span className="font-bold">individuálním</span> rozvoji, ale
            i v rozvoji kolektivu, ve kterém působí. Proto se ve výběru
            účastníků neobjevují jen budoucí šampioni, ale i hráči s pozitivním
            přesahem do kolektivu, kteří pak získané návyky ostatní naučí.
            Legendou se tak může stát opravdu každý.
          </p>
        </div>
      </div>

      {/* THIRD SECTION */}
      <div id="content" className="w-full px-3 py-10 2xl:py-20 bg-gray-100">
        <div className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-5 w-full md:w-5/6 2xl:w-3/4 3xl:w-7/12 md:mx-auto">
          <div className="bg-white shadow md:w-3/4">
            <div>
              <img src={activityImage} alt="" />
              <h3 className="text-3xl 2xl:text-h3 text-blue-main bg-white md:relative md:-mt-20 md:w-1/2 md:ml-5 font-bold w-max py-2 2xl:pt-3 2xl:pb-0 px-4 2xl:pl-6">
                HOKEJ0VÉ DOVEDNOSTI
              </h3>
            </div>
            <div className="p-4 pt-2 md:px-10 md:py-6 2xl:pb-14 2xl:pt-12 2xl:px-12">
              <div className="border-b flex pb-1 2xl:pb-3">
                <h6 className="mr-4 font-bold text-base 2xl:text-xl">
                  BRUSLENÍ
                </h6>
                <p className="2xl:text-xl">
                  agility, rychlost, technika bruslení
                </p>
              </div>
              <div className="py-2 2xl:py-3 border-b flex">
                <h6 className="font-bold text-base 2xl:text-xl mr-4">
                  TECHNIKA
                </h6>
                <p className="2xl:text-xl">
                  dovednosti v herních situacích, zakončení
                </p>
              </div>
              <div className="pt-2 2xl:pt-3">
                <h6 className="font-bold text-base 2xl:text-xl">
                  HOKEJOVÉ MYŠLENÍ
                </h6>
              </div>
            </div>
          </div>
          <div className="bg-white shadow md:w-3/4">
            <div>
              <img src={activityImage} alt="" />
              <h3 className="text-3xl 2xl:text-h3 text-blue-main bg-white md:relative md:-mt-20 md:w-5/12 2xl:w-1/2 md:ml-5 font-bold w-max py-2 2xl:pt-3 2xl:pb-0 px-4 2xl:pl-6">
                ROZVOJ OSOBNOSTI
              </h3>
            </div>
            <div className="p-4 pt-2 md:px-10 md:py-6 2xl:pb-14 2xl:pt-12 2xl:px-12">
              <div className="border-b flex 2xl:space-x-5 pb-1 2xl:pb-3">
                <h6 className="font-bold text-base 2xl:text-xl mr-4">
                  PSYCHOHYGIENA
                </h6>
                <h6 className="font-bold text-base 2xl:text-xl">
                  PREVENCE ÚZKOSTI A DEPRESE
                </h6>
              </div>
              <div className="py-2 2xl:py-3 border-b flex">
                <h6 className="font-bold text-base 2xl:text-xl mr-4 2xl:mr-10">
                  COACHING A MENTORING
                </h6>
                <h6 className="font-bold text-base 2xl:text-xl mr-4 2xl:mr-10">
                  NUTRICE
                </h6>
                <h6 className="font-bold text-base 2xl:text-xl">FYZIO</h6>
              </div>
              <div className="flex 2xl:space-x-8 pt-2 2xl:pt-3">
                <h6 className="font-bold text-base 2xl:text-xl mr-4">
                  PRÁCE S CHYBOU
                </h6>
                <h6 className="font-bold text-base 2xl:text-xl">LEADERSHIP</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOURTH SECTION */}
      <SliderSection />

      {/* FIFTH SECTION */}
      <div id="sponsor" className="px-3 py-10 2xl:py-20 bg-red-main w-full">
        <div className="w-full md:w-5/6 2xl:w-3/4 3xl:w-6/12 md:mx-auto lg:flex lg:items-center lg:justity-between">
          <div className="w-full md:w-1/2 3xl:w-4/12 3xl:pr-20 md:mx-auto flex items-center justify-center mb-8 lg:mb-0">
            <img
              className="w-7/12 2xl:w-5/12 3xl:w-full"
              src={logoKauf}
              alt=""
            />
          </div>
          <div className="lg:w-1/2 3xl:w-8/12">
            <h3 className="text-white text-3xl 2xl:text-h3 font-bold mb-2 2xl:mb-4">
              GENERÁLNÍ PARTNER
            </h3>
            <p className="text-white text-base 2xl:text-lg">
              Generálním partnerem projektu je společnost{" "}
              <span className="font-bold">Kaufland Česká republika v.o.s.</span>
              , která se v říjnu 2020 stala oficiálním partnerem českého hokeje,
              a to je v celé jeho šíři. Kaufland je na své parnterství opravdu
              hrdý, neboť podporuje oblíbený sport napříč celou naší společností
              ve všech oblastech - nejen národní tým či hokejovou extraligu, ale
              také para hokej, ženský hokej či právě mládežnické projekty. Nový
              projekt Škola hokejových talentů je pro společnost další možností,
              jak rozšířit svou spolupráci s hokejem v České republice a
              podpořit tak mladé hráče.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
