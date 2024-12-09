import React from "react";

const GradientCircle = ({
  size = 200,
  colors = ["#ff7c7c", "#7300ff"],
  text = "Hello",
}) => {
  const gradientId = `circleGradient-${Math.random()
    .toString(36)
    .substr(2, 9)}`;

  const textLines = text.split("\n");
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${size} ${size}`}
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="30%">
          <stop offset="0%" stopColor={colors[0]} />
          <stop offset="100%" stopColor={colors[1]} />
        </linearGradient>
      </defs>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={(size / 2) * 0.9}
        fill={`url(#${gradientId})`}
      />
      <foreignObject
        x={size * 0.1}
        y={size * 0.1}
        width={size * 0.8}
        height={size * 0.8}
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "3px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              maxWidth: `${size / 1.2}px`,
              margin: 0,
              color: "#fff",
              fontSize: `${size / 6}px`,
              textAlign: "center",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {textLines[0]}
          </p>
          <p
            style={{
              maxWidth: "60px",
              margin: 0,
              color: "#fff",
              fontSize: `${size / 7}px`,
              textAlign: "center",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {textLines[1]}
          </p>
        </div>
      </foreignObject>
    </svg>
  );
};

export default GradientCircle;
