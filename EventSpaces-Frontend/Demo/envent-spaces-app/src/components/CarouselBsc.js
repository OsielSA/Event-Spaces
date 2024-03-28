import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";

export default function CarouselBasic() {
  // Array con las ubicaciones de las imágenes y las clases CSS
  const imagePaths = [
    { id: 1, path: "/Fotos/1.jpg", clase_css: "relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" },
    { id: 2, path: "/Fotos/2.jpg", clase_css: "relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" },
    { id: 3, path: "/Fotos/3.jpg", clase_css: "relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" },
    { id: 4, path: "/Fotos/4.jpg", clase_css: "relative float-left hidden -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none" },
    // Agrega aquí las ubicaciones de las demás imágenes
  ];

  return (
    <>
      <TECarousel showControls  ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {/* Generar un TECarouselItem para cada imagen en el array */}
          {imagePaths.map((imageObj, index) => (
            <TECarouselItem
              key={index}
              itemID={imageObj.id} // Utiliza el índice del elemento como itemID
              className={imageObj.clase_css}
            >
              <img
                src={imageObj.path}
                className="block w-full"
                alt={`Imagen ${index + 1}`}
              />
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <h5 className="text-xl">Slide {index + 1} label</h5>
                <p>Some representative placeholder content for the slide.</p>
              </div>
            </TECarouselItem>
          ))}
        </div>
      </TECarousel>
    </>
  );
}
