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
      <div className="bg-redBg h-88 w-full">
        <div className="h-full px-3">
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dzbMitB0BGY?rel=0&controls=1&autoplay=0&mute=0&start=0"
            frameBorder="0"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>
      </div>

      {/* SECOND SECTION */}
      <div id="about" className="px-3 py-10 w-full flex flex-col items-center">
        <div className="relative mb-8">
          <img className="mt-5" src={mainImg} alt="" loading="lazy" />
        </div>
        <div>
          <h3 className="text-red-main text-3xl font-bold mb-2">
            ŠKOLA HOKEJOVÝCH TALENTŮ
          </h3>
          <p className="font-normal text-base">
            Představujeme vám nový projekt{" "}
            <span className="font-bold">hokejových tréninků a workshopů</span>{" "}
            pro mladé hokejisty ve věku 5.-8. třídy základních škol, vedené
            sportovními trenéry a odborníky. Tým je doplněn o{" "}
            <span className="font-bold">trenéry partnerských klubů</span>.
            Hlavním trenérem není pouze <span className="font-bold">hokej</span>
            , ale i <span className="font-bold">rozvoj osobnosti</span> mladých
            hřáčů na základě přednášek a workshopů. Akce se uskuteční na zimních
            stadionech pertnerských klubů.
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
      <div
        id="content"
        className="w-full px-3 py-10 bg-gray-100 flex flex-col space-y-5"
      >
        <div className="bg-white shadow">
          <div>
            <img src={activityImage} alt="" />
            <h3 className="text-3xl text-blue-main font-bold w-max py-2 px-4">
              HOKEJ0VÉ DOVEDNOSTI
            </h3>
          </div>
          <div className="p-4 pt-2">
            <div className="border-b flex pb-1">
              <h6 className="mr-4 font-bold text-base">BRUSLENÍ</h6>
              <p>agility, rychlost, techinka bruslení</p>
            </div>
            <div className="py-2 border-b flex">
              <h6 className="font-bold text-base mr-4">TECHNIKA</h6>
              <p>dovednosti v herních situacích, zakončení</p>
            </div>
            <div className="pt-2">
              <h6 className="font-bold text-base">HOKEJOVÉ MYŠLENÍ</h6>
            </div>
          </div>
        </div>
        <div className="bg-white shadow">
          <div>
            <img src={activityImage} alt="" />
            <h3 className="text-3xl text-blue-main font-bold w-max py-2 px-4">
              ROZVOJ OSOBNOSTI
            </h3>
          </div>
          <div className="p-4 pt-2">
            <div className="border-b flex pb-1">
              <h6 className="font-bold text-base mr-4">PSYCHOHYGIENA</h6>
              <h6 className="font-bold text-base ">
                PREVENCE ÚZKOSTI A DEPRESE
              </h6>
            </div>
            <div className="py-2 border-b flex">
              <h6 className="font-bold text-base mr-4">COACHING A MENTORING</h6>
              <h6 className="font-bold text-base mr-4">NUTRICE</h6>
              <h6 className="font-bold text-base">FYZIO</h6>
            </div>
            <div className="pt-2 flex">
              <h6 className="font-bold text-base mr-4">PRÁCE S CHYBOU</h6>
              <h6 className="font-bold text-base">LEADERSHIP</h6>
            </div>
          </div>
        </div>
      </div>

      {/* FOURTH SECTION */}
      <SliderSection />

      {/* FIFTH SECTION */}
      <div id="sponsor" className="px-3 py-10 bg-red-main">
        <div className="w-full flex items-center justify-center mb-8">
          <img className="w-2/3" src={logoKauf} alt="" />
        </div>
        <div>
          <h3 className="text-white text-3xl font-bold mb-2">
            GENERÁLNÍ PARTNEŘI
          </h3>
          <p className="text-white font-base">
            Generálním partnerem projektu je společnost{" "}
            <span className="font-bold">Kaufland Česká republika v.o.s.</span>,
            kteá se v říjnu 2020 stala oficiálním partnerem českého hokeje, a to
            je v celé jeho šíři. Kaufland je na své parnterství opravdu hrdý,
            neboť podporuje oblíbený sport napříč celou naší společností ve
            všech oblastech - nejen národní tým či hokejovou extraligu, ale také
            para hokej, ženský hokej či právě mládežnické projekty. Nový projekt
            Škola hokejových talentů je pro společnost další možností, jak
            rozšířit svou spolupráci s hokejem v České republice a podpořit tak
            mladé hráče.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
