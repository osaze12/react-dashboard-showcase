import {
  Avatar,
  Box,
  Flex,
  Skeleton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { TiTimes } from "react-icons/ti";
import { FaAngleDown, FaCheck, FaTiktok } from "react-icons/fa";
import { BiBadgeCheck } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { PiBellBold } from "react-icons/pi";
import {
  _BLACK,
  _BLACKER,
  _LIGHTER_BLACK,
  _LIGHT_BLACK,
  _LOADER_COLOR,
  _YELLOW,
} from "../../pages/Dashboard";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useEffect } from "react";
import DarkModeImageLayer from "../DarkModeImageLayer";

function RightSection() {
  const bg = useColorModeValue("#fdfdfd", "#333333");

  return (
    <Flex
      flexDir={"column"}
      bg={"#fff"}
      position={"fixed"}
      // bg="#fdfdfd"
      bottom="0"
      top="0"
      w="25%"
    >
      <DarkModeImageLayer side p="20px" bg={bg}>
        <RightUserTopProfile />
        <Activities />
      </DarkModeImageLayer>
    </Flex>
  );
}

export default RightSection;

export const RightUserTopProfile = () => {
  const text1 = useColorModeValue(_BLACKER, "#ebebeb");
  const text2 = useColorModeValue("#000", _YELLOW);
  const text3 = useColorModeValue(_BLACK, "#ebebeb");
  const text4 = useColorModeValue(_LIGHTER_BLACK, "#868484");
  const text5 = useColorModeValue(_BLACKER, "#e9e9e9");

  return (
    <Flex
      flexDir={"row"}
      alignItems="center"
      justifyContent={"space-between"}
      mb="20px"
      color={_BLACKER}
    >
      <Flex position={"relative "} p="8px">
        <PiBellBold color={text1} fontSize={"1.5em"} />
        <Box
          position={"absolute"}
          w="8px"
          h="8px"
          bg={text2}
          top="0"
          right="0"
          borderRadius={"50%"}
        />
      </Flex>

      <Flex flexDir={"row"} alignItems="center" gap="10px">
        <Flex position={"relative "}>
          <Avatar size="sm" src="https://bit.ly/code-beast" />

          <Box
            position={"absolute"}
            w="8px"
            h="8px"
            bg="#000"
            top="-2px"
            right="-3px"
            borderRadius={"50%"}
          />
        </Flex>
        <Flex flexDir={"column"}>
          <Text color={text3}>Segun Adebayo</Text>
          <Text fontWeight="700" fontSize={".8em"} color={text4}>
            Admin
          </Text>
        </Flex>

        <FaAngleDown color={text5} />
      </Flex>
    </Flex>
  );
};

export const Activities = () => {
  const [loading, setLoading] = useState(true);
  const text6 = useColorModeValue(_BLACKER, "#ebebeb");
  const text7 = useColorModeValue("transparent", "#414141d9");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  return (
    <Flex flexDir={"column"} color={_BLACK}>
      <Skeleton
        startColor={_LOADER_COLOR}
        endColor={_LOADER_COLOR}
        isLoaded={!loading}
      >
        <Flex
          fontSize={"1.5em"}
          flexDir={"row"}
          alignItems="center"
          justifyContent="space-between"
        >
          <Text color={text6}>Activities</Text>
          <Flex p="10px" bg={text7} borderRadius={"50%"}>
            <TiTimes color={text6} />
          </Flex>
        </Flex>
      </Skeleton>

      <br />
      <Skeleton
        startColor={_LOADER_COLOR}
        endColor={_LOADER_COLOR}
        isLoaded={!loading}
      >
        <Flex flexDir={"column"} gap="15px">
          <AnimatePresence>
            {_ACTIVITIES_LIST.map(ActivityContent)}
          </AnimatePresence>
        </Flex>
      </Skeleton>
    </Flex>
  );
};

export const ActivityContent = ({
  title,
  type,
  icon: Icon,
  time,
  buttonTitle,
  name,
  description,
  subType,
  price,
  id,
  imgLink,
}) => {
  const bgStyle1 = useColorModeValue("#f7f7f7", "#262626");
  const text1 = useColorModeValue(_BLACK, "#f9f9f9");
  const text2 = useColorModeValue(_LIGHTER_BLACK, "#4d4b4b");
  const text3 = useColorModeValue(_BLACK, _YELLOW);
  const text4 = useColorModeValue(_LIGHTER_BLACK, "#f9f9f9");
  const text5 = useColorModeValue("#fff", "#f9f9f9");

  switch (type) {
    case "JOIN":
      return (
        <motion.div
          // key={item}

          layout
          initial={{
            y: 150,
            x: 0,
            opacity: 0,
          }}
          animate={{
            y: 0,
            x: 0,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <Flex
            key={id}
            justifyContent="space-between"
            bg={bgStyle1}
            p="20px"
            borderRadius="15px"
            alignItems={"center"}
          >
            <Flex gap="10px" alignItems="center">
              <Icon fontSize="2em" color={text3} />
              <Flex gap="5px" flexDir={"column"}>
                <Text color={text1}>{title}</Text>
                <Text fontSize={".8em"} color={text2}>
                  {time}
                </Text>
              </Flex>
            </Flex>

            <CustomBtn>
              <Text fontSize={"1.2em"} fontWeight="700" px="10px">
                {buttonTitle}
              </Text>
            </CustomBtn>
          </Flex>
        </motion.div>
      );
    case "JOIN_VERIFIED":
      return (
        <motion.div
          // key={item}

          layout
          initial={{
            y: 150,
            x: 0,
            opacity: 0,
          }}
          animate={{
            y: 0,
            x: 0,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <Flex
            key={id}
            justifyContent="space-between"
            bg={bgStyle1}
            p="20px"
            borderRadius="15px"
            alignItems={"center"}
          >
            <Flex gap="10px" alignItems="center">
              <Icon color={text3} fontSize="2em" />
              <Flex gap="5px" flexDir={"column"}>
                <Flex flexDir={"row"} alignItems="center" gap="5px">
                  <Text color={text1}>{title}</Text>
                  <Flex bg={_YELLOW} borderRadius="50%">
                    <BiBadgeCheck />
                  </Flex>
                </Flex>
                <Text fontSize={".8em"} color={text2}>
                  {time}
                </Text>
              </Flex>
            </Flex>

            <CustomBtn>
              <Text fontSize={"1.2em"} fontWeight="700">
                {buttonTitle}
              </Text>
            </CustomBtn>
          </Flex>
        </motion.div>
      );
    case "ACCEPT_VERIFIED":
      return (
        <motion.div
          // key={item}

          layout
          initial={{
            y: 150,
            x: 0,
            opacity: 0,
          }}
          animate={{
            y: 0,
            x: 0,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <Flex
            key={id}
            flexDir={"column"}
            justifyContent="space-between"
            bg={bgStyle1}
            p="20px"
            borderRadius="15px"
            alignItems={"center"}
          >
            <Flex flexDir={"row"} alignItems="flex-start" gap="10px">
              <Flex position={"relative"}>
                <Avatar name={name} src={imgLink} />
                <Flex
                  bg={_YELLOW}
                  borderRadius="50%"
                  p="4px"
                  alignSelf={"center"}
                  position="absolute"
                  top="0"
                  right="0"
                >
                  <FaCheck color={_BLACKER} fontSize={".6em"} />
                </Flex>
              </Flex>
              <Flex flexDir={"column"}>
                <Text color={text1}>{name}</Text>
                <Text fontSize={".9em"} color={"grey"} mb="10px">
                  {time}
                </Text>
                <Text mb="20px" color={text4}>
                  {description}
                </Text>
              </Flex>
            </Flex>
            {/* bottom button */}
            <Flex
              borderRadius={"8px"}
              color="#fff"
              bg={_BLACKER}
              alignItems={"center"}
              justifyContent="space-between"
              p="7px"
              alignSelf={"stretch"}
            >
              <Text color={text5} fontSize="1.2em">
                $ {price}{" "}
                <span style={{ color: "grey", fontSize: ".8em" }} color="grey">
                  /{subType}
                </span>
              </Text>
              <CustomBtn>
                <Text fontSize={"1.2em"} fontWeight="700">
                  {buttonTitle}
                </Text>
              </CustomBtn>
            </Flex>
          </Flex>
        </motion.div>
      );

    default:
      return (
        <motion.div
          // key={item}

          layout
          initial={{
            y: 150,
            x: 0,
            opacity: 0,
          }}
          animate={{
            y: 0,
            x: 0,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <Flex
            key={id}
            bg={"#f7f7f7"}
            p="20px"
            borderRadius="15px"
            alignItems={"center"}
          >
            <Icon />
            <Flex gap="10px">
              <Text>{title}</Text>
              <Text>{time}</Text>
            </Flex>
            <CustomBtn>{buttonTitle}</CustomBtn>
          </Flex>
        </motion.div>
      );
  }
};

export const _ACTIVITIES_LIST = [
  {
    type: "JOIN",
    title: "Tiktok Music",
    time: "2 Hours Ago...",
    buttonTitle: "Join",
    link: "/",
    icon: FaTiktok,
    id: 0,
  },
  {
    type: "ACCEPT_VERIFIED",
    name: "Adekunle Kolawole",
    description: `"Hey Can you create a Collab With my family?"`,
    price: "45.00",
    subType: "Collab",
    time: "8 Hours Ago...",
    buttonTitle: "Accept",
    link: "/",
    icon: FaTiktok,
    imgLink: "https://bit.ly/code-beast",

    id: 1,
  },

  {
    type: "JOIN_VERIFIED",
    title: "Tiktok UK Group",
    time: "2 Hours Ago...",
    buttonTitle: "Join",
    icon: FaTiktok,

    link: "/",
    id: 2,
  },
  {
    type: "ACCEPT_VERIFIED",
    name: "Andrew Johnson",
    description: `"Hey Can you create a Collab With my family?"`,
    price: "45.00",
    subType: "Collab",
    time: "8 Hours Ago...",
    buttonTitle: "Accept",
    imgLink: "https://bit.ly/kent-c-dodds",
    link: "/",
    id: 3,
  },
];

export const CustomBtn = ({ children, ...props }) => {
  return (
    <Flex
      bg="yellow"
      color="#000"
      p="5px 7px 5px 7px"
      borderRadius={"4px"}
      flexDir={"column"}
      fontSize=".8em"
      alignSelf="center"
      cursor={"pointer"}
      {...props}
    >
      {children}
    </Flex>
  );
};
