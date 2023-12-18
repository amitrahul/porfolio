import React from "react";
import styles from "./Crausel.module.css";
import Image1 from "../../assets/leadership1.jpg";
import Image2 from "../../assets/leadership2.jpg";
import Image3 from "../../assets/leadership3.jpg";
import Image4 from "../../assets/leadership4.jpg";
import Image5 from "../../assets/leadership5.jpg";
import Image6 from "../../assets/leadership6.jpg";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

const Crausel = () => {
  return (
    <div className={styles.CrauselWrapper}>
      <Carousel>
        <Carousel.Item>
          <img
            src={Image1}
            width={670}
            height={500}
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Image2}
            width={670}
            height={500}
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Image3}
            width={670}
            height={500}
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Image4}
            width={670}
            height={500}
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>Fourth slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Image5}
            width={670}
            height={500}
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>Fifth slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={Image6}
            width={670}
            height={500}
            className="d-block w-100"
          />
          <Carousel.Caption>
            <h3>Sixth slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Crausel;
