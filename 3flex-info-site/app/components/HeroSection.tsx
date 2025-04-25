'use client';

import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Button, 
  Flex, 
  HStack,
  Link,
  useColorMode,
  AspectRatio,
  Image
} from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { fadeInUp, fadeInDown, fadeIn, floatingAnimation, imageReveal } from '../utils/animations';

// Convert Chakra components to motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionFlex = motion(Flex);

const HeroSection = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  
  // Use Framer Motion scroll functionality
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('why-love-it');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box 
      as="section" 
      w="100%" 
      h="100vh" 
      position="relative" 
      overflow="hidden" 
      bgGradient={
        isDark 
          ? "linear(to-b, gray.900, gray.800)" 
          : "linear(to-b, blue.50, white)"
      }
    >
      {/* Parallax Background */}
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        style={{ y }}
        zIndex={0}
        _before={{
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: `url('/images/new-hero.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: isDark ? "brightness(0.5)" : "brightness(0.8)",
          zIndex: -1,
        }}
      />
      
      {/* Content */}
      <Container 
        maxW="container.xl" 
        h="100%" 
        position="relative" 
        zIndex={1}
        px={[4, 6, 8]}
      >
        <Flex 
          direction="column" 
          justify="center" 
          align="center" 
          h="100%" 
          textAlign="center"
        >
          <MotionBox
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            w={"900px"}
            p={[6, 8, 10]}  // Responsive padding
            borderRadius="xl"
            bg={isDark 
              ? "rgba(23, 25, 35, 0.7)" 
              : "rgba(255, 255, 255, 0.7)"
            }
            backdropFilter="blur(8px)"
            boxShadow="lg"
            display="flex"                // Add this
            flexDirection="column"        // Optional: stack children vertically
            alignItems="center"           // Add this
            justifyContent="center"       // Add this
          >
{/*             <MotionHeading 
              as="h1" 
              fontSize={["4xl", "5xl", "6xl", "7xl"]} 
              fontWeight="bold"
              bgGradient={isDark 
                ? "linear(to-r, yellow.300, brand.300)" 
                : "linear(to-r, yellow.400, brand.500)"
              }
              bgClip="text"
              mb={4}
              initial="hidden"
              animate="visible"
              variants={fadeInDown}
              transition={{ delay: 0.2 }}
            >
              3FLEX CIRCUIT
            </MotionHeading> */}
            <MotionBox
              // borderRadius="lg"
              overflow="hidden"
              // boxShadow="xl"
              initial="hidden" 
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={imageReveal}
            >
                <Image 
              src={isDark ? "images/3Flex Circuits Assets.Logo Text Full White.001.png" : "images/3Flex Circuits Assets.Logo Text Full.001.png"}
              alt="3FLEX CIRCUIT players in action"
                  // objectFit="cover"
                  maxW="350px"
                  maxH="350px"
                  mx="auto"
                  mb={8}
                />
            </MotionBox>
            
            <MotionText 
              fontSize={["xl", "2xl"]} 
              maxW="3xl" 
              mb={8}
              color={isDark ? "gray.100" : "gray.700"}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              The premier team-based pickleball league bringing competitive play to committed amateurs and aspiring pros.
            </MotionText>
            
            <MotionFlex 
              justify="center" 
              wrap="wrap" 
              gap={4}
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              transition={{ delay: 0.6 }}
            >
              <Link href="/portal" _hover={{ textDecoration: 'none' }}>
                <Button 
                  size="lg" 
                  colorScheme="yellow"
                  px={8}
                >
                  Player Portal
                </Button>
              </Link>
              
              <Button 
                size="lg" 
                variant="outline" 
                colorScheme={isDark ? "whiteAlpha" : "blackAlpha"}
                px={8}
                onClick={scrollToNextSection}
              >
                Learn More
              </Button>
            </MotionFlex>
          </MotionBox>
        </Flex>
        
        {/* Scroll Down Indicator */}
        <MotionBox 
          position="absolute" 
          bottom="5%" 
          left="50%" 
          transform="translateX(-50%)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <MotionFlex 
            direction="column" 
            align="center"
            animate={floatingAnimation}
            onClick={scrollToNextSection}
            cursor="pointer"
          >
            <Text 
              fontSize="sm" 
              mb={2}
              color={isDark ? "gray.300" : "gray.600"}
            >
              Scroll Down
            </Text>
            <ChevronDownIcon 
              boxSize={6} 
              color={isDark ? "gray.300" : "gray.600"} 
            />
          </MotionFlex>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default HeroSection; 