'use client';

import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Flex,
  Grid,
  GridItem,
  AspectRatio,
  Image,
  useColorMode,
  Link,
  Button
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { headerVariant, springUpItem, staggerContainer, imageReveal } from '../utils/animations';
import { ExternalLinkIcon } from '@chakra-ui/icons';

// Convert Chakra components to motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionGrid = motion(Grid);
const MotionGridItem = motion(GridItem);
const MotionImage = motion(Image);

// League features data
const leagueFeatures = [
  {
    title: "Team Format",
    description: "Each team has at least 6 players managed by a team captain.",
    image: "/images/3Flex Circuits Assets.003.png"
  },
  {
    title: "Match Structure",
    description: "Each week, captains select 3 doubles pairs to play that match.",
    image: "/images/3Flex Circuits Assets.005.png"
    // image: "/images/3Flex Circuits Assets.007.png"
  },
  {
    title: "Divisions",
    description: "Organized by gender, age, then skill level to ensure competitive play.",
    image: "/images/3Flex Circuits Assets.001.png"
  },
  {
    title: "Age Brackets",
    description: "Separate 18+ and 55+ divisions cater to players at all life stages.",
    image: "/images/3Flex Circuits Assets.002.png"
  },
  {
    title: "TO FIX: Season Length",
    description: "8-week regular season followed by single-elimination playoffs for the top 6 teams.",
    image: "/images/3Flex Circuits Assets.003.png"
  },
  {
    title: "TO FIX: Circuit Structure",
    description: "Teams compete weekly, rotating among participating club locations.",
    image: "/images/3Flex Circuits Assets.004.png"
  }
];

const LeagueAtGlance = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box
      as="section"
      id="league-glance"
      py={16}
      position="relative"
      bg={isDark ? "gray.800" : "white"}
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: "public/images/background-001.webp",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: isDark ? 0.1 : 0.15,
        zIndex: -1
      }}
    >
      <Container maxW="container.xl">
        <MotionBox 
          textAlign="center" 
          mb={16}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.1, 0.15)}
        >
          <MotionHeading as="h2" fontSize="4xl" fontWeight="bold" mb={4} variants={headerVariant}>
            The League at a <Text as="span" color={isDark ? "brand.300" : "brand.500"}>Glance</Text>
          </MotionHeading>
          <MotionText 
            fontSize="xl" 
            maxW="3xl" 
            mx="auto" 
            color={isDark ? "gray.200" : "gray.700"}
            variants={headerVariant}
          >
            3FLEX CIRCUIT provides a structured pickleball experience with options for all competitive players.
          </MotionText>
        </MotionBox>

        <Grid 
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }} 
          gap={12}
          alignItems="center"
          mb={16}
        >
          <GridItem>
            <MotionGrid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              gap={6}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer(0.1, 0.15)}
            >
              {leagueFeatures.map((feature, index) => (
                <MotionGridItem key={index} variants={springUpItem}>
                  <Box 
                    p={5} 
                    borderRadius="lg" 
                    boxShadow="md" 
                    bg={isDark ? "gray.700" : "white"}
                    height="100%"
                  >
                    <Heading as="h3" fontSize="lg" fontWeight="bold" mb={2} color={isDark ? "brand.300" : "brand.500"}>
                      {feature.title}
                    </Heading>
                    <Text fontSize="sm" color={isDark ? "gray.300" : "gray.600"}>
                      {feature.description}
                    </Text>
                    <Image 
                      src={feature.image} 
                      alt={feature.title} 
                      //boxSize="100px"
                      mt={2}
                      mb={2}
                      //objectFit="contain"
                    />
                  </Box>
                </MotionGridItem>
              ))}
            </MotionGrid>
          </GridItem>

          <GridItem>
            <MotionBox
              borderRadius="lg"
              overflow="hidden"
              boxShadow="xl"
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageReveal}
            >
              <AspectRatio ratio={4/3}>
                <Image 
                  src="/images/_page_1_Picture_14.jpeg" 
                  alt="3FLEX CIRCUIT players in action"
                  objectFit="cover"
                />
              </AspectRatio>
            </MotionBox>
          </GridItem>
        </Grid>
        <Link href="/handbook.pdf" target="_blank" _hover={{ textDecoration: 'none' }}>
                  <Button
                    //colorScheme={isDark ? "blue" : "blue"}
                    colorScheme="blue"
                    variant="solid"
                    rightIcon={<ExternalLinkIcon />}
                    size="lg"
                  >
                    Download Player Information
                  </Button>
                </Link>
      </Container>
    </Box>
  );
};

export default LeagueAtGlance; 