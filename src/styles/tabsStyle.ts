import type { StyleFunctionProps } from "@chakra-ui/styled-system";

export const TabsStyles = {
  variants: {
    "enclosed-colored": (props: StyleFunctionProps) => ({
      tab: {
        bg:
          props.colorMode == "dark"
            ? "rgba(0,0,0,0.2)"
            : "rgba(255,255,255,0.5)",
        borderColor: "transparent",
        borderWidth: "0px 0px 5px 0px",
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
