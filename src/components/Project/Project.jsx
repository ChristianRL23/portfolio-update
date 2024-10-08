import "pure-react-carousel/dist/react-carousel.es.css";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from "pure-react-carousel";
import "./Project.scss";
import githubIcon from "./GitHub-Mark-Light-120px-plus.png";
import demoIcon from "./5411975041600774573-128.png";
import CustomButton from "../CustomButton/CustomButton";
import { useState } from "react";

const Project = ({
  id,
  images,
  name,
  description,
  direction,
  technologies,
  features,
  repository,
  liveDemo,
}) => {
  const [featureTabActive, setFeatureTabActive] = useState(false);

  const selectTechnologiesTab = () => setFeatureTabActive(false);

  const selectFeaturesTab = () => setFeatureTabActive(true);

  return (
    <div className={`project--${direction}`}>
      <CarouselProvider
        key={"id" + Math.random().toString(16).slice(2)}
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={images.length}
      >
        <Slider>
          {images.map((image, index) => (
            <Slide
              index={index}
              key={"id" + Math.random().toString(16).slice(2)}
            >
              <Image className="slider__image" src={image} />
            </Slide>
          ))}
        </Slider>
        <ButtonBack className="carousel__button__back">{"<"}</ButtonBack>
        <ButtonNext className="carousel__button__next">{">"}</ButtonNext>
      </CarouselProvider>

      <div className="project__info">
        <h4 className="project__info__name">{name}</h4>
        <p className="project__info__description">{description}</p>
        <div className="project__info__more">
          <div className="project__info__more__selector">
            <h6
              onClick={selectTechnologiesTab}
              className={`project__info__more__selector__tab${
                !featureTabActive ? "--active" : ""
              }`}
            >
              Technologies
            </h6>
            <h6
              onClick={selectFeaturesTab}
              className={`project__info__more__selector__tab${
                featureTabActive ? "--active" : ""
              }`}
            >
              Features
            </h6>
          </div>
          {!featureTabActive ? (
            <ul>
              {technologies.map((technology) => {
                if (typeof technology !== "string") {
                  return (
                    <ul key={"id" + Math.random().toString(16).slice(2)}>
                      {technology.map((technologyArr) => (
                        <li>{technologyArr}</li>
                      ))}
                    </ul>
                  );
                }
                return <li>{technology}</li>;
              })}
            </ul>
          ) : (
            <ul>
              {features.map((feature) => (
                <li key={"id" + Math.random().toString(16).slice(2)}>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="project__info__buttons">
          <CustomButton
            textContent="See repository"
            icon={githubIcon}
            theme="dark"
            link={repository}
          />
          <CustomButton
            textContent="See live demo"
            icon={demoIcon}
            theme="light"
            link={liveDemo}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
