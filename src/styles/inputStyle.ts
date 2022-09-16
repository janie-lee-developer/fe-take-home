import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const Input = {
  variants: {
    outline: (props: StyleFunctionProps) => ({
      field: {
        border: "2px",
        borderColor:
          props.colorMode == "dark" ? "rgba(37, 99, 235,0.5)" : "teal",
        width: "40%",
        ml: "5%",
        _hover: {
          borderColor: "hyperBlue",
        },
        _readONLY: {
          boxShadow: "none",
        },
        _focusVisible: {
          borderColor: "hyperBlue",
          boxShadow: "none",
        },
      },
    }),
  },
};
