import { Box, Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";
import water from "../assets/marissa-rodriguez-2mKYEVGA4jE-unsplash.jpeg";

function DarkModeImageLayer({ side = false, children, ...props }) {
  const bg = useColorModeValue("#fff", side ? "#1a1a1a" : "#000");
  const { colorMode } = useColorMode();

  return (
    <Flex
      position={"relative"}
      w="100%"
      h={side ? "100vh" : "100%"}
      flexDir="column"
      background={bg}
      {...props}
    >
      <Box position={"relative"} zIndex="2">
        {children}
      </Box>

      {colorMode === "dark" && (
        <img
          src={water}
          alt="water"
          width="100%"
          height={side ? "100%" : "100%"}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            objectFit: "cover",
            opacity: "0.2",
            zIndex: "1",
            height: "100%",
          }}
        />
      )}
    </Flex>
  );
}

export default DarkModeImageLayer;
