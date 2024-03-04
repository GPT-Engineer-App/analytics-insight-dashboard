import { Box, ChakraProvider, Flex, Grid, Heading, Text, theme, VStack } from "@chakra-ui/react";
import { FaChartBar, FaDollarSign, FaShoppingCart } from "react-icons/fa";
import { extendTheme } from "@chakra-ui/react";

// Extend the theme to include custom colors, fonts, etc
const customTheme = extendTheme({
  ...theme,
  components: {
    ...theme.components,
    // Custom component styles here if needed
  },
});

const DashboardCard = ({ title, value, icon }) => {
  return (
    <VStack p={5} boxShadow="md" borderRadius="lg" align="stretch" bg="white" height="150px" justifyContent="center">
      <Flex alignItems="center" justifyContent="space-between">
        <Box fontSize="3xl">{icon}</Box>
        <VStack align="flex-start">
          <Text fontSize="md" color="gray.500">
            {title}
          </Text>
          <Heading size="lg">{value}</Heading>
        </VStack>
      </Flex>
    </VStack>
  );
};

const Index = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Box bg="gray.100" minHeight="100vh" p={10}>
        <Heading mb={6}>Business Dashboard</Heading>
        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6} mb={10}>
          {/* Dashboard Cards */}
          <DashboardCard title="Total Sales" value="328" icon={<FaShoppingCart />} />
          <DashboardCard title="Revenue" value="$12,345" icon={<FaDollarSign />} />
          <DashboardCard title="Net Profit" value="$8,229" icon={<FaChartBar />} />
          {/* Add more cards as needed */}
        </Grid>

        {/* Here you would include your chart components with actual data */}
        <Box bg="white" p={5} borderRadius="lg" boxShadow="md">
          {/* Sample chart area */}
          <Text fontSize="xl" mb={4}>
            Sales Over Time (Sample Chart)
          </Text>
          <Box h="300px">
            {/* Replace with actual chart */}
            <Text color="gray.500">Chart would go here</Text>
          </Box>
        </Box>
        {/* Add more charts/sections as needed */}
      </Box>
    </ChakraProvider>
  );
};

export default Index;
