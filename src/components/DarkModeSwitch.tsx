import { useColorMode, IconButton, color } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <IconButton
      // position="fixed"
      // top={4}
      // right={4}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      aria-label="Toggle Theme"
      bgColor={isDark ? "rgba(99, 99, 99,0.2)" : "rgba(172, 230, 207,0.4)"}
      color={isDark ? "hyperBlue" : "#1a473f"}
      onClick={toggleColorMode}
      _hover={
        isDark
          ? { bg: "rgba(99, 99, 99,0.4)" }
          : { bg: "rgba(172, 230, 207,0.8)" }
      }
    />
  );
};
