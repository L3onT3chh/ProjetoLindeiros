import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { IPropsGlobal } from "../../interfaces/components.interface";

function CarrouselComp({ image }: IPropsGlobal) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      style={{ maxWidth: "100vw" }}
    >
      {image &&
        image.map((item: string) => (
          <Carousel.Item key={item}>
            <img className="d-block w-100" height="500" src={item} alt="Text" />
            <Carousel.Caption>
              <h3> </h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default CarrouselComp;
