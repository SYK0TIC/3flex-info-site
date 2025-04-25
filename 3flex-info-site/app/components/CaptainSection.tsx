'use client';

import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Flex,
  Button,
  Link,
  UnorderedList,
  ListItem,
  useColorMode
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { headerVariant, strongSpringUpItem, staggerContainer } from '../utils/animations';

// Convert Chakra components to motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionSimpleGrid = motion(SimpleGrid);
const MotionFlex = motion(Flex);

// Captain responsibilities data
const captainResponsibilities = [
  {
    title: "Team Management",
    items: [
      "Maintain 6-10 players on your roster throughout the season",
      "Create weekly lineups of 3 doubles pairs (6 players)",
      "Ensure players meet the 2-match minimum for playoff eligibility",
      "Handle roster additions and drops within deadline requirements",
      "Maintain minimum 6 active players to avoid forfeits"
    ]
  },
  {
    title: "Communication & Reporting",
    items: [
      "Submit match scores through the online platform within 24 hours",
      "Verify opponent-submitted scores for accuracy",
      "Notify players about lineups and scheduling automatically through the platform",
      "Manage player absences and substitutions promptly",
      "Inform opponents of any defaulted matches immediately"
    ]
  },
  {
    title: "Rule Enforcement & Leadership",
    items: [
      "Ensure matches follow USA Pickleball rules and Circuit handbook",
      "Act as first point of contact for resolving match-related issues",
      "Provide quality Franklin X40 balls (6 per match) when home team",
      "Foster a team culture of fairness, positivity, and inclusion",
      "Set the tone for sportsmanship throughout the season"
    ]
  }
];

const CaptainSection = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box
      as="section"
      id="captain"
      py={16}
      px={4}
      position="relative"
      bg={isDark ? "gray.800" : "white"}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url('/images/_page_1_Picture_20.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: isDark ? 0.1 : 0.15,
        zIndex: -1,
        mixBlendMode: isDark ? "lighten" : "normal"
      }}
    >
      <Container maxW="container.xl">
        <MotionBox 
          textAlign="center" 
          mb={16}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer()}
        >
          <MotionHeading as="h2" fontSize="4xl" fontWeight="bold" mb={4} variants={headerVariant}>
            What It Means to Be a <Text as="span" color={isDark ? "brand.300" : "brand.500"}>Captain</Text>
          </MotionHeading>
          <MotionText 
            fontSize="xl" 
            maxW="3xl" 
            mx="auto" 
            color={isDark ? "gray.100" : "gray.700"}
            variants={headerVariant}
          >
            As a 3FLEX captain, you'll lead your team through an exciting season of competitive pickleball, managing various responsibilities to ensure smooth operation and maximum enjoyment.
          </MotionText>
        </MotionBox>

        <MotionSimpleGrid 
          columns={[1, null, 2, 3]} 
          spacing={8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer()}
        >
          {captainResponsibilities.map((responsibility, index) => (
            <MotionBox
              key={index}
              p={6}
              borderRadius="lg"
              boxShadow="md"
              bg={isDark ? "gray.700" : "white"}
              variants={strongSpringUpItem}
            >
              <Heading as="h3" fontSize="xl" fontWeight="bold" mb={4} color={isDark ? "brand.300" : "brand.600"}>
                {responsibility.title}
              </Heading>
              <UnorderedList spacing={3} stylePosition="inside">
                {responsibility.items.map((item, itemIndex) => (
                  <ListItem key={itemIndex} fontSize="sm" color={isDark ? "gray.100" : "gray.700"}>
                    {item}
                  </ListItem>
                ))}
              </UnorderedList>
            </MotionBox>
          ))}
        </MotionSimpleGrid>

        <MotionBox 
          as={Flex} 
          justify="center" 
          mt={12}
          gap={4}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link href="/handbook.pdf" target="_blank" _hover={{ textDecoration: 'none' }}>
            <Button
              // colorScheme={isDark ? "yellow" : "yellow"}
              colorScheme="yellow"
              variant="solid"
              rightIcon={<ExternalLinkIcon />}
              size="lg"
            >
              View Player Handbook
            </Button>
          </Link>
          <Link href="/handbook.pdf" target="_blank" _hover={{ textDecoration: 'none' }}>
            <Button
              //colorScheme={isDark ? "blue" : "blue"}
              colorScheme="blue"
              variant="solid"
              rightIcon={<ExternalLinkIcon />}
              size="lg"
            >
              Download Captain Information
            </Button>
          </Link>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default CaptainSection; 