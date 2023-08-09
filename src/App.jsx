import { Flex, Stack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DarkModeImageLayer from "./components/DarkModeImageLayer";
import LeftSection, { Logo } from "./components/left-section";
import RightSection from "./components/right-section";
import Dashboard from "./pages/Dashboard";
import SocialStat from "./pages/SocialStat";

function App() {
  const [loading, setLoading] = useState(true);
  const style1 = useColorModeValue({ border: "2px solid #f4f4f4" }, {});
  const { colorMode } = useColorMode();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return loading ? (
    <Flex
      pos={"fixed"}
      top="0"
      left={"0"}
      bg={colorMode === "light" ? "#fff" : "#292929"}
      w="100%"
      h="100%"
      justifyContent={"center"}
      alignItems="center"
    >
      <Logo lg />
    </Flex>
  ) : (
    <BrowserRouter>
      <Flex w={"100%"} m={0} p={0} justifyContent="space-between">
        <Flex width="20%" h="100vh">
          <LeftSection />
        </Flex>

        <Stack width={"55%"} {...style1}>
          <DarkModeImageLayer>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/social-stats" element={<SocialStat />} />
              <Route path="/*" element={<Dashboard />} />
            </Routes>
          </DarkModeImageLayer>
        </Stack>
        <Flex w="25%" h="100vh">
          <RightSection />
        </Flex>
      </Flex>
    </BrowserRouter>
  );
}

export default App;
