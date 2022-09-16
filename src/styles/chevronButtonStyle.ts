import type { StyleFunctionProps } from "@chakra-ui/styled-system";

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
    }),
    chevronButton2: (props: StyleFunctionProps) => ({
      display: "block",
      position: "absolute",
      bg: "yello",
      left: "48%",
      bottom: "-19px",
      fontSize: "100px",
      color: props.colorMode == "dark" ? "hyperBlue" : "bgWhite2",
    }),
  },
};
