import { LuSettings2, LuShoppingBag } from "react-icons/lu";
import { RiUser2Line } from "react-icons/ri";
import { BiWallet } from "react-icons/bi";
import { PiChatCenteredTextBold, PiWaveformBold } from "react-icons/pi";
import {
  Box,
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import {
  _BLACKER,
  _LIGHTER_BLACK,
  _LIGHT_BLACK,
  _YELLOW,
} from "../../pages/Dashboard";
import { CustomBtn } from "../right-section";
import DisplayMode from "../displayMode/DisplayMode";
import DarkModeImageLayer from "../DarkModeImageLayer";
function LeftSection() {
  const colorMode = useColorMode();
  const bg = useColorModeValue("#fdfdfd", "#333333");
  return (
    <Flex
      pt="10px"
      flexDir={"column"}
      justifyContent="space-between"
      position={"fixed"}
      // bg={bg}
      left={0}
      bottom="0"
      top="0"
      width="20%"
    >
      <DarkModeImageLayer side pl="30px" bg={bg}>
        <Flex flexDir={"column"}>
          <Text mb="30px" fontSize={"2em"} fontFamily="Nunito">
            Tract SEO.
          </Text>
          <Flex flexDir={"column"} gap="30px" maxW="170px">
            {_NAV_LIST.slice(0, 2).map(NavContent)}
            <Text>My Campaign</Text>
            {_NAV_LIST.slice(2).map(NavContent)}
          </Flex>
        </Flex>

        <AdsShowcase />
      </DarkModeImageLayer>
    </Flex>
  );
}

export default LeftSection;

export const NavContent = ({ title, icon: Icon, link }) => {
  const text1 = useColorModeValue(_LIGHTER_BLACK, "#767676");

  return (
    <NavLink
      to={link}
      className={({ isActive }) => (isActive ? "activeClass" : "notActive")}
      style={({ isActive }) =>
        isActive
          ? {
              background: _YELLOW,
              color: _BLACKER,
              paddingTop: "15px",
              paddingBottom: "15px",
              borderRadius: "10px",
              fontWeight: "800",
            }
          : {
              color: text1,
              fontFamily: "PT Sans",
            }
      }
    >
      <Flex
        key={title}
        ml="10px"
        gap="10px"
        flexDir={"row"}
        alignItems="center"
        pl="10px"
        pr="40px"
      >
        <Icon fontSize="1.5em" />
        <Text fontFamily="Nunito">{title}</Text>
      </Flex>
    </NavLink>
  );
};

export const _NAV_LIST = [
  {
    title: "Dashboard",
    icon: LuSettings2,
    link: "/",
  },
  {
    title: "Overview",
    icon: RiUser2Line,
    link: "/overview",
  },
  {
    title: "Earnings",
    icon: BiWallet,
    link: "/earnings",
  },
  {
    title: "Social Stats",
    icon: PiChatCenteredTextBold,
    link: "/social-stats",
  },
  {
    title: "Audio / Music",
    icon: PiWaveformBold,
    link: "/audio-music",
  },
  {
    title: "Media Kit",
    icon: LuShoppingBag,
    link: "/media-kit",
  },
];

export const AdsShowcase = () => {
  const bgStyle = useColorModeValue(
    { boxShadow: "4px 14px 13px #8080800d" },
    {
      bg: "#292929",
    }
  );
  const text1 = useColorModeValue(_LIGHT_BLACK, "#6e6e6e");
  const text2 = useColorModeValue(_LIGHTER_BLACK, "#9c9a9a");

  return (
    <Flex
      flexDir={"column"}
      {...bgStyle}
      margin="10px"
      borderRadius="10px"
      // alignItems="center"
      gap="10px"
      p="10px"
      pb="25px"
      mb="30px"
    >
      <Logo alignSelf="flex-start" />

      <Flex
        fontFamily="Nunito"
        flexDir={"column"}
        alignItems="center"
        gap="10px"
      >
        <Flex flexDir={"column"} alignItems="center">
          <Text fontSize={"2.2em"} fontFamily="Nunito">
            40% Off
          </Text>
          <Text color={text1} fontSize="1.3em" fontWeight={"400"}>
            On every Courses
          </Text>
        </Flex>

        <Flex>
          <Text color={text2} fontSize=".8em" textAlign={"center"}>
            Tract.courses/new
          </Text>
        </Flex>
        <Flex>
          <CustomBtn p="15px 20px" borderRadius="10px">
            <Text fontFamily={"Nunito"} fontSize={"1.2em"} fontWeight="800">
              {" "}
              Get Pro Now
            </Text>
          </CustomBtn>
          {/* <Flex p="10px" bg={"yellow"}></Flex> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export const Logo = ({ lg = false, ...props }) => {
  return (
    <Flex gap="2px" {...props}>
      <Box
        h={lg ? "40px" : "20px"}
        w={lg ? "20px" : "10px"}
        bg="yellow"
        borderRadius={"2px"}
      />
      <Box
        h={lg ? "20px" : "10px"}
        w={lg ? "20px" : "10px"}
        bg="black"
        borderRadius={"2px"}
      />
    </Flex>
  );
};
