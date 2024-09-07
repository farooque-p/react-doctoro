import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Column */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6 ">
            Welcome to Doctoro, your trusted partner in managing your healthcare
            needs conveniently and efficiently. At Doctoro, we understand the
            challenges individuals face when it comes to scheduling doctor
            appointments and managing their health records.
          </p>
        </div>
        {/* Center Column */}
        <div>
          <h3 className="text-xl font-medium mb-5">COMAPNY</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li onClick={() => navigate("/")} className="cursor-pointer">
              Home
            </li>
            <li onClick={() => navigate("/about")} className="cursor-pointer">
              About Us
            </li>
            <li onClick={() => navigate("/contact")} className="cursor-pointer">
              Contact Us
            </li>
            <li
              onClick={() => navigate("/")}
              className="cursor-pointer hover:text-primary"
            >
              Privacy Policy
            </li>
          </ul>
        </div>
        {/* Right Column */}
        <div>
          <h3 className="text-xl font-medium mb-5">GET IN TOUCH</h3>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>info@taranazdigital.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* Copyright */}
        <hr />
        <p className="py-5 text-center text-sm">
          Copyright © 2024 Taranaz Digital - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
