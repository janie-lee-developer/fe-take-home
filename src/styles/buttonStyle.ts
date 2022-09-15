import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const ButtonStyles = {
  baseStyle: {},
  sizes: {},
  variants: {
    outline: (props: StyleFunctionProps) => ({
      bg: "transparent",
      border: "1.5px solid",
      borderColor: props.colorMode == "dark" ? "white" : "black",
      color: props.colorMode == "dark" ? "white" : "black",
      _hover: {
        bg: props.colorMode == "dark" ? "white" : "black",
        color: props.colorMode == "dark" ? "black" : "white",
        boxShadow: "sm",
        transform: "scale(1.02)",
      },
    }),
  },
  defautProps: {},
};

//<Button variant='outline'></Button>
