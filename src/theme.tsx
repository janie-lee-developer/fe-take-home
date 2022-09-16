import { extendTheme, theme, type ThemeConfig } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./styles/buttonStyle";
import { ThumbNail } from "./styles/thumbNailStyle";
import { TabsStyles as Tabs } from "./styles/tabsStyle";
import { Link } from "./styles/chevronButtonStyle";
import { Text } from "./styles/textStyle";
import { Container } from "./styles/containerStyle";
import { Heading } from "./styles/headingStyle";

const fonts = { mono: `'Menlo', monospace` };

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const CustomTheme = extendTheme({
  breakpoints: {
    xs: "25em",
    sm: "46em",
    md: "56em",
    lg: "64em",
    xl: "80em",
  },
  semanticTokens: {
    colors: {
      siteBackground: {
        default: "linear-gradient(180deg, #141624 0%, #090A10 1%)",
        _light:
          "linear-gradient(180deg, rgba(152, 164, 230, 0.2) 0%, rgba(217, 217, 255, 0) 31.09%),linear-gradient(0deg, #F8F8FC, #F8F8FC)",
      },
    },
    radii: {
      button: "12px",
    },
  },
  colors: {
    black: "#16161D",
    white: "#F8F8FC",
    hyperBlue: "#2563eb",
    charcoal: "#484a4a",
    cloud: "#c2c2c2",
    mint: "#ace6cf",
    teal: "#0c453d",
    bgWhite:
      "linear-gradient(180deg, rgba(152, 164, 230, 0.2) 0%, rgba(217, 217, 255, 0) 31.09%),linear-gradient(0deg, #F8F8FC, #F8F8FC)",
    bgBlack: "linear-gradient(180deg, #141624 0%, #090A10 1%)",
    bgWhite2: "#e8eaf9",
  },
  config,
  components: {
    Button,
    ThumbNail,
    Tabs,
    Link,
    Text,
    Container,
    Heading,
  },
  fonts,
  layerStyles: {
    fullPageScrollEffectSection: {
      position: "relative",
      width: "100%",
      height: "100%",
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      scrollSnapAlign: "start",
    },
  },
  styles: {
    global: {
      html: {
        height: "100%",
        background: "siteBackground",
      },
      "#__next": {
        height: "100%",
      },
      body: {
        padding: 0,
        margin: 0,
        height: "100%",
        width: "100%",
        background: "siteBackground !important",
      },
      a: {
        color: "inherit",
        textDecoration: "none",
      },
    },
  },
});

export default CustomTheme;
