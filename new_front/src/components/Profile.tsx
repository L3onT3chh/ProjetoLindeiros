import React from "react";
import { ContentProfile } from "components/style";
import { GiModernCity } from "react-icons/gi";
import { MdOutlineAlternateEmail } from "react-icons/md";

export function MyProfile() {
  return (
    <ContentProfile>
      <div className="header-profile">
        <img
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="Profile"
        />
      </div>
      <div className="content-profile">
        <span className="name-box">
          <h1 className="title-h3">Arlete Terezinha</h1>
          <h1 className="title-h3">Beuren</h1>
        </span>
        <p className="charge-box">Administrador (a)</p>
        <p className="job-box">Diretora geral da UTFPR-SH</p>
        <p className="contact-box">
          <MdOutlineAlternateEmail />
          arletebeuren@gmail.com
        </p>

        <p className="city-box">
          <GiModernCity size={24} />
          <span>Santa Helena, PR</span>
        </p>
      </div>
    </ContentProfile>
  );
}
