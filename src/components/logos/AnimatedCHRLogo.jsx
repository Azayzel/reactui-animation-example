import React from "react";
import { motion } from "framer-motion";

export default function AnimatedCHRLogo() {
  const pathMap = {
    path1: React.useRef(null),
    path2: React.useRef(null),
    path3: React.useRef(null),
  };

  const onMouseEnter = (e) => {
    e.stopPropagation();
    const { id } = e.target;
    pathMap[id].current.classList.add("is-hovered");
  };

  const onMouseLeave = (e) => {
    e.stopPropagation();
    const { id } = e.target;
    pathMap[id].current.classList.remove("is-hovered");
  };

  return (
    <div className="track-wins-container">
      <div className="svg-logo">
        <motion.svg
          className="svg-icon"
          viewBox="0 0 820.62512 390.28656"
          opacity={0}
          animate="open"
          exit="collapsed"
          variants={{
            open: { scale: 1, opacity: 1 },
            collapsed: { scale: -1, opacity: 0 },
          }}
          transition={{ duration: 2.3, ease: [0.04, 0.62, 0.23, 0.98] }}
        >
          <defs>
            <filter id="sofGlow" height="200%" width="200%" x="-75%" y="-75%">
              <feMorphology
                operator="dilate"
                radius="1"
                in="SourceAlpha"
                result="thicken"
              />
              <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
              <feFlood floodColor="rgb(0,186,255)" result="glowColor" />
              <feComposite
                in="glowColor"
                in2="blurred"
                operator="in"
                result="softGlow_colored"
              />
              <feMerge>
                <feMergeNode in="softGlow_colored" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <g>
            <text
              className="is-active track-name"
              fill="none"
              stroke="#61dafb"
              transform="translate(300 300)"
              strokeWidth="2"
              fontSize="2.5vw"
              fontFamily="Montserrat, sans-serif"
              fontWeight="300"
              letterSpacing="0.1em"
            >
              <tspan>Daytona 200</tspan>
            </text>
            <g
              transform="translate(195.61897,-61.003169)"
              fill="none"
              stroke="#000000"
            >
              <path
                stroke="#a7a8aa"
                id="path1"
                className="is-active"
                fill="none"
                ref={pathMap["path1"]}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                filter="url(#sofGlow)"
                d="m 71.58102,133.582 c 0.0012,-1.01865 0.049,-1.40294 0.106272,-0.854 0.05728,0.54895 0.05632,1.38239 -0.0021,1.85209 -0.05845,0.4697 -0.105311,0.0205 -0.104138,-0.99809 z m 3.989031,-8.73125 c 3.44e-4,-2.32833 0.04081,-3.24541 0.08995,-2.03796 0.04914,1.20746 0.04886,3.11246 -6.09e-4,4.23333 -0.04947,1.12088 -0.08967,0.13296 -0.08934,-2.19537 z m -0.0043,-13.22917 c 4.5e-4,-1.89177 0.04261,-2.63096 0.09365,-1.64264 0.05105,0.98832 0.05067,2.53613 -8.46e-4,3.43958 -0.0515,0.90346 -0.09327,0.0948 -0.0928,-1.79694 z M 99.923578,109.301 c -0.07096,-0.18491 -0.09677,-3.1317 -0.05737,-6.54843 l 0.07164,-6.212237 0.131812,6.548637 c 0.0725,3.60176 0.0983,6.54855 0.0574,6.54844 -0.0409,-1.1e-4 -0.132501,-0.15149 -0.203459,-0.33641 z M 71.58102,102.09658 c 0.0012,-1.01864 0.049,-1.40294 0.106272,-0.85399 0.05728,0.54895 0.05632,1.38238 -0.0021,1.85208 -0.05845,0.4697 -0.105311,0.0206 -0.104138,-0.99809 z"
              />

              <path
                id="path2"
                className="is-sub"
                fill="none"
                ref={pathMap["path2"]}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                stroke="#cae0e6"
                d="m 99.918405,137.94762 c 0,-3.41974 0.03771,-4.81872 0.08379,-3.10885 0.0461,1.70987 0.0461,4.50784 0,6.21771 -0.0461,1.70987 -0.08379,0.31088 -0.08379,-3.10886 z m 3.976035,-8.06979 c 6e-5,-6.11187 0.0348,-8.57441 0.0771,-5.47229 0.0423,3.10211 0.0423,8.10274 -1.2e-4,11.1125 -0.0424,3.00976 -0.0771,0.47167 -0.077,-5.64021 z m 28.30541,-1.71979 c 0,-4.00182 0.0368,-5.63893 0.0817,-3.63802 0.0449,2.00091 0.0449,5.27513 0,7.27604 -0.045,2.00091 -0.0817,0.3638 -0.0817,-3.63802 z m -60.593657,-1.71979 c 2.15e-4,-3.05594 0.03873,-4.26986 0.08559,-2.6976 0.04686,1.57226 0.04668,4.07257 -3.97e-4,5.55625 -0.04707,1.48368 -0.08541,0.19729 -0.08519,-2.85865 z m 3.908337,3.175 c 0.0054,-0.43656 0.06469,-0.58313 0.131774,-0.3257 0.06708,0.25744 0.06267,0.61462 -0.0098,0.79375 -0.07248,0.17914 -0.127363,-0.0315 -0.121971,-0.46805 z m -3.908337,-20.37292 c 2.15e-4,-3.05593 0.03873,-4.26985 0.08559,-2.6976 0.04686,1.57226 0.04668,4.07257 -3.97e-4,5.55625 -0.04707,1.48368 -0.08541,0.19729 -0.08519,-2.85865 z m 60.593657,-1.71979 c 0,-4.00182 0.0368,-5.63893 0.0817,-3.63802 0.0449,2.00091 0.0449,5.27513 0,7.27604 -0.045,2.00091 -0.0817,0.3638 -0.0817,-3.63802 z m -28.42669,-7.0906 0.13209,-9.181273 0.0699,8.979023 c 0.0385,4.93846 -0.021,9.07004 -0.13209,9.18128 -0.11111,0.11124 -0.14257,-3.92932 -0.0699,-8.97903 z m -28.234536,6.69373 c 0.002,-0.72761 0.05337,-0.99386 0.114186,-0.59168 0.06082,0.40218 0.05919,0.9975 -0.0036,1.32292 -0.0628,0.32542 -0.11256,-0.004 -0.110574,-0.73124 z M 99.907417,93.365333 c 5.29e-4,-1.89177 0.04261,-2.630959 0.09365,-1.642642 0.051,0.988318 0.0507,2.53613 -7.9e-4,3.439583 -0.05156,0.903454 -0.09333,0.09483 -0.09286,-1.796941 z"
              />

              <circle r="8" id="dot" className="marker" fill="#fff" />
            </g>
          </g>
        </motion.svg>
        <svg className="text" viewBox="0 0 635 125">
          <text
            fill="none"
            stroke="#61dafb"
            transform="translate(50 50)"
            strokeWidth="3"
            fontSize="2vw"
            fontFamily="Montserrat, sans-serif"
            fontWeight="300"
            letterSpacing="0.1em"
            className="is-active path3"
          >
            <tspan>ASRA GTU Champions - 2020</tspan>
          </text>
        </svg>
      </div>
    </div>
  );
}
