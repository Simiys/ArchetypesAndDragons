import React from "react";
import GradientCircle from "./GradientCirlcle";

const ThreeCirclesLayout = ({
  circles = [
    { size: 80, text: "Визионер", colors: ["#FEB298", "#FD7582"] },
    { size: 65, text: "Новатор", colors: ["#61F6EA", "#0EB1D7"] },
    { size: 50, text: "Лидер", colors: ["#7E59FD", "#6641E1"] },
  ],
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "150px", // Общая ширина контейнера
        height: "150px", // Общая высота контейнера
        margin: "0 auto",
      }}
    >
      {/* Верхний круг */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translate(-50%, 0)",
          zIndex: 3,
        }}
      >
        <GradientCircle
          size={circles[0].size}
          colors={circles[0].colors}
          text={circles[0].text}
        />
      </div>

      {/* Левый нижний круг */}
      <div
        style={{
          position: "absolute",
          bottom: "11%", // Расположение относительно контейнера
          right: "6%",
          zIndex: 2,
        }}
      >
        <GradientCircle
          size={circles[2].size}
          colors={circles[2].colors}
          text={circles[2].text}
        />
      </div>

      {/* Правый нижний круг */}
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          left: "12%",
          Index: 1,
        }}
      >
        <GradientCircle
          size={circles[1].size}
          colors={circles[1].colors}
          text={circles[1].text}
        />
      </div>
    </div>
  );
};

export default ThreeCirclesLayout;
