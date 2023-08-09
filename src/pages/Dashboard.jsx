import {
  Box,
  Divider,
  Flex,
  Input,
  Skeleton,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaTiktok, FaUser } from "react-icons/fa";
import { LuCalendarDays } from "react-icons/lu";
import { RiSearchLine } from "react-icons/ri";
import { BsFillPlayFill } from "react-icons/bs";
import { IoMdArrowDropup } from "react-icons/io";
import { AiFillApple } from "react-icons/ai";
import { PiDotsThreeOutlineVertical } from "react-icons/pi";
import { TbBrandSpotify } from "react-icons/tb";
import { useEffect, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import DarkModeImageLayer from "../components/DarkModeImageLayer";
import DisplayMode from "../components/displayMode/DisplayMode";

function Dashboard() {
  return (
    <Flex flexDir={"column"}>
      <DashboardHead />
      <DashboardAccountStat />
      <Divider mt="30px" />
      <TransactionsTable />
    </Flex>
  );
}

export default Dashboard;

export const paddingLeftRight = "20px";

export const DashboardHead = ({ ...props }) => {
  const text1 = useColorModeValue("#cccbcb", "#616161");
  const text2 = useColorModeValue("#1a1a1a", "#fefefe");
  const text3 = useColorModeValue("#000000b0", "#fefefe");
  const text4 = useColorModeValue(_LIGHT_BLACK, "#4a4a4a");

  return (
    <>
      <Flex
        justifyContent={"space-between"}
        my="10px"
        px={paddingLeftRight}
        {...props}
      >
        <Flex flexDir={"column"} flex="2">
          <Text fontSize="1.3em" color={text1}>
            Hi Jessica,
          </Text>
          <Text
            // fontFamily={"Nunito"}
            fontWeight="800"
            color={text2}
            fontSize={"2em"}
          >
            Welcome Back
          </Text>
        </Flex>

        <Flex alignItems={"center"} flex="1">
          <RiSearchLine color={text3} fontSize="2em" />
          <Input
            outline={"none"}
            fontSize=".9em"
            _focus={{
              outline: "none",
              border: "none",
              boxShadow: "none",
            }}
            border="none"
            _placeholder={{
              color: text4,
              fontWeight: "600",
              fontFamily: "Nunito",
            }}
            placeholder="Search"
          />
        </Flex>
        <DisplayMode alignSelf="center" />
      </Flex>
      <Divider />
    </>
  );
};

export const DashboardAccountStat = () => {
  const [loading, setLoading] = useState(true);
  const text1 = useColorModeValue("#0c0c0c", "#fefefe");
  const text2 = useColorModeValue("#cccbcb", "#888788");
  const text3 = useColorModeValue("#000000b0", "#404040");
  const text4 = useColorModeValue(_LIGHT_BLACK, "#656565");
  const text5 = useColorModeValue(_LIGHT_BLACK, _YELLOW);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Flex flexDir={"column"} px={paddingLeftRight}>
      <Flex alignItems="center" justifyContent="space-between" my="20px">
        <Flex flexDir={"column"}>
          <Text
            color={text1}
            fontSize={"1.5em"}
            fontWeight="bold"
            fontFamily="PT Sans"
          >
            Account Statistics
          </Text>
          <Text color={text3} fontSize=".9em">
            <span style={{ color: text2 }}>Statistics: </span>Youtube,
            Instagram, Facebook
          </Text>
        </Flex>
        <Skeleton
          startColor={_LOADER_COLOR}
          endColor={_LOADER_COLOR}
          isLoaded={!loading}
        >
          <SelectContainerStyle>
            <Text fontFamily={"PT Sans"} fontSize="1.1em" color={text4}>
              Last 3 month
            </Text>
            <LuCalendarDays color={text5} />
          </SelectContainerStyle>
        </Skeleton>
      </Flex>
      <Skeleton
        startColor={_LOADER_COLOR}
        endColor={_LOADER_COLOR}
        isLoaded={!loading}
      >
        <Flex alignItems={"center"} justifyContent="space-between">
          <AnimatePresence>
            {_AccountStatList.map(AccountStatCards)}
          </AnimatePresence>
        </Flex>
      </Skeleton>
    </Flex>
  );
};

