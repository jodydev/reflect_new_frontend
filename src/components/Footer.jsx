import React, { useRef } from "react";
import SecondaryButton from "../components/buttons/SecondaryButton";

export default function Footer() {
  return (
    <footer className="flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-start min-h-screen relative z-10">
        <div className="text-center px-4 my-5 lg:px-10 2xl:my-20">
          <h2 className="title-animation text-3xl lg:text-5xl xl:text-6xl font-bold text-center leading-loose text-dark mb-6 xl:mb-10">
            FOOTER
          </h2>
        </div>

        <div className="xl:mx-60 mb-10 2xl:mb-20 2xl:mx-72">
          <SecondaryButton text="Dapp Access" />
        </div>


      </div>
    </footer>
  );
}