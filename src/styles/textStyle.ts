import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const Text = {
  variants: {
    style1: (props: StyleFunctionProps) => ({
      fontSize: "15px",
      color: props.colorMode == "dark" ? "white" : "bgWhite2",
      position: "absolute",
      bottom: "5",
      width: "150px",
      left: "-13%",
    }),
  },
};
