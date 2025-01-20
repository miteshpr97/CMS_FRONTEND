import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import Picture from '../assets/image/Picture.jpg';
import { Box, Flex, Grid, GridItem, Text, Button, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { FaFileInvoiceDollar, FaChartLine } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [1200, 1900, 3000, 5000, 2000, 3200],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
  let VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const chartOptions = {
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const recentTransactions = [
    { id: 1, date: '2024-08-26', patient: 'Ayan', amount: '$900' },
    { id: 2, date: '2024-08-23', patient: 'Inzamam', amount: '$1000' },
    { id: 3, date: '2024-08-22', patient: 'Junaid', amount: '$2000' },
    { id: 4, date: '2024-08-22', patient: 'ayush', amount: '$3000' },
    { id: 5, date: '2024-08-22', patient: 'Sahil', amount: '$5000' },
    { id: 6, date: '2024-08-29', patient: 'triptendu', amount: '$1000' },
    { id: 7, date: '2024-08-29', patient: 'umar', amount: '$1900' },
    { id: 8, date: '2024-08-29', patient: 'Ebadur', amount: '$1500' },
    { id: 9, date: '2024-08-29', patient: 'Anand', amount: '$700' },
    { id: 10, date: '2024-08-29', patient: 'james', amount: '$1200' },
    { id: 11, date: '2024-08-29', patient: 'Oliver', amount: '$1000' },
    { id: 12, date: '2024-08-29', patient: 'Liam', amount: '$500' },
    { id: 13, date: '2024-08-29', patient: 'Henry', amount: '$600' },
    { id: 14, date: '2024-08-29', patient: 'Jack', amount: '$300' },
    { id: 15, date: '2024-08-29', patient: 'Levi', amount: '$900' },
    { id: 16, date: '2024-08-29', patient: 'Lucas', amount: '$12000' },
    { id: 17, date: '2024-08-29', patient: 'Shivangi', amount: '$1300' },
    { id: 18, date: '2024-08-29', patient: 'Shreya', amount: '$500' },
    { id: 19, date: '2024-08-29', patient: 'Akansha', amount: '$700' },
    { id: 20, date: '2024-08-29', patient: 'Itachi', amount: '$800' },
  ];

  return (
    <div
      className="dashboard-container"
      style={{
        backgroundImage: `url(${Picture})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
      }}
    >
      <div className="sidebar" style={{ height: '100%' }}>
        <Sidebar />
      </div>
      <div className="main-content" style={{ height: '100%' }}>
        <div className="header" style={{ height: 'auto' }}>
          <Header />
        </div>
        <div className="content" style={{ padding: '1rem', height: 'calc(100% - auto)' }}>
          <Text fontSize="2xl" mb={4} fontWeight="bold">Welcome to the Dashboard!</Text>

          <Grid templateColumns="repeat(3, 1fr)" gap={6} mb={6}>
            {[
              { label: 'Total Patients', value: '20', bgColor: 'blue.50', hoverColor: 'blue.100' },
              { label: 'Appointments', value: '20', bgColor: 'green.50', hoverColor: 'green.100' },
              { label: 'Revenue', value: '$26000', bgColor: 'yellow.50', hoverColor: 'yellow.100' },
            ].map((item, index) => (
              <GridItem
                key={index}
                as={motion.div}
                bg={item.bgColor}
                p={4}
                borderRadius="md"
                boxShadow="md"
                whileHover={{ scale: 1.05, backgroundColor: item.hoverColor }}
                transition={{ duration: 0.3 }}
              >
                <Text fontSize="xl" mb={2}>{item.label}</Text>
                <Text fontSize="3xl" fontWeight="bold">{item.value}</Text>
              </GridItem>
            ))}
          </Grid>

          <Flex justify="space-between" align="center" mb={6}>
            <Button leftIcon={<FaFileInvoiceDollar />} colorScheme="teal" size="lg">
              Generate Report
            </Button>
            <Button leftIcon={<FaChartLine />} colorScheme="purple" size="lg">
              View Statistics
            </Button>
          </Flex>

          <Grid templateColumns="repeat(2, 1fr)" gap={6}>
            <Box bg="white" p={6} borderRadius="md" boxShadow="lg" height="auto" maxHeight="400px" overflowY="scroll">
              <Text fontSize="xl" mb={4} color="teal.600" fontWeight="bold">Recent Transactions</Text>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th bg="blue.300" color="white">ID</Th>
                    <Th bg="green.300" color="white">Date</Th>
                    <Th bg="purple.300" color="white">Patient</Th>
                    <Th bg="red.300" color="white" isNumeric>Amount</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {recentTransactions.map(transaction => (
                    <Tr key={transaction.id}>
                      <Td>{transaction.id}</Td>
                      <Td>{transaction.date}</Td>
                      <Td>{transaction.patient}</Td>
                      <Td isNumeric>{transaction.amount}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>

            <Box bg="white" p={6} borderRadius="md" boxShadow="lg" height="auto">
              <Text fontSize="xl" mb={4} color="purple.600" fontWeight="bold">Revenue Over Time</Text>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  style={{ height: '300px' }}
                >
                  <Bar data={chartData} options={chartOptions} />
                </motion.div>
              </AnimatePresence>
            </Box>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
