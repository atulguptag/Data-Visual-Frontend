import React, { useState, useEffect } from "react";
import axios from "axios";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { ChakraProvider, Flex, Box, Grid } from "@chakra-ui/react";
import Footer from "./Footer";
import LikelihoodRadarChart from "./Likelihood";
import Navbar from "./Navbar";
import RegionChart from "./RegionChart";
import AdminDashboard from "./Sidebar";
import RelevanceBubbleChart from "./Relevance";
import PieChart from "./SectorCharts";
import CountryChart from "./Country";
import TopicsPolarAreaChart from "./TopicCharts";
import IntensityChart from "./InternsityChart";

Chart.register(CategoryScale);

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      const API_URL = "https://atul-currency-converter.easify.xyz";
      try {
        const response = await axios.get(`${API_URL}/api/data`);
        console.log("response", response.data)
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, []);

  return (
    <ChakraProvider>
      <Navbar />
      <AdminDashboard />
      <IntensityChart data={data} />
      <Flex direction={{ base: "column", md: "row" }} m={50}>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="50%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <RegionChart data={data} />
        </Box>
        <Box
          flex={{ base: "1", md: "0.5" }}
          maxW="50%"
          p={5}
          m={2}
          boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
          borderRadius={20}
        >
          <TopicsPolarAreaChart data={data} />
        </Box>
      </Flex>
      <RelevanceBubbleChart data={data} />
      <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
        <Box>
          <PieChart data={data} />
        </Box>
        <Box>
          <LikelihoodRadarChart data={data} />
        </Box>
      </Grid>
      <CountryChart data={data} />
      <Footer/>
    </ChakraProvider>
  );
};

export default Main;