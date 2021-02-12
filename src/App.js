import React from "react";
import "./App.css";

import { CarouselWrapper, next, prev, moveTo } from "react-pretty-carousel";

import image1 from "./assets/photo-1.jfif";
import image2 from "./assets/photo-2.jfif";
import image3 from "./assets/photo-3.jfif";
import image4 from "./assets/photo-4.jfif";
import image5 from "./assets/photo-5.jfif";
import image6 from "./assets/photo-6.jfif";

function App() {
  return (
    <div className="App">
      <CarouselWrapper items={3} mode="gallery">
        <img src={image1} alt={"image1"} />
        <img src={image2} alt={"image2"} />
        <img src={image3} alt={"image3"} />
        <img src={image4} alt={"image4"} />
        <img src={image5} alt={"image5"} />
        <img src={image6} alt={"image6"} />
      </CarouselWrapper>
    </div>
  );
}

export default App;
