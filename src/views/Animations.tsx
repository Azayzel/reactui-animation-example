import React, { useState, useEffect } from "react";
import AnimatedCHRLogo from "../components/logos/AnimatedCHRLogo";
import ReorderList from "../components/list/ReorderList";
import SpringRemainingInput from "../components/input/SpringRemainingInput";
import Authors from "../components/authors";

const containerStyle: any = {
  maxWidth: 600,
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
};

const Animations = (): JSX.Element => {
  return (
    <div style={containerStyle}>
      <h3>Animations</h3>

      <section>
        <h4> Staggered Animation</h4>
        <Authors />
      </section>

      <section>
        <h4>Spring style, warn user of remaininf character count</h4>
        <SpringRemainingInput />
      </section>

      <br />
      <section>
        <h4>Drag and Drop to Re-Order</h4>
        <ReorderList />
      </section>
      <br />
      <AnimatedCHRLogo />
    </div>
  );
};

export default Animations;
