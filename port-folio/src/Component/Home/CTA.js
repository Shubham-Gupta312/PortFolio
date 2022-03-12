import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import CV from '../../assets/CV.pdf'

const CTA = () => {
  return (
    <div className="container cta">
      <a href={CV} download className="btn">
        Download CV
        <AiOutlineCloudDownload className="cta-icons" />
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
