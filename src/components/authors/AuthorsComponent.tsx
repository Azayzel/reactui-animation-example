import React, { useState } from "react";
import { motion, MotionStyle } from "framer-motion";
import Refresh from "../Refresh";

export default function AuthorsComponent({ key }: any) {
  const container = {
    hidden: { rotate: 90 },
    show: {
      rotate: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemA = {
    hidden: { scale: 0, top: 100 },
    show: { scale: 1, top: 30 },
  };

  const itemB = {
    hidden: { scale: 0, top: 200 },
    show: { scale: 1, top: 80 },
  };

  const blobStyle: MotionStyle = {
    width: 40,
    height: 40,
    borderRadius: 75,
    backgroundColor: "#1d1ef0",
    position: "absolute",
  };

  return (
    <div>
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "#fff",
          position: "relative",
        }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div style={{ ...blobStyle, left: 30 }} variants={itemA} />
        <motion.div style={{ ...blobStyle, left: 80 }} variants={itemA} />
        <motion.div style={{ ...blobStyle, left: 30 }} variants={itemB} />
        <motion.div style={{ ...blobStyle, left: 80 }} variants={itemB} />
      </motion.div>
    </div>
  );
}
