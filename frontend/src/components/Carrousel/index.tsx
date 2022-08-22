import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { IPropsGlobal } from "../../interfaces/components.interface";

function CarrouselComp({ image, title, description }: IPropsGlobal) {
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
            <img
              className="d-block w-100"
              height="500"
              src={item}
              alt="Texto alternativo"
            />
            <Carousel.Caption>
              <h3>{title}</h3>
              <p>{description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default CarrouselComp;
