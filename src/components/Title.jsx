import React from "react";
import { Helmet } from "react-helmet-async";

const Title = ({ title, desc = "Doctor Appointment Booking System" }) => {
  return (
    <Helmet>
      <title>Doctoro - {title}</title>
      <meta name="description" content={desc} />
    </Helmet>
  );
};

export default Title;
