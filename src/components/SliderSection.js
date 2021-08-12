import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PersonCard from "./PersonCard";
import personImg from "../assets/person.jpg";

const Arrow = (props) => {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  return (
    <span className={className} onClick={props.onClick}>
      {props.type === "next" ? (
        <svg
          width="20"
          height="15"
          viewBox="0 0 30 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="arrowPath"
            d="M29.0607 13.0607C29.6464 12.4749 29.6464 11.5251 29.0607 10.9393L19.5147 1.3934C18.9289 0.807613 17.9792 0.807613 17.3934 1.3934C16.8076 1.97919 16.8076 2.92893 17.3934 3.51472L25.8787 12L17.3934 20.4853C16.8076 21.0711 16.8076 22.0208 17.3934 22.6066C17.9792 23.1924 18.9289 23.1924 19.5147 22.6066L29.0607 13.0607ZM-1.31134e-07 13.5L28 13.5L28 10.5L1.31134e-07 10.5L-1.31134e-07 13.5Z"
            fill="#1E2A4F"
          />
        </svg>
      ) : (
        <svg
          width="20"
          height="15"
          viewBox="0 0 30 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="arrowPath"
            d="M0.93934 10.9393C0.353553 11.5251 0.353553 12.4749 0.93934 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97918 12.6066 1.3934C12.0208 0.807612 11.0711 0.807612 10.4853 1.3934L0.93934 10.9393ZM30 10.5L2 10.5V13.5L30 13.5V10.5Z"
            fill="#1E2A4F"
          />
        </svg>
      )}
    </span>
  );
};

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="coaches" className="px-3 py-10 bg-blueBg w-full">
      <div className="w-full md:w-full md:mx-auto">
        <h3 className="text-center text-3xl text-red-main font-bold mb-8">
          TRENÉŘI A LEKTOŘI
        </h3>
        <div className="w-5/6 mx-auto mb-10">
          <Slider
            className="w-full"
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
            {...settings}
          >
            <PersonCard
              imgSrc={personImg}
              name="ANETA SADÍLKOVÁ"
              job="VÝŽIVOVÝ MANAŽER"
              desc="This is your Team Member description. Use this space to write a brief description of this person's role and responsibilities, or add a short bio with a background summary."
            />
            <PersonCard
              imgSrc={personImg}
              name="ANETA SADÍLKOVÁ"
              job="VÝŽIVOVÝ MANAŽER"
              desc="This is your Team Member description. Use this space to write a brief description of this person's role and responsibilities, or add a short bio with a background summary."
            />
            <PersonCard
              imgSrc={personImg}
              name="ANETA SADÍLKOVÁ"
              job="VÝŽIVOVÝ MANAŽER"
              desc="This is your Team Member description. Use this space to write a brief description of this person's role and responsibilities, or add a short bio with a background summary."
            />
            <PersonCard
              imgSrc={personImg}
              name="ANETA SADÍLKOVÁ"
              job="VÝŽIVOVÝ MANAŽER"
              desc="This is your Team Member description. Use this space to write a brief description of this person's role and responsibilities, or add a short bio with a background summary."
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
