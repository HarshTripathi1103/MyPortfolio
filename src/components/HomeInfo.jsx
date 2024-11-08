import React from "react";
import { Link } from "react-router-dom";
import {arrow} from '../assets/icons'

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn  ">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain"/>
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-x1 sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Harsh </span> 👋
      <br />A Engineering Student From India
    </h1>
  ),

  2: (
    <InfoBox
      text="Learned many technical skills by doing Project Based Learning"
      link="/about"
      btnText="Lean More"
    />
  ),

  3: (
    <InfoBox
      text="Have done multiple projects"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),


  4: (
    <InfoBox
      text="Need a project done ? I'am just a few keystrokes away"
      link="/contact"
      btnText="Learn more"
    />
  ),

};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
