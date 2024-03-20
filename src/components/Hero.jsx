import { Icon } from "@iconify/react";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import SocialBtns from "./SocialBtns";
import pdfFile from "../data/elhabachi-youssef.pdf";

const handleDownload = () => {
  // Create a download link
  const link = document.createElement("a");
  link.href = pdfFile;
  link.download = "elhabachi-youssef.pdf"; // Filename for the downloaded file
  document.body.appendChild(link);
  // Trigger the download
  link.click();
  // Clean up
  document.body.removeChild(link);
};

export default function Hero({ data, socialData }) {
  const { imgUrl, name, heading, typingText, description, btnText, btnUrl } =
    data;
  return (
    <section className="home-section" id="home" data-scroll-index={0}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8">
            <div className="hs-text-box">
              <h6 data-aos="fade-up" data-aos-duration="1200" >
                <span style={{  fontSize: '25px' }}>{name}</span>
              </h6>

       
              <h2
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
                className="typingtext"
                
              >
                <TypeAnimation
                  sequence={typingText}
                  speed={0}
                  repeat={Infinity}
                />
              </h2>
              <p
                className="text"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                {description}
              </p>
              <div
                className="btn-bar d-flex align-items-sm-center flex-column flex-sm-row"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <ScrollLink
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="px-btn"
                  onClick={() => handleDownload()}
                >
                  <span>{btnText}</span>{" "}
                  <i className="d-flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="23"
                      fill="currentColor"
                      class="bi bi-file-earmark-person"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z" />
                    </svg>
                  </i>
                </ScrollLink>

                <SocialBtns
                  socialBtns={socialData}
                  variant="ps-sm-4 pt-4 pt-sm-0 d-flex justify-content-center justify-content-sm-start"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="hs-banner">
              <img src={imgUrl} className="tswira" title alt="Admin" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
