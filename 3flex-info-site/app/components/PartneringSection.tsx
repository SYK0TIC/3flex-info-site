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
  Image,
  useColorMode
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { headerVariant, springUpItem, staggerContainer, hoverScale } from '../utils/animations';

// Convert Chakra components to motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionContainer = motion(Container);
const MotionSimpleGrid = motion(SimpleGrid);

const benefitGroups = [
  {
    title: "Revenue & Utilization",
    benefits: [
      {
        title: "Reliable Revenue Stream",
        description: "Clubs receive court fees for hosting circuit matches, generating consistent income with minimal overhead."
      },
      {
        title: "Seasonal Court Utilization",
        description: "Circuit matches help clubs maintain strong court activity and revenue during slower participation seasons."
      }
    ]
  },
  {
    title: "Growth & Exposure",
    benefits: [
      {
        title: "New Player Exposure",
        description: "Circuit play draws high-level players from across the region, creating opportunities for new memberships and increased engagement."
      },
      {
        title: "Expanded Brand Visibility",
        description: "Partner clubs are featured in circuit promotions, social media, and our website—boosting recognition within the broader pickleball community."
      }
    ]
  },
  {
    title: "Operational Simplicity",
    benefits: [
      {
        title: "Minimal Operational Lift",
        description: "The circuit manages all scheduling, logistics, and administration—clubs only need to provide court space."
      },
      {
        title: "Shared Responsibility Model",
        description: "The rotating host format ensures hosting duties are balanced across clubs, allowing flexible participation without long-term strain."
      }
    ]
  },
  {
    title: "Community Building",
    benefits: [
      {
        title: "Enhanced Community Presence",
        description: "Hosting circuit matches builds goodwill, strengthens local ties, and positions your club as a competitive and social hub."
      },
      {
        title: "Premium Event Opportunities",
        description: "Clubs may be selected to host playoff or championship events, bringing additional traffic, attention, and prestige."
      }
    ]
  }
];

// Mock data for partners
const partners = [
  {
    name: "West Side Pickleball Club",
    description: "Premier indoor facility with 12 dedicated courts",
    logo: "/images/logo_placeholder_1.png",
    website: "#"
  },
  {
    name: "Eastlake Community Center",
    description: "State-of-the-art outdoor courts with tournament capability",
    logo: "/images/logo_placeholder_2.png",
    website: "#"
  },
  {
    name: "PicklePlay Center",
    description: "Family-friendly facility with coaching programs",
    logo: "/images/logo_placeholder_3.png",
    website: "#"
  }
];

const PartneringSection = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box
      as="section"
      id="partners"
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
        backgroundImage: `url('/images/_page_0_Picture_18.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: isDark ? 0.1 : 0.15,
        zIndex: -1,
      }}
    >
      <MotionContainer
        maxW="container.xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer(0.1, 0.2)}
      >
        <MotionBox textAlign="center" mb={16} variants={headerVariant}>
          <MotionHeading as="h2" fontSize="4xl" fontWeight="bold" mb={4} variants={headerVariant}>
            Our <Text as="span" color={isDark ? "brand.300" : "brand.500"}>Partners</Text>
          </MotionHeading>
          <MotionText 
            fontSize="xl" 
            maxW="3xl" 
            mx="auto" 
            color={isDark ? "gray.200" : "gray.700"}
            variants={headerVariant}
          >
            3FLEX CIRCUIT is proudly supported by these amazing organizations who share our passion for growing the sport of pickleball.
          </MotionText>
        </MotionBox>

        <MotionSimpleGrid 
          columns={[1, null, 2, 3]} 
          spacing={8}
          variants={staggerContainer()}
        >
          {partners.map((partner) => (
            <MotionBox
              key={partner.name}
              p={6}
              borderRadius="lg"
              boxShadow="md"
              bg={isDark ? "gray.700" : "white"}
              variants={springUpItem}
              whileHover={hoverScale}
            >
              <Flex direction="column" align="center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  height="80px"
                  objectFit="contain"
                  mb={4}
                />
                <Heading as="h3" fontSize="xl" fontWeight="bold" mb={2} color={isDark ? "white" : "gray.800"}>
                  {partner.name}
                </Heading>
                <Text textAlign="center" fontSize="sm" mb={4} color={isDark ? "gray.200" : "gray.600"}>
                  {partner.description}
                </Text>
                <Link href={partner.website} isExternal _hover={{ textDecoration: 'none' }}>
                  <Button size="sm" colorScheme={isDark ? "yellow" : "yellow"} variant="solid">
                    Visit Website
                  </Button>
                </Link>
              </Flex>
            </MotionBox>
          ))}
        </MotionSimpleGrid>

        <MotionBox 
          textAlign="center" 
          mt={16}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Heading as="h3" fontSize="2xl" mb={6} color={isDark ? "white" : "gray.800"}>
            Interested in partnering with us?
          </Heading>
          <Link href="mailto:partners@3flexcircuit.com" _hover={{ textDecoration: 'none' }}>
            <Button size="lg" colorScheme={isDark ? "yellow" : "yellow"} variant="solid">
              Contact Us
            </Button>
          </Link>
        </MotionBox>
      </MotionContainer>
    </Box>
  );
};

export default PartneringSection; 