import React from "react";
import { assets } from "../assets/assets";
import Title from "../components/Title";
const Contact = () => {
  return (
    <>
      <Title title="Contact Us" desc="Contact Us" />
      <div>
        <div>
          <h2 className="text-center text-2xl text-gray-500 pt-10">
            CONTACT <span className="text-gray-700 font-semibold">US</span>
          </h2>
        </div>
        <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm ">
          <img
            className="w-full md:max-w-[360px]"
            src={assets.contact_image}
            alt=""
          />
          <div className="flex flex-col justify-center items-start gap-6">
            <h3 className="uppercase font-semibold text-lg text-gray-600">
              Our OFFICE
            </h3>
            <p className="text-gray-500">
              54709 Willms Station <br />
              Suite 350, Washington, USA
            </p>
            <p className="text-gray-500">
              Tel: (415) 555‑0132
              <br />
              Email: info@taranazdigital.com
            </p>
            <h3 className="font-semibold text-lg text-gray-600 uppercase">
              Careers at DOCTORO
            </h3>
            <p className="text-gray-500">
              Learn more about our teams and job openings.
            </p>
            <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
              Explore Jobs
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
