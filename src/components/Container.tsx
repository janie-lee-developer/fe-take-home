import { Flex, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps) => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bgColor="siteBackground"
      color="white"
      _light={{
        color: "black",
      }}
      transition="all 0.15s ease-out"
      {...props}
    />
  );
};
