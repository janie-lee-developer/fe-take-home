import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const TabsStyles = {
  variants: {
    "enclosed-colored": (props: StyleFunctionProps) => ({
      tab: {
        minHeight: "55px",
        bg:
          props.colorMode == "dark"
            ? "rgba(0,0,0,0.2)"
            : "rgba(255,255,255,0.5)",
        borderColor: "transparent",
        borderWidth: "0px 0px 3px 0px",
        fontWeight: "semibold",
        paddingY: "3px",
        _selected: {
          bg: props.colorMode == "dark" ? "bgBlack" : "bgWhite",
          color: props.colorMode == "dark" ? "hyberBlue" : "black",
          borderBottomColor: props.colorMode == "dark" ? "hyperBlue" : "mint",
        },
      },
      tabpanel: {
        padding: "0",
      },
    }),
  },
};

//
