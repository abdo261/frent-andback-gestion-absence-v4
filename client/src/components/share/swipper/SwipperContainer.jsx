import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./swipper.css";

// import required modules
import { Autoplay, EffectCards } from "swiper/modules";
import { HiUsers } from "react-icons/hi2";
import { LuFileBadge } from "react-icons/lu";
import { GrDocumentText } from "react-icons/gr";
import { PiPresentationChartLight } from "react-icons/pi";

export default function SwipperContainer() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        effect={"cards"}
        grabCursor={true}
        modules={[Autoplay, EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide className=".swiper-slide">
          {" "}
          <div className="home-item">
            <div className="home-item-icon">
              {" "}
              <PiPresentationChartLight size={40} />
            </div>
            <h3> Gestion des Absences </h3>
            <div className="home-item-text">
              Notre application offre une solution complète pour gérer
              efficacement les absences des enseignants dans chaque
              établissement scolaire.
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          {" "}
          <div className="home-item">
            <div className="home-item-icon">
              <GrDocumentText size={40} />
            </div>
            <h3>Commande de Documents </h3>
            <div className="home-item-text">
              Simplifiez la gestion des commandes de documents scolaires avec
              notre application pour enseignants et les responsables de l'école
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className=".swiper-slide">
          {" "}
          <div className="home-item">
            <div className="home-item-icon">
              <LuFileBadge size={40} />
            </div>
            <h3>Organisé par Commune </h3>
            <div className="home-item-text">
              Notre application est conçue pour s'adapter aux besoins
              spécifiques de chaque commune. En associant chaque école à sa
              commune respective
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          {" "}
          <div className="home-item">
            <div className="home-item-icon">
              <HiUsers size={40} />
            </div>
            <h3> Utilisateurs </h3>
            <div className="home-item-text">
              Notre application distingue deux types d'utilisateurs principaux :
              les responsables et les administrateurs. Chaque type d'utilisateur
              a des fonctionnalités spécifiques adaptées à ses besoins.
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
