"use client";
import React, { FC, useEffect } from "react";
import { Gradient } from "../lib/gradient";

type MeshGradientBackgroundProps = {
  children: React.ReactNode;
};

const MeshGradientBackground:FC<MeshGradientBackgroundProps> = ({children}) =>{
  useEffect(() => {
    // Initialize the gradient after the component mounts
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {/* Canvas for the gradient background */}
      <canvas
        id="gradient-canvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          "--gradient-color-1": "#dca8d8",
          "--gradient-color-2": "#a3d3f9",
          "--gradient-color-3": "#fcd6d6",
        }}
        >
      </canvas>
      {children}
    </div>
  );
}

export default MeshGradientBackground;