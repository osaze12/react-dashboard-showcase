import { Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { IoMdMoon } from "react-icons/io";
import { _BLACKER } from "../../pages/Dashboard";
function DisplayMode({ ...props }) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [state, setState] = useState(colorMode);
  const modeBg = useColorModeValue("#fff", "#383838");
  const modeBoxShadowBg = useColorModeValue("#cfd9e6", "#081b2e");

  const containerBg = useColorModeValue("#F0F3F7", _BLACKER);

  const xStyle = {
    bg: modeBg,
    borderRadius: "20px",

    justifyContent: "space-between",
    boxShadow: `2px 2px 5px 0px ${modeBoxShadowBg}`,
  };
  const iniStyle = {
    direction: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    p: "7px 5px",
    w: "20px",
    h: "10px",
    maxW: "20px",
    cursor: "pointer",
    spacing: "20px",
    boxSizing: "initial",
  };
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      bg={containerBg}
      borderRadius={"30px"}
      p="3px 3px"
      w="70px"
      maxW="195px"
      justifyContent={"space-between"}
      mr={["0px", "20px"]}
      {...props}
    >
      <Stack
        {...(state === "light" ? xStyle : {})}
        {...iniStyle}
        onClick={() => {
          if (colorMode === "light") return;
          toggleColorMode();
          setState("light");
        }}
      >
        <BsSunFill
          color={colorMode === "dark" ? "#292929" : "#CFD9E6"}
          fontSize={"1.2em"}
        />
      </Stack>
      <Stack
        {...(state === "dark" ? xStyle : {})}
        {...iniStyle}
        onClick={() => {
          if (colorMode === "dark") return;
          toggleColorMode();
          setState("dark");
        }}
      >
        <IoMdMoon
          color={colorMode === "dark" ? "#000" : "#CFD9E6"}
          fontSize={"1.2em"}
        />
      </Stack>
    </Stack>
  );
}

export default DisplayMode;
