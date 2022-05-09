import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Home from "./views/Home";
import Animations from "./views/Animations";
import Tests from "./views/Tests";

export default function BaseRouter() {
  return (
    <Suspense fallback={"loading"}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/animate" element={<Animations />} />
        <Route path="/tests" element={<Tests />} />
      </Routes>
    </Suspense>
  );
}
