import React from "react";
import { ContainerSponsor } from "../style";
import imgSponsors from "../../assets/img/sponsors";

function SponsorList() {
  return (
    <ContainerSponsor>
      {imgSponsors.map((sponsor) => (
        <img src={sponsor} alt="" key={sponsor} />
      ))}
    </ContainerSponsor>
  );
}

export default SponsorList;
