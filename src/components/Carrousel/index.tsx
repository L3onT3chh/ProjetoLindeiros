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
            <div className="d-block w-100" style={{backgroundImage: `url(${item})`, backgroundPosition:"left", width: '100%', backgroundSize: 'cover', backgroundRepeat:"no-repeat", height: "500px"}}></div>
            <Carousel.Caption>
              <h3> </h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
}

export default CarrouselComp;
