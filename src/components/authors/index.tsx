import React, { useState } from "react";
import Refresh from "../Refresh";
import AuthorsComponent from "./AuthorsComponent";
export default function Authors() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{ maxWidth: 200, backgroundColor: "ButtonShadow", padding: 35 }}
    >
      <Refresh onClick={() => setCount(count + 1)} />
      <br />
      <AuthorsComponent key={count} />
    </div>
  );
}