export const AccountStatCards = ({
  title,
  total,
  growth,
  growthDate,
  icon: Icon,
  primaryColor,
  secondaryColor,
  textColor,
  otherColor,
}) => {
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
        alignItems={"center"}
        p="20px 25px"
        bg={primaryColor}
        borderRadius="15px"
        gap="20px"
        w="300px"
      >
        <Flex bg={secondaryColor} p="10px" borderRadius={"15px"}>
          <Icon color={primaryColor} fontSize="1.7em" />
        </Flex>
        <Flex flexDir={"column"}>
          <Text fontFamily={"PT Sans"} fontSize=".9em" color={otherColor}>
            {title}
          </Text>
          <Text
            fontFamily={"PT Sans"}
            mt="5px"
            fontWeight={"700"}
            fontSize={"2.2em"}
            letterSpacing="-3px"
            color={textColor}
          >
            {total}
          </Text>

          <Flex
            mt="10px"
            color={`${secondaryColor}99`}
            flexDir={"row"}
            alignItems="center"
            fontFamily={"PT Sans"}
            fontSize=".9em"
          >
            <Text>{growth}</Text>
            <IoMdArrowDropup />
            <Text>{growthDate}</Text>
          </Flex>
        </Flex>
      </Flex>
    </motion.div>
  );
};

export const _AccountStatList = [
  {
    title: "Total Followers",
    total: "1,098,808",
    growth: "+7%",
    growthDate: "Growth Last Week",
    icon: FaUser,
    primaryColor: "#1a1a1a",
    secondaryColor: "#fffd00",
    textColor: "#fff",
    otherColor: "#9e9e9e",
  },
  {
    title: "Total Views",
    total: "332,456",
    growth: "+7%",
    growthDate: "Growth Last Week",
    icon: BsFillPlayFill,
    primaryColor: "#fffd00",
    secondaryColor: "#1a1a1a",
    textColor: "#1a1a1a",
    otherColor: "#000000b0",
    allBold: true,
  },
];

export const TransactionsTable = () => {
  const [loading, setLoading] = useState(true);
  const text1 = useColorModeValue("#1a1a1a", "#d7d7d7");
  const text2 = useColorModeValue(_LIGHT_BLACK, "#7e7e7e");
  const text3 = useColorModeValue(_LIGHT_BLACK, _YELLOW);

  const text4 = useColorModeValue("#000000b0", "#404040");

  const text5 = useColorModeValue("#cccbcb", "#888788");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Flex flexDir={"column"} my="20px" px={paddingLeftRight}>
      <Flex
        flexDir={"row"}
        alignItems="center"
        justifyContent={"space-between"}
        mb="30px"
      >
        <Flex flexDir={"column"}>
          <Text color={text1} fontSize={"1.5em"}>
            Latest Transactions
          </Text>
          <Text color={text4} fontSize=".9em">
            <span style={{ color: text5 }}>Statistics: </span>Youtube,
            Instagram, Facebook
          </Text>
        </Flex>

        <Skeleton
          startColor={_LOADER_COLOR}
          endColor={_LOADER_COLOR}
          isLoaded={!loading}
        >
          <SelectContainerStyle>
            <Text fontFamily={"PT Sans"} fontSize="1.1em" color={text2}>
              Last 7 Days
            </Text>
            <LuCalendarDays fontSize={"1.2em"} color={text3} />
          </SelectContainerStyle>
        </Skeleton>
      </Flex>

      {/* transactions table */}

      <Skeleton
        startColor={_LOADER_COLOR}
        endColor={_LOADER_COLOR}
        isLoaded={!loading}
      >
        <Flex flexDir={"column"} gap="30px">
          <AnimatePresence>
            {_Transactions_LIST.map(TransactionContent)}
          </AnimatePresence>
        </Flex>
      </Skeleton>
    </Flex>
  );
};

export const TransactionContent = ({ date, dateList }) => {
  const colorMode = useColorMode();
  const text1 = useColorModeValue(_BLACK, "#444444");

  const text2 = useColorModeValue(_BLACK, "#ebebeb");
  const text3 = useColorModeValue(_LIGHT_BLACK, "#888788");
  const text5 = useColorModeValue("#000000b0", "#929292");
  const text6 = useColorModeValue(_BLACKER, "#f9f9f9");
  const text7 = useColorModeValue(_BLACK, "#a8a6a8");

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
      <Flex color="#000000b0" flexDir={"column"}>
        <Flex position={"relative"}>
          <Text
            position={"relative"}
            zIndex="2"
            fontSize={".9em"}
            color={text1}
          >
            {date}
          </Text>
          {colorMode === "light" && (
            <Box
              position="absolute"
              bottom="5px"
              w="70px"
              h="3px"
              bg={_YELLOW}
              zIndex="1"
            />
          )}
        </Flex>
        {dateList.map(
          ({
            icon: Icon,
            title,
            transDesc,
            purchaseDate,
            trans,
            iconColor,
            iconBgColor,
          }) => (
            <>
              <Flex
                justifyContent={"space-between"}
                alignItems="center"
                py="15px"
              >
                <Flex
                  flexDir={"row"}
                  alignItems="center"
                  gap="10px"
                  maxW="150px"
                >
                  <Flex bg={iconBgColor} p="5px" borderRadius={"8px"}>
                    <Icon fontSize="1.5em" color={iconColor} />
                  </Flex>
                  <Flex flexDir={"column"}>
                    <Text fontSize={"1.5em"} color={text2}>
                      {title}
                    </Text>
                    <Text
                      fontFamily={"PT Sans"}
                      color={text3}
                      fontSize={".9em"}
                    >
                      {transDesc}
                    </Text>
                  </Flex>
                </Flex>

                <Text
                  maxW="110px"
                  fontFamily="PT Sans"
                  alignSelf={"centerF"}
                  color={text5}
                  fontSize="1.2em"
                >
                  {purchaseDate}
                </Text>
                <Text
                  fontFamily={"Nunito"}
                  color={text6}
                  fontWeight="800"
                  fontSize="1.5em"
                >
                  {trans}
                </Text>
                <PiDotsThreeOutlineVertical color={text7} fontSize={"2em"} />
              </Flex>
              <Divider mt="10px" />
            </>
          )
        )}
      </Flex>
    </motion.div>
  );
};

export const _Transactions_LIST = [
  {
    date: "August, 2021",
    dateList: [
      {
        icon: AiFillApple,
        title: "Apple Pay",
        transDesc: "Shopping",
        purchaseDate: "8 Aug, 4:32 PM",
        trans: "-$50",
        iconColor: "#fff",
        iconBgColor: "#1a1a1a",
      },
      {
        icon: BsFillPlayFill,

        title: "Youtube Ad",
        transDesc: "Mothly Payment",
        purchaseDate: "5 Aug, 7:12 PM",
        trans: "+$2500",
        iconColor: "#1a1a1a",
        iconBgColor: "#fffd00",
      },
      {
        icon: FaTiktok,

        title: "Tik tok",
        transDesc: "Ads Payment Credit",
        purchaseDate: "2 Aug, 11:30 PM",
        trans: "+$900",
        iconColor: "#fff",
        iconBgColor: "#1a1a1a",
      },
    ],
  },
  {
    date: "Septmber, 2021",
    dateList: [
      {
        icon: TbBrandSpotify,

        title: "Spotify",
        transDesc: "Song Purchase",
        purchaseDate: "6 Sept, 4:32 PM",
        trans: "-$30",
        iconColor: "#1a1a1a",
        iconBgColor: "#fffd00",
      },
      {
        icon: BsFillPlayFill,

        title: "Youtube Ad",
        transDesc: "Mothly Payment",
        purchaseDate: "5 Aug, 7:12 PM",
        trans: "+$2500",
        iconColor: "#1a1a1a",
        iconBgColor: "#fffd00",
      },
      {
        icon: FaTiktok,

        title: "Tik tok",
        transDesc: "Ads Payment Credit",
        purchaseDate: "2 Aug, 11:30 PM",
        trans: "+$900",
        iconColor: "#fff",
        iconBgColor: "#1a1a1a",
      },
    ],
  },
];

export const SelectContainerStyle = ({ children }) => {
  const style = useColorModeValue(
    {
      boxShadow: "0px 0px 1px 1px #8080801c",
    },
    {
      bg: "#222222",
    }
  );

  return (
    <Flex
      flexDir={"row"}
      alignItems="center"
      padding="8px 10px"
      borderRadius="6px"
      gap="10px"
      {...style}
    >
      {children}
    </Flex>
  );
};

export const _BLACK = "#0c0c0c";
export const _BLACKER = "#1a1a1a";
export const _LIGHT_BLACK = "#000000b0";
export const _LIGHTER_BLACK = "#cccbcb";
export const _YELLOW = "#fffd00";
export const _LOADER_COLOR = "#a0aec017";
