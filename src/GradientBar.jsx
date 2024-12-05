import React from "react";

const GradientBar = ({
  width = 100,
  height = 5,
  percentage = 50,
  backgroundColor = "#463AB4",
  gradientColors = ["#ff7c7c", "#7300ff"],
}) => {
  const gradientId = `gradientBar-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${width} ${height}`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={gradientColors[0]} />
          <stop offset="100%" stopColor={gradientColors[1]} />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width={width} height={height} fill={backgroundColor} />

      <rect
        x="0"
        y="0"
        width={(width * percentage) / 100}
        height={height}
        fill={`url(#${gradientId})`}
      />
    </svg>
  );
};

export default GradientBar;
