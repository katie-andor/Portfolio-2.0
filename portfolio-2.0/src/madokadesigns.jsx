import React from "react";
import { Link } from "react-router-dom";
import backarrow from "./images/backarrowicon.svg";

const miscImages = import.meta.glob('./images/graphicdesignimages/miscprojects/*.svg', { eager: true });
const miscImagesList = Object.values(miscImages).map(module => module.default);

const MadokaDesigns = () => {
  return (
    <div className="px-4">
      <div className="flex flex-row items-center">
        <Link to="/">
          <img
            tabIndex={0}
            src={backarrow}
            alt="a back arrow icon"
            className="h-[40px] md:h-[50px] mr-4"
          />
        </Link>
        <h1 className="text-[23px] sm:text-[28px] lg:text-[40px] font-bold">
          Madoka Magica Phone Backgrounds
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-around">
        {miscImagesList.map((img, index) => {
          return (
            <div
              key={index}
              tabIndex={0}
              className="w-[100%] sm:w-[49%] md:w-[30%] flex items-center justify-center"
            >
              <img
                src={img}
                alt='alt'
                className="w-full my-4 border-2 border-black flex flex-row items-center justify-between"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MadokaDesigns;
