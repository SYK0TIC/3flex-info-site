'use client';

import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Flex,
  Image,
  Link,
  Icon,
  useColorMode
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { headerVariant, strongSpringUpItem, staggerContainer, fadeIn } from '../utils/animations';

// Convert Chakra components to motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionSimpleGrid = motion(SimpleGrid);
const MotionFlex = motion(Flex);

// Placeholder data (you would replace this with actual founders' information)
const founders = [
  {
    name: "Rosa H.",
    role: "Co-Founder & CMO",
    image: "/images/rosa_headshot.webp",
    bio: "Former professional athlete bringing years of tournament organization and player development expertise to the 3FLEX CIRCUIT."
  },
  {
    name: "Wesley O.",
    role: "Co-Founder & CEO (lol)",
    image: "/images/wesley_headshot.webp",
    bio: "Passionate pickleball player and community builder with extensive experience in sports league management and operations."
  },
  {
    name: "Mia P.",
    role: "Co-Founder & CTO",
    image: "/images/mia_headshot.webp",
    bio: "Technology expert focused on creating seamless digital experiences for players, captains, and club partners."
  },
  {
    name: "Blake P.",
    role: "Co-Founder & COO",
    image: "/images/blake_headshot.webp",
    bio: "Marketing strategist with a passion for growing pickleball at all levels and connecting communities through sport."
  }
];

const FoundersSection = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Box
      as="section"
      id="founders"
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
        backgroundImage: `url('/images/_page_0_Figure_22.jpeg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: isDark ? 0.1 : 0.15,
        zIndex: -1,
      }}
    >
      <Container maxW="container.xl">
        <MotionBox 
          textAlign="center" 
          mb={16}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer(0.1, 0.3)}
        >
          <MotionHeading as="h2" fontSize="4xl" fontWeight="bold" mb={4} variants={headerVariant}>
            Meet the <Text as="span" color={isDark ? "brand.300" : "brand.500"}>Squad</Text>
          </MotionHeading>
          <MotionText 
            fontSize="xl" 
            maxW="3xl" 
            mx="auto" 
            color={isDark ? "gray.200" : "gray.700"}
            variants={headerVariant}
          >
            Get to know the passionate individuals who brought 3FLEX CIRCUIT to life, combining their love for pickleball with years of experience in sports management.
          </MotionText>
        </MotionBox>

        <MotionSimpleGrid 
          columns={[1, null, 2, 4]} 
          spacing={8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer(0.1, 0.3)}
        >
          {founders.map((founder, index) => (
            <MotionBox
              key={index}
              p={6}
              borderRadius="lg"
              boxShadow="md"
              bg={isDark ? "gray.700" : "white"}
              variants={strongSpringUpItem}
              whileHover={{ 
                y: -5, 
                boxShadow: "xl",
                transition: { duration: 0.2 }
              }}
            >
              <Flex direction="column" align="center">
                <Box 
                  mb={4} 
                  borderRadius="full" 
                  overflow="hidden" 
                  boxSize="140px"
                  boxShadow={isDark ? "md" : "sm"}
                >
                  <Image 
                    src={founder.image} 
                    alt={founder.name}
                    objectFit="contain"
                    objectPosition="top"
                    w="100%"
                    h="100%"
                  />
                </Box>
                <Heading as="h3" fontSize="xl" fontWeight="bold" mb={1} color={isDark ? "white" : "gray.800"}>
                  {founder.name}
                </Heading>
                <Text fontWeight="medium" color={isDark ? "brand.300" : "brand.500"} mb={3}>
                  {founder.role}
                </Text>
                <Text fontSize="sm" textAlign="center" color={isDark ? "gray.300" : "gray.600"}>
                  {founder.bio}
                </Text>
              </Flex>
            </MotionBox>
          ))}
        </MotionSimpleGrid>

        <MotionBox 
          as={Flex} 
          justify="center" 
          mt={16}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Link 
            href="https://HOPPSquad.com" 
            target="_blank" 
            rel="noopener noreferrer"
            display="inline-flex"
            alignItems="center"
            fontSize="lg"
            fontWeight="semibold"
            color={isDark ? "brand.300" : "brand.600"}
            _hover={{ color: isDark ? "brand.200" : "brand.700", textDecoration: 'none' }}
          >
            Visit HOPPSquad.com
            <ExternalLinkIcon ml={2} />
          </Link>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default FoundersSection; 