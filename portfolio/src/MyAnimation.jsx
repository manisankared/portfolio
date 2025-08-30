import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function MyAnimation() {
  return (
    <div style={{ width: "300px", height: "300px", border: "1px solid red" }}>
      <DotLottieReact
        src="/newAnimation.lottie"
        loop
        autoplay
      />
    </div>
  );
}
