'use client';

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Link,
  Stack,
  Divider,
  Icon,
  HStack,
  VStack
} from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box 
      as="footer" 
      py={12} 
      bg="brand.900" 
      color="white"
      backdropFilter="blur(10px)"
    >
      <Container maxW="container.xl">
        <Flex 
          direction={["column", "column", "row"]} 
          justify="space-between" 
          align={["center", "center", "flex-start"]} 
          mb={8}
        >
          <Box mb={[6, 6, 0]} textAlign={["center", "center", "left"]}>
            <Heading as="h2" fontSize="3xl" fontWeight="bold">
              <Text as="span" color="brand.300">3FLEX</Text>{' '}
              <Text as="span" color="yellow.400">CIRCUIT</Text>
            </Heading>
            <Text color="gray.300" mt={2}>
              Elevating Pickleball Competition
            </Text>
          </Box>
          
          <Stack 
            direction={["column", "column", "row"]} 
            align="center" 
            spacing={[4, 4, 8]}
          >
            <Link
              href="mailto:3Flex@hoppsquad.com"
              color="white"
              _hover={{ color: "brand.300" }}
              transition="colors 0.2s"
            >
              3Flex@hoppsquad.com
            </Link>
            <Link
              href="/handbook.pdf"
              target="_blank"
              color="white"
              _hover={{ color: "brand.300" }}
              transition="colors 0.2s"
            >
              Player Handbook
            </Link>
            <Link
              href="https://HOPPSquad.com"
              target="_blank"
              rel="noopener noreferrer"
              color="white"
              _hover={{ color: "brand.300" }}
              transition="colors 0.2s"
            >
              HOPPSquad.com
            </Link>
          </Stack>
        </Flex>
        
        <Divider borderColor="gray.700" />
        
        <Flex 
          direction={["column", "column", "row"]} 
          justify="space-between" 
          align="center"
          pt={6}
        >
          <Text 
            fontSize="sm" 
            color="gray.400" 
            mb={[4, 4, 0]}
          >
            &copy; {new Date().getFullYear()} 3FLEX CIRCUIT. All rights reserved.
          </Text>
          
          <HStack spacing={6}>
            {/* Social Media Icons - Replace with actual social links when available */}
            <Link href="#" color="gray.400" _hover={{ color: "white" }} transition="colors 0.2s">
              <Icon as={FaFacebook} boxSize={5} />
            </Link>
            <Link href="#" color="gray.400" _hover={{ color: "white" }} transition="colors 0.2s">
              <Icon as={FaInstagram} boxSize={5} />
            </Link>
            <Link href="#" color="gray.400" _hover={{ color: "white" }} transition="colors 0.2s">
              <Icon as={FaTwitter} boxSize={5} />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer; 