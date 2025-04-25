'use client';

import { useState } from 'react';
import {
  Box,
  Flex,
  Container,
  Heading,
  Text,
  Button,
  Stack,
  IconButton,
  Collapse,
  Link,
  useDisclosure,
  useColorMode,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

// Convert Chakra components to motion components
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  // State variables to store motion values
  const [paddingValue, setPaddingValue] = useState(6);
  const [bgOpacity, setBgOpacity] = useState(0.4);
  const [blurValue, setBlurValue] = useState(2);
  const [shadowValue, setShadowValue] = useState(0);
  const [scaleValue, setScaleValue] = useState(1);


  // Use Framer Motion scroll hooks
  const { scrollY } = useScroll();
  
  // Define motion values
  const navbarPadding = useTransform(scrollY, [0, 50], [6, 3]);
  const navbarBgOpacity = useTransform(scrollY, [0, 50], [0.4, 0.8]);
  const navbarBlur = useTransform(scrollY, [0, 50], [2, 10]);
  const navbarShadow = useTransform(scrollY, [0, 50], [0, 0.15]);
  const elementScale = useTransform(scrollY, [0, 50], [1, 0.95]);

  // Use motion value event listeners to update state
  useMotionValueEvent(navbarPadding, "change", (latest) => {
    setPaddingValue(latest);
  });

  useMotionValueEvent(navbarBgOpacity, "change", (latest) => {
    setBgOpacity(latest);
  });

  useMotionValueEvent(navbarBlur, "change", (latest) => {
    setBlurValue(latest);
  });

  useMotionValueEvent(navbarShadow, "change", (latest) => {
    setShadowValue(latest);
  });

  useMotionValueEvent(elementScale, "change", (latest) => {
    setScaleValue(latest);
  });

  const scrollToSection = (id: string) => {
    if (isOpen) onToggle();
    
    const element = document.getElementById(id);
    if (element) {
      // Add offset for fixed header
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <MotionBox 
      as="header" 
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={50}
      style={{
        paddingTop: paddingValue,
        paddingBottom: paddingValue,
        backdropFilter: `blur(${blurValue}px)`,
        boxShadow: `0 4px 6px -1px rgba(0, 0, 0, ${shadowValue})`,
        backgroundColor: isDark 
          ? `rgba(26, 32, 44, ${bgOpacity})` 
          : `rgba(255, 255, 255, ${bgOpacity})`
      }}
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          {/* Logo - Left Section */}
          <MotionBox 
            style={{ scale: scaleValue }}
            flex="1"
          >
            {/* <Heading as="h1" fontSize={["2xl", "2xl", "3xl"]} fontWeight="bold" whiteSpace="nowrap">
              <Text as="span" color={isDark ? "brand.300" : "brand.500"}>3FLEX</Text>{' '}
              <Text as="span" color={isDark ? "yellow.300" : "yellow.400"}>CIRCUIT</Text>
            </Heading> */}
            <Image
              src={isDark ? "images/3Flex Circuits Assets.Logo Text White.002.png" : "images/3Flex Circuits Assets.Logo Text.002.png"}
              alt="3FLEX CIRCUIT players in action"
              // objectFit="cover"
              maxW="100px"
              maxH="100px"
              mx="auto"
            />
          </MotionBox>
          
          {/* Desktop Navigation - Center Section */}
          <Flex 
            justify="center" 
            align="center" 
            flex="2"
            display={{ base: 'none', md: 'flex' }}
          >
            <Stack 
              direction="row" 
              spacing={{ base: 2, lg: 4 }}
              align="center"
              justify="center"
            >
              <MotionButton style={{ scale: scaleValue }} variant="ghost" onClick={() => scrollToSection('why-love-it')} px={2} fontSize={["xs", "sm"]} color={isDark ? "white" : "gray.900" }>Why You'll Love It</MotionButton>
              <MotionButton style={{ scale: scaleValue }} variant="ghost" onClick={() => scrollToSection('league-glance')} px={2} fontSize={["xs", "sm"]} color="gray.900">The League</MotionButton>
              <MotionButton style={{ scale: scaleValue }} variant="ghost" onClick={() => scrollToSection('captain')} px={2} fontSize={["xs", "sm"]} color="gray.900">Captain Role</MotionButton>
              <MotionButton style={{ scale: scaleValue }} variant="ghost" onClick={() => scrollToSection('partners')} px={2} fontSize={["xs", "sm"]} color="gray.900">Partner With Us</MotionButton>
              <MotionButton style={{ scale: scaleValue }} variant="ghost" onClick={() => scrollToSection('founders')} px={2} fontSize={["xs", "sm"]} color="gray.900">Founders</MotionButton>
            </Stack>
          </Flex>
          
          {/* CTA Buttons - Right Section */}
          <Flex 
            justify="flex-end" 
            align="center"
            flex="1"
            display={{ base: 'none', md: 'flex' }}
          >
            <Stack direction="row" spacing={3} align="center">
              <Link href="mailto:3Flex@hoppsquad.com" _hover={{ textDecoration: 'none' }}>
                <MotionButton 
                  style={{ scale: scaleValue }} 
                  colorScheme="blue"
                  size={{ base: 'xs', lg: 'sm' }}
                  px={3}
                >
                  Contact Us
                </MotionButton>
              </Link>
              <Link href="/portal" _hover={{ textDecoration: 'none' }}>
                <MotionButton 
                  style={{ scale: scaleValue }} 
                  colorScheme="yellow"
                  size={{ base: 'xs', lg: 'sm' }}
                  px={3}
                >
                  Player Portal
                </MotionButton>
              </Link>
            </Stack>
          </Flex>
          
          {/* Mobile Menu Button */}
          <MotionBox 
            style={{ scale: scaleValue }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              display="flex"
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant="ghost"
              aria-label="Toggle Navigation"
              color={isDark ? "white" : undefined}
            />
          </MotionBox>
        </Flex>

        {/* Mobile Menu */}
        <Collapse in={isOpen} animateOpacity>
          <Box
            display={{ base: 'block', md: 'none' }}
            py={4}
            bg={isDark ? 'rgba(26, 32, 44, 0.9)' : 'rgba(255, 255, 255, 0.9)'}
            backdropFilter="blur(10px)"
            boxShadow="md"
            borderRadius="md"
            mt={2}
          >
            <Stack spacing={4} px={4}>
              <Button variant="ghost" justifyContent="flex-start" onClick={() => {
                onToggle();
                setTimeout(() => scrollToSection('why-love-it'), 100);
              }}>Why You'll Love It</Button>
              <Button variant="ghost" justifyContent="flex-start" onClick={() => {
                onToggle();
                setTimeout(() => scrollToSection('league-glance'), 100);
              }}>The League</Button>
              <Button variant="ghost" justifyContent="flex-start" onClick={() => {
                onToggle();
                setTimeout(() => scrollToSection('captain'), 100);
              }}>Captain Role</Button>
              <Button variant="ghost" justifyContent="flex-start" onClick={() => {
                onToggle();
                setTimeout(() => scrollToSection('partners'), 100);
              }}>Partner With Us</Button>
              <Button variant="ghost" justifyContent="flex-start" onClick={() => {
                onToggle();
                setTimeout(() => scrollToSection('founders'), 100);
              }}>Founders</Button>
              <Box>
                <Link href="mailto:3Flex@hoppsquad.com" _hover={{ textDecoration: 'none' }}>
                  <Button colorScheme="blue" size="md" mb={2}>
                    Contact Us
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link href="/portal" _hover={{ textDecoration: 'none' }}>
                  <Button colorScheme="yellow" size="md">
                    Player Portal
                  </Button>
                </Link>
              </Box>
            </Stack>
          </Box>
        </Collapse>
      </Container>
    </MotionBox>
  );
};

export default Navbar; 