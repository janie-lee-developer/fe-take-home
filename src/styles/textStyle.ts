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
      color: props.colorMode == "dark" ? "white" : "teal",
      position: "absolute",
      bottom: "5px",
      width: "150px",
      left: "48.5%",
    }),
    style3: (props: StyleFunctionProps) => ({
      fontSize: "15px",
      color: props.colorMode == "dark" ? "white" : "teal",
      position: "absolute",
      bottom: "5px",
      width: "150px",
      left: "48.5%",
    }),
    style4: (props: StyleFunctionProps) => ({
      fontSize: "30px",
      color: props.colorMode == "dark" ? "white" : "teal",
      fontWeight: "semibold",
      width: "90%",
      margin: "auto",
      textAlign: "center",
    }),
    style5: (props: StyleFunctionProps) => ({
      fontSize: "30px",
      color: props.colorMode == "dark" ? "white" : "teal",
      fontWeight: "semibold",
      ml: "0px",
      overflow: "hidden",
    }),
    style6: (props: StyleFunctionProps) => ({
      fontSize: "50px",
      color: props.colorMode == "dark" ? "white" : "teal",
      fontWeight: "semibold",
      ml: "0px",
      overflow: "hidden",
    }),
  },
};
