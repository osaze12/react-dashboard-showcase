import {
  Box,
  calc,
  Flex,
  Skeleton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { LuCalendarDays } from "react-icons/lu";
import { ImArrowUpRight2 } from "react-icons/im";
import { FaAngleDown } from "react-icons/fa";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  DashboardHead,
  SelectContainerStyle,
  _BLACKER,
  _LIGHTER_BLACK,
  _LIGHT_BLACK,
  _LOADER_COLOR,
  _YELLOW,
} from "./Dashboard";
import { CustomBtn } from "../components/right-section";
import { useEffect, useState } from "react";

function SocialStat() {
  return (
    <Flex w="100%" h="100%" flexDir={"column"} p="15px">
      <DashboardHead mt="-5px" mx="0" />
      <br />
      <br />
      <br />

      <Flex w="100%" h="100%" flexDir={"column"} alignItems="center" gap="30px">
        <SocialOverviewChart />

        <Flex gap="20px" w="100%" h="100%" justifyContent={"space-between"}>
          <WeeklyEarningChart />
          <AdsExpenseChart />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SocialStat;

export const SocialOverviewChart = () => {
  const [loading, setLoading] = useState(true);
  const text1 = useColorModeValue(_BLACKER, "#e5e5e5");
  const text2 = useColorModeValue(_LIGHT_BLACK, "#7e7e7e");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1100);
  }, []);

  return (
    <Flex
      flexDir={"column"}
      w="100%"
      h="100%"
      boxShadow={"0px 20px 14px #8080800f"}
      borderRadius="10px"
    >
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        mb="30px"
        px="30px"
      >
        <Skeleton
          startColor={_LOADER_COLOR}
          endColor={_LOADER_COLOR}
          isLoaded={!loading}
        >
          <Flex flexDir={"column"} gap="2px">
            <Text
              fontSize={"1.6em"}
              color={text1}
              fontFamily="Nunito"
              fontWeight={"900"}
            >
              Social Overview
            </Text>
            <Flex flexDir={"row"} alignItems="center" gap="5px">
              <Text color={_LIGHTER_BLACK}>Youtube</Text>
              <FaAngleDown color={text1} />
            </Flex>
          </Flex>
        </Skeleton>

        <Skeleton
          startColor={_LOADER_COLOR}
          endColor={_LOADER_COLOR}
          isLoaded={!loading}
        >
          <Flex alignItems={"center"} gap="20px">
            <SelectContainerStyle>
              <Text fontFamily={"PT Sans"} fontSize="1.1em" color={text2}>
                Last 6 month
              </Text>
              <LuCalendarDays fontSize={"1.3em"} />
            </SelectContainerStyle>
            <ImArrowUpRight2 color={_BLACKER} fontSize={"2em"} />
          </Flex>
        </Skeleton>
      </Flex>

      <Skeleton
        width="100%"
        height="100%"
        startColor={_LOADER_COLOR}
        endColor={_LOADER_COLOR}
        isLoaded={!loading}
      >
        {/* <ResponsiveContainer width="100%" height="100%"> */}
        <LineChart
          width={650}
          height={150}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis
            tick={{ fill: _LIGHTER_BLACK }}
            dataKey="name"
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: _LIGHTER_BLACK }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            wrapperStyle={{ outline: "none" }}
            content={(props) => <CustomToolbarContent {...props} />}
            cursor={{
              fill: "rgba(206, 206, 206, 0.2)",
              radius: [10, 10, 10, 10],
            }}
          />
          <Line
            dot={false}
            type="monotone"
            dataKey="pv"
            stroke={_YELLOW}
            activeDot={{ r: 8 }}
            strokeWidth="2"
          />
          <Line
            dot={false}
            strokeWidth="2"
            type="monotone"
            dataKey="uv"
            stroke={_BLACKER}
          />
        </LineChart>
        {/* </ResponsiveContainer> */}
      </Skeleton>
    </Flex>
  );
};

