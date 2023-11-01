import React from "react";

const AboutMe = () => {
  return (
    <div className="flex flex-col md:flex-row pb-6">
      <div className="w-full md:w-1/2 text-zinc-400 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! We are AMINES</h2>
          <p className="text-base leading-6 ">
            Group of IT engineers specializing in website development and providing a range og IT services, including QR code menu creation, typically comprises a team of highly skilled professionals with diverse expertise. These individuals work together to deliver comprehensive solutions to clients in the digital and web development domain.
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-6">
        <ul className="flex flex-col gap-1">
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Agooo:</span>
            26
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Residence:</span>
            Tunisia
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Freelance:</span>
            Available
          </li>
          <li className="aboutRightLi">
            <span className="aboutRightLiSpan">Address:</span>
            Sousse, Tunisia
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMe;
