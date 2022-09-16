import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { keyframes } from "@chakra-ui/react";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
70% { transform:translateY(0%); }
80% { transform:translateY(-15%); }
90% { transform:translateY(0%); }
95% { transform:translateY(-7%); }
97% { transform:translateY(0%); }
99% { transform:translateY(-3%); }
100% { transform:translateY(0); }
`;

const animation = `${animationKeyframes} 4s ease infinite`;
export const Link = {
  variants: {
    chevronButton: (props: StyleFunctionProps) => ({
      display: "block",
      position: "absolute",
      bg: "yello",
      left: "48%",
      bottom: "-19px",
      fontSize: "100px",
      color: props.colorMode == "dark" ? "hyperBlue" : "mint",
      animation,
    }),
    chevronButton2: (props: StyleFunctionProps) => ({
      display: "block",
      position: "absolute",
      bg: "yello",
      left: "48%",
      bottom: "-19px",
      fontSize: "100px",
      color: props.colorMode == "dark" ? "hyperBlue" : "bgWhite2",
      animation,
    }),
  },
};