export const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 800,
    pv: 108,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 7000,
    pv: 1800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 980,
    pv: 9908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 5890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 290,
    pv: 3800,
    amt: 2500,
  },
  // {
  //   name: "Page G",
  //   uv: 3490,
  //   pv: 4300,
  //   amt: 2100,
  // },
];

export const WeeklyEarningChart = () => {
  const [loading, setLoading] = useState(true);
  const text1 = useColorModeValue(_BLACKER, "#e5e5e5");
  const text2 = useColorModeValue(_LIGHTER_BLACK, "#e5e5e5");
  const text3 = useColorModeValue(_BLACKER, "#e5e5e5");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1200);
  }, []);
  return (
    <Flex
      w="400px"
      h="330px"
      flexDir={"column"}
      boxShadow={"0px 4px 14px #80808021"}
      borderRadius="10px"
      p="30px"
    >
      <Flex justifyContent={"space-between"} alignItems="center">
        <Flex flexDir={"column"} gap="2px">
          <Text
            fontSize={"1.6em"}
            color={text1}
            fontFamily="Nunito"
            fontWeight={"900"}
          >
            Weekly Earning
          </Text>
          <Flex flexDir={"row"} alignItems="center" gap="5px">
            <Text color={_LIGHTER_BLACK}>Last 7 Days</Text>
            <FaAngleDown color={text2} />
          </Flex>
        </Flex>

        <ImArrowUpRight2 color={text3} fontSize={"2em"} />
      </Flex>

      <Flex
        alignItems={"center"}
        justifyContent="space-between"
        mt="20px"
        mb="20px"
      >
        <Skeleton
          startColor={_LOADER_COLOR}
          endColor={_LOADER_COLOR}
          isLoaded={!loading}
        >
          <Text fontFamily={"Nunito"} fontWeight={"800"} fontSize={"2.5em"}>
            $894.39
          </Text>
        </Skeleton>

        <CustomBtn bg={_BLACKER} p="8px 15px">
          <Text color="#fff" fontSize={"1.1em"}>
            Withdraw
          </Text>
        </CustomBtn>
      </Flex>

      {/* <ResponsiveContainer width="100%" height="100%"> */}

      <Skeleton
        w="100%"
        h="100%"
        startColor={_LOADER_COLOR}
        endColor={_LOADER_COLOR}
        isLoaded={!loading}
      >
        <Flex
          // border="1px solid"
          justifyContent={"flex-start"}
          alignItems="flex-start"
        >
          <LineChart
            width={250}
            height={150}
            style={{
              display: "flex",
              alignItems: "flex-start",
            }}
            data={_WEEKLY_CHART_DATA}
            margin={{
              top: 5,
              right: 30,
              left: -55,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              // verticalFill={""}
              opacity={0.2}
            />
            <XAxis
              tick={{ fill: _LIGHTER_BLACK }}
              dataKey="name"
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: _LIGHTER_BLACK, display: "none" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              content={(props) => <CustomToolbarContent {...props} />}
              cursor={{
                fill: "rgba(206, 206, 206, 0.2)",
              }}
            />
            <Line
              dot={false}
              type="linear"
              style={{
                filter: `drop-shadow(20px 10px 8px #6e6d7a)`,
              }}
              dataKey="pv"
              stroke={_YELLOW}
              activeDot={{ r: 8 }}
              strokeWidth="3"
            />
          </LineChart>
        </Flex>
      </Skeleton>

      {/* </ResponsiveContainer> */}
    </Flex>
  );
};

export const _WEEKLY_CHART_DATA = [
  {
    name: "S",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "M",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "T",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "W",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "T",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "F",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "S",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  // {
  //   name: "Page G",
  //   uv: 3490,
  //   pv: 4300,
  //   amt: 2100,
  // },
];

export const AdsExpenseChart = () => {
  const [loading, setLoading] = useState(true);
  const text1 = useColorModeValue(_BLACKER, "#e5e5e5");
  const text2 = useColorModeValue(_LIGHTER_BLACK, "#e5e5e5");
  const text3 = useColorModeValue(_BLACKER, "#e5e5e5");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1300);
  }, []);

  return (
    <Flex
      w="50%"
      h="330px"
      flexDir={"column"}
      boxShadow={"0px 4px 14px #80808021"}
      borderRadius="10px"
      p="30px"
    >
      <Flex justifyContent={"space-between"} alignItems="center">
        <Flex flexDir={"column"} gap="2px">
          <Text
            fontSize={"1.6em"}
            color={text1}
            fontFamily="Nunito"
            fontWeight={"900"}
          >
            Ads Expense
          </Text>
          <Flex flexDir={"row"} alignItems="center" gap="5px">
            <Text color={_LIGHTER_BLACK}>Last 7 Days</Text>
            <FaAngleDown color={text2} />
          </Flex>
        </Flex>

        <ImArrowUpRight2 color={text3} fontSize={"2em"} />
      </Flex>

      <Flex
        alignItems={"center"}
        justifyContent="space-between"
        mt="20px"
        mb="20px"
      >
        <Skeleton
          startColor={_LOADER_COLOR}
          endColor={_LOADER_COLOR}
          isLoaded={!loading}
        >
          <Text fontFamily={"Nunito"} fontWeight={"800"} fontSize={"2.5em"}>
            $12.85
          </Text>
        </Skeleton>

        <CustomBtn p="8px 15px" bg={_YELLOW}>
          <Text color={_BLACKER} fontSize={"1.1em"}>
            Add Money
          </Text>
        </CustomBtn>
      </Flex>

      <Skeleton
        startColor={_LOADER_COLOR}
        endColor={_LOADER_COLOR}
        isLoaded={!loading}
        w="100%"
        h="100%"
      >
        <Flex justifyContent={"flex-start"} alignItems="flex-start">
          <BarChart
            width={250}
            height={150}
            style={{
              display: "flex",
              alignItems: "flex-start",
            }}
            data={_WEEKLY_CHART_DATA}
            margin={{
              top: 5,
              right: 30,
              left: -55,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              // verticalFill={""}
              opacity={0.2}
            />
            <XAxis
              tick={{ fill: _LIGHTER_BLACK }}
              dataKey="name"
              axisLine={false}
              tickLine={false}
            />
            <YAxis axisLine={false} tickLine={false} />
            <Tooltip
              wrapperStyle={{ outline: "none" }}
              content={(props) => <CustomToolbarContent {...props} />}
              cursor={{
                fill: "rgba(206, 206, 206, 0.2)",
                radius: [10, 10, 10, 10],
              }}
            />
            <Bar fill={"red"} dataKey="pv" style={{ borderRadius: "10px" }}>
              {_WEEKLY_CHART_DATA.map((entry, index) => (
                <Cell
                  radius={[10, 10, 10, 10]}
                  key={`cell-${index}`}
                  fill={barColors[Math.floor(Math.random() * barColors.length)]}
                />
              ))}
            </Bar>
          </BarChart>
        </Flex>
      </Skeleton>
    </Flex>
  );
};

export const barColors = [_YELLOW, _BLACKER];

export const CustomToolbarContent = ({ payload }) => {
  console.log(payload);
  return (
    <Box
      bg="#fff"
      borderRadius={"5px"}
      p="6px 20px"
      boxShadow={"5px 4px 10px 1px #8080801c"}
      textAlign="center"
    >
      <Text fontSize={"1.2em"} color={_BLACKER} fontWeight={"700"}>
        {payload?.[0]?.value?.toLocaleString()}
      </Text>
      <Text fontSize={".8em"} color={_LIGHT_BLACK}>
        {(parseInt(payload?.[0]?.value) / 10000) * 100}%
      </Text>
    </Box>
  );
};
