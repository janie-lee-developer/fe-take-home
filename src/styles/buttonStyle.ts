import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { Style } from "util";

export const ButtonStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    outline: (props: StyleFunctionProps) => ({
      bg: "transparent",
      border: "1.5px solid",
      borderColor: props.colorMode == "dark" ? "white" : "teal",
      color: props.colorMode == "dark" ? "white" : "teal",
      _hover: {
        bg: props.colorMode == "dark" ? "white" : "mint",
        color: props.colorMode == "dark" ? "black" : "teal",
        borderColor: "transparent",
        boxShadow: "sm",
        transform: "scale(1.02)",
      },
    }),
    solidCustom: (props: StyleFunctionProps) => ({
      mr: "10px",
      bg: props.colorMode == "dark" ? "hyperBlue" : "teal",
      color: props.colorMode == "dark" ? "white" : "bgWhite2",
      _hover: {
        bg: props.colorMode == "dark" ? "white" : "mint",
        color: props.colorMode == "dark" ? "black" : "teal",
      },
    }),
  },
  defautProps: {},
};
