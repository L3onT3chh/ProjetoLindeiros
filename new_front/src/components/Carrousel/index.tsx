import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

interface IPropsCarrousel {
  title: string;
  description: string;
  image: Array<string>;
}

function CarrouselComp({ image, title, description }: IPropsCarrousel) {
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
      {image.map((item: string) => (
        <Carousel.Item key={item}>
          <img
            className="d-block w-100"
            height="400"
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
