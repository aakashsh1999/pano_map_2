// src/vr/Scene.js

import "aframe";
import { Entity, Scene } from "aframe-react";

import React, { useState } from "react";
// import panorama from "./puydesancy.png";?

import imageOne from "./assets/PANO0001.png";
import imageTwo from "./assets/PANO0002.png";
import imageThree from "./assets/PANO0003.png";
import imageFour from "./assets/PANO0004.png";
import imageFive from "./assets/PANO0005.png";
import imageSix from "./assets/PANO0006.png";
import imageSeven from "./assets/PANO0007.png";
import imageEight from "./assets/PANO0008.png";
import imageNine from "./assets/PANO0009.png";
import imageTen from "./assets/PANO0010.png";
import imageEleven from "./assets/PANO0011.png";
import imageTwelve from "./assets/PANO0012.png";
import imageThirteen from "./assets/PANO0013.png";
import imageFourteen from "./assets/PANO0014.png";
import imageFifteen from "./assets/PANO0015.png";
import imageSixteen from "./assets/PANO0016.png";
import imageSeventeen from "./assets/PANO0017.png";
import imageEighteen from "./assets/PANO0018.png";
import imageNineteen from "./assets/PANO0019.png";
import imageTwenty from "./assets/PANO0020.png";
import imageTwentyOne from "./assets/PANO0021.png";
import imageTwentyTwo from "./assets/PANO0022.png";
import imageTwentyThree from "./assets/PANO0023.png";
import imageTwentyFour from "./assets/PANO0024.png";
import imageTwentyFive from "./assets/PANO0025.png";

const SceneComponent = () => {
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 25;
  const images = [
    imageOne,
    imageTwo,
    imageThree,
    imageFour,
    imageFive,
    imageSix,
    imageSeven,
    imageEight,
    imageNine,
    imageTen,
    imageEleven,
    imageTwelve,
    imageThirteen,
    imageFourteen,
    imageFifteen,
    imageSixteen,
    imageSeventeen,
    imageEighteen,
    imageNineteen,
    imageTwenty,
    imageTwentyOne,
    imageTwentyTwo,
    imageTwentyThree,
    imageTwentyFour,
    imageTwentyFive,
  ];

  const handleNext = () => {
    setCurrentImage((prevImage) =>
      prevImage < totalImages - 1 ? prevImage + 1 : 0
    ); // Reset to 0 when reaching the last image
  };

  const handlePrevious = () => {
    setCurrentImage((prevImage) =>
      prevImage > 0 ? prevImage - 1 : totalImages - 1
    ); // Go to the last image when reaching the first image
  };

  return (
    <a-scene>
      <a-assets>
        {images.map((src, index) => (
          <img key={index} id={`image${index + 1}`} src={src} />
        ))}
      </a-assets>

      <a-sky src={`#image${currentImage}`} rotation="0 -90 0"></a-sky>

      <a-entity position="0 1.6 -3">
        <a-text
          value={`Image ${currentImage}`}
          color="#FFFFFF"
          position="0 2 0"
          align="center"
        ></a-text>
      </a-entity>
      <Entity id="hotspot1" position="2 -3 4">
        <Entity
          geometry={{ primitive: "sphere", radius: 0.1 }}
          material={{ color: "white" }}
          animation__scale={{
            property: "scale",
            to: "1.2 1.2 1.2",
            loop: true,
            dir: "alternate",
            dur: 1000,
          }}
        />
        <Entity
          position="0 0.3 0"
          text={{
            value: "Location 1",
            color: "yellow",
            align: "center",
          }}
        />
      </Entity>

      <Entity id="hotspot2" position="3 -6 -1">
        <Entity
          geometry={{ primitive: "sphere", radius: 0.1 }}
          material={{ color: "white" }}
          animation__scale={{
            property: "scale",
            to: "1.2 1.2 1.2",
            loop: true,
            dir: "alternate",
            dur: 1000,
          }}
        />
        <Entity
          position="0 0.3 0"
          text={{
            value: "Location 2",
            color: "yellow",
            align: "center",
          }}
        />
      </Entity>

      <Entity id="hotspot3" position="-2 -5 1">
        <Entity
          geometry={{ primitive: "sphere", radius: 0.1 }}
          material={{ color: "white" }}
          animation__scale={{
            property: "scale",
            to: "1.2 1.2 1.2",
            loop: true,
            dir: "alternate",
            dur: 1000,
          }}
        />
        <Entity
          position="0 0.3 0"
          text={{
            value: "Location 3",
            color: "yellow",
            align: "center",
          }}
        />
      </Entity>

      <Entity id="hotspot4" position="-3 -6 3">
        <Entity
          geometry={{ primitive: "sphere", radius: 0.1 }}
          material={{ color: "white" }}
          animation__scale={{
            property: "scale",
            to: "1.2 1.2 1.2",
            loop: true,
            dir: "alternate",
            dur: 1000,
          }}
        />
        <Entity
          position="0 0.3 0"
          text={{
            value: "Location 4",
            color: "yellow",
            align: "center",
          }}
        />
      </Entity>
    </a-scene>
  );
};

export default SceneComponent;
