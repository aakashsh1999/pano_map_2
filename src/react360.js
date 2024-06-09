// src/vr/Scene.js

import "aframe";
import { Entity, Scene } from "aframe-react";

import React, { useState } from "react";
import panorama from "./puydesancy.jpg";

import imageOne from "./assets/PANO0001.jpg";
import imageTwo from "./assets/PANO0002.jpg";
import imageThree from "./assets/PANO0003.jpg";
import imageFour from "./assets/PANO0004.jpg";
import imageFive from "./assets/PANO0005.jpg";
import imageSix from "./assets/PANO0006.jpg";
import imageSeven from "./assets/PANO0007.jpg";
import imageEight from "./assets/PANO0008.jpg";
import imageNine from "./assets/PANO0009.jpg";
import imageTen from "./assets/PANO0010.jpg";
import imageEleven from "./assets/PANO0011.jpg";
import imageTwelve from "./assets/PANO0012.jpg";
import imageThirteen from "./assets/PANO0013.jpg";
import imageFourteen from "./assets/PANO0014.jpg";
import imageFifteen from "./assets/PANO0015.jpg";
import imageSixteen from "./assets/PANO0016.jpg";
import imageSeventeen from "./assets/PANO0017.jpg";
import imageEighteen from "./assets/PANO0018.jpg";
import imageNineteen from "./assets/PANO0019.jpg";
import imageTwenty from "./assets/PANO0020.jpg";
import imageTwentyOne from "./assets/PANO0021.jpg";
import imageTwentyTwo from "./assets/PANO0022.jpg";
import imageTwentyThree from "./assets/PANO0023.jpg";
import imageTwentyFour from "./assets/PANO0024.jpg";
import imageTwentyFive from "./assets/PANO0025.jpg";

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
