import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { keyframes } from "@chakra-ui/react";

const animationKeyframes = keyframes`
0% {
    top: 0px;
    height: 0;
  }
  10% {
    top: 0px;
    height: 45px; 
  }
  15% {
    height: 45px;
  }
  20% {
    top: 0px;
    height: 0;
  }
  25% {
    top: -45px;
    height: 0;
  }
  30% {
    top: -45px;
    height: 45px;
  }
  35% {
   top: -45px;
    height: 45px;
  }
  40% {
    top: -45px;
    height: 0px;
  }
  45% {
    top: -90px;
    height: 0px;
  }
  50% {
    top: -90px;
    height: 45px; //3
  }
  55% {
    top:-90px;
    height: 45px;
  }
  60% {
    top: -90px;
    height: 0px;
  }
  65% {
    top: -135px;
    height: 0px
  }
  70% {
    top: -135px;
    height: 45px; //4
  }
  75% {
    top: -135px;
    height: 45px;
  }
  80% {
    top: -135px;
    height: 0px
  }
  85% {
    top: -180px;
    height: 0px;
  }
  90% {
    top: -180px;
    height: 45px; //5
  }
  95% {
    top: -180px;
    height:45px;
  }
  100% {
    top: -180px;
    height: 0;
  }
`;
const animation = `${animationKeyframes} 10s ease-in-out infinite`;
//openclose 5s ease-in-out infinite;
export const Container = {
  variants: {
    highlight: (props: StyleFunctionProps) => ({
      //   width: "100%",
      //   backgroundColor:
      //     props.colorMode == "dark" ? "white" : "rgba(255,255,255,0.4)",

      //   color: "#333",
      //   display: "block",
      //   fontWeight: "600",
      //   overflow: "hidden",
      //   width: "230px",
      position: "absolute",
      px: "0px",
      //   ml: "10px",
      //   left: "320px",
      //   top: "-45px",
      //   left: "10%",
      top: "0px",
      //   textIndent: "7px",
      //   overflow: "hidden",
      //   textAlign: "center",
      //   width: "50px",
      //   width: "100px",
      //   height: "40px",

      animation,
    }),
  },
};
