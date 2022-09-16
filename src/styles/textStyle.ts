import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const Text = {
  variants: {
    style1: (props: StyleFunctionProps) => ({
      fontSize: "15px",
      color: props.colorMode == "dark" ? "white" : "bgWhite2",
      position: "absolute",
      bottom: "5px",
      width: "150px",
      left: "46.5%",
    }),
    style2: (props: StyleFunctionProps) => ({
      fontSize: "15px",
      color: props.colorMode == "dark" ? "white" : "bgWhite2",
      position: "absolute",
      bottom: "5px",
      width: "150px",
      left: "48.5%",
    }),
    style3: (props: StyleFunctionProps) => ({
      fontSize: "15px",
      color: props.colorMode == "dark" ? "white" : "mint",
      position: "absolute",
      bottom: "5px",
      width: "150px",
      left: "48.5%",
    }),
  },
};
