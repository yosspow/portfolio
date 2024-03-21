import { Icon } from "@iconify/react";

import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import Slider from "react-slick";
import Modal from "./Modal";

export default function Projects({ data }) {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("image");
  const [modalData, setModalData] = useState({});
  const { sectionHeading, allProjects } = data;
  const handelProjectDetails = (item, itemType) => {
    if (itemType === "image") {
      setModalData(item);
    } else {
      setModalData(item);
    }
    setModalType(itemType);

    setModal(!modal);
    console.log(modalType);
  };

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
  };

  return (
    <>
      <section className="project-section section gray-bg" id="project">
        <div className="container">
          <SectionHeading
            miniTitle={sectionHeading.miniTitle}
            title={sectionHeading.title}
          />
          <div
            className="full-width"
            data-aos="fade"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Slider {...settings} className="slider-gap-24">
              {allProjects?.map((item, index) => (
                <div key={index} style={{ width: "475px", height: "auto" }}>
                  <div className="project-box">
                    <div className="project-media">
                      <img
                        src={item.thumbUrl}
                        style={{ width: "100%", height: "290px" }}
                        alt="Thumb"
                      />
                      <span
                        className="gallery-link"
                        onClick={() => handelProjectDetails(item, "image")}
                      >
                        <i>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M3 21v-6h2v2.6l3.1-3.1l1.4 1.4L6.4 19H9v2zm12 0v-2h2.6l-3.1-3.1l1.4-1.4l3.1 3.1V15h2v6zM8.1 9.5L5 6.4V9H3V3h6v2H6.4l3.1 3.1zm7.8 0l-1.4-1.4L17.6 5H15V3h6v6h-2V6.4z"
                            ></path>
                          </svg>
                        </i>
                      </span>
                    </div>
                    <div className="project-body">
                      <div
                        className="text"
                        onClick={() => handelProjectDetails(item, "details")}
                      >
                        <h5>{item.title}</h5>
                        <span>{item.subTitle}</span>
                      </div>
                      <div className="link">
                        <span
                          className="p-link"
                          onClick={() => handelProjectDetails(item, "details")}
                        >
                          <Icon icon="bi:arrow-right" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      {modal && (
        <div className="mfp-wrap">
          <div className="mfp-container">
            <div className="mfp-bg" onClick={() => setModal(!modal)}></div>
            <div className="mfp-content">
              <button
                type="button"
                className="mfp-close"
                onClick={() => setModal(!modal)}
              >
                ×
              </button>
              {modalType === "image" ? (
                <img
                  src={modalData.thumbUrl}
                  className="zomImage"
                  alt="Thumbnail"
                />
              ) : (
                <Modal modalData={modalData} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
