import type { StyleFunctionProps } from "@chakra-ui/styled-system";

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
  },
  defautProps: {},
};
