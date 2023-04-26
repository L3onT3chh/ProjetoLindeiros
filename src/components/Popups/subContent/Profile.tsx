import React, { useEffect, useState } from "react";
import { ContentProfile } from "components/style";
import { GiModernCity } from "react-icons/gi";
import { IStateData } from "interfaces/components.interface";
import { useSelector } from "react-redux";
import { convertToArray } from "util/handleSelectorObj";

export function MyProfile() {
  const { auth } = useSelector((state: IStateData) => state);
  const { user } = auth.auth.user;
  const [profile, setProfile] = useState<any>();
  const handleNameSeparator = (name: string, index: number) => {
    return name.split(" ")[index + 1];
  };

  useEffect(()=>{
    if(auth){
      setProfile(convertToArray(auth.auth.user)[0])
    }
  }, [auth])

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
          <h1 className="title-h3">
            {handleNameSeparator(profile?.name || "", -1)}
          </h1>
          <h1 className="title-h3">
            {handleNameSeparator(profile?.name || "", 0)}
          </h1>
        </span>
        <p className="charge-box">{profile?.userType}</p>
        <p className="job-box">
          +55 {`(${profile?.phone_ddd}) ${profile?.phone}`}
        </p>
        <p className="contact-box">{profile?.email}</p>

        <p className="city-box">
          <GiModernCity size={24} />
          <span>{profile?.city}, PR</span>
        </p>
      </div>
    </ContentProfile>
  );
}
