import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  Facebook,
  Twitter,
  Linkedin,
  Globe,
  Instagram,
  PlayFill,
} from "react-bootstrap-icons";

import bannerMan from "../../assets/img/banner/banner-man.png";
import scrollDown from "../../assets/img/banner/scroll-down.png";
import dial from "../../assets/img/banner/dial.png";
import bnArrow from "../../assets/img/banner/bn-arrow.png";
import VideoPlay from "../Shared/VideoPlay/VideoPlay";

const socalIcon = [
  // {
  //   id: 1,
  //   icon: <Facebook />,
  // },
  // {
  //   id: 2,
  //   icon: <Twitter />,
  // },
  {
    id: 3,
    icon: <Linkedin />,
    lien: "https://www.linkedin.com/company/act-digital-native-agency"
  },
  {
    id: 4,
    icon: <Globe />,
    lien: "https://www.linkedin.com/company/act-digital-native-agency"
  },
  // {
  //   id: 5,
  //   icon: <Instagram />,
  // },
];
const Banner = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [position, setPosition] = useState(false);

  useEffect(() => {
    if(!position){
      setPosition(true)
    }
  }, []);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  return (
    <section id="home">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-8">
            <div className="banner__content">
              <Link to={""} className="bn__currently">
                <span className="d-block">
                  ACT DIGITAL NATIVE AGENCY
                </span>
              </Link>
              <h1>
                <span className="hone"> Strategy, Innovation</span>
                <span className="d-block designers" data-text="Performance">
                  Performance
                </span>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="banner__leftinfo">
        <div className="left__infomobile">
          <Link to={""}>
            <img src={dial} alt="img" />
          </Link>
          <Link to={""}>(+33)6 62 29 09 92</Link>
        </div>
        <div className="right__infoscroll">
          <Link className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
      </div>
      <div className="banner__rightinfo">
        <div className="right__infoscroll">
          <Link to={""} className="scroll">
            Follow Me
          </Link>
          <Link to={""} className="scroll__bar">
            <img src={scrollDown} alt="img" />
          </Link>
        </div>
        <div className="banner__xlsocial">
          <ul className="banner__soci d-grid justify-content-center">
            {socalIcon.map(({ icon, id, lien }) => {
              return (
                <li key={id}>
                  <Link to={lien} >
                    <i>{icon}</i>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
