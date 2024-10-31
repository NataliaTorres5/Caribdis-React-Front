import React from "react";
import "../styles/Carousel.css";
import { Link as LinkRouter } from "react-router-dom";

//para blogs

function Carousel() {
  const items = [
    {
      src: "https://i.im.ge/2024/09/08/fWLXMF.tortugaMarina-flotando.jpeg",
      title: "Animales",
      link: "/animals",
    },
    {
      src: "https://i.im.ge/2024/09/08/fWLuJX.Plushie1.png",
      title: "Productos",
      link: "/store",
    },
    {
      src: "https://i.im.ge/2024/09/08/fWLrE9.Foca1.png",
      title: "Visitanos",
      link: "/visit",
    },
  ];

  const itemView = (item) => {
    let imgu = item.src;

    return (
      <>
        <div className="item-home">
          <img className="hcard-img " src={imgu} alt={item.title} />
          <p className="hcard-p">{item.title} </p>
          <LinkRouter className="hcard-link btn" to={item.link}>
            Saber más
          </LinkRouter>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="Carousel-segment">
        {items.length > 0 && ( // Only render if items has elements
          <div className="slide-home">{items.map(itemView)}</div>
        )}
      </div>
    </>
  );
}
export default Carousel;
