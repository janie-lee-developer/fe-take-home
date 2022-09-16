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

export const Container = {
  variants: {
    highlight: (props: StyleFunctionProps) => ({
      position: "absolute",
      px: "0px",
      top: "0px",
      animation,
    }),
  },
};
