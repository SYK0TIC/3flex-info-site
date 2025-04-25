'use client';

import { useState } from 'react';
import { IconButton, useColorMode, Box, useBreakpointValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

// Convert Chakra components to motion components
const MotionBox = motion(Box);
const MotionIconButton = motion(IconButton);

const DarkModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDarkMode = colorMode === 'dark';
  
  // State variables to store motion values
  const [topValue, setTopValue] = useState(6);
  const [scaleValue, setScaleValue] = useState(1);
  
  // Use Framer Motion scroll hooks
  const { scrollY } = useScroll();
  
  // Define motion values
  const toggleTop = useTransform(scrollY, [0, 50], [6, 3]); 
  const toggleScale = useTransform(scrollY, [0, 50], [1, 0.95]); 
  
  // Use motion value event listeners to update state
  useMotionValueEvent(toggleTop, "change", (latest) => {
    setTopValue(latest);
  });
  
  useMotionValueEvent(toggleScale, "change", (latest) => {
    setScaleValue(latest);
  });
  
  // Adjust position based on screen size
  const rightPosition = useBreakpointValue({ 
    base: "16", // On mobile, position away from hamburger
    md: "4"     // On desktop, position in the corner
  });

  return (
    <MotionBox
      position="fixed"
      right={rightPosition}
      zIndex="1000"
      style={{
        top: topValue,
        scale: scaleValue,
      }}
      // Ensures it stays perfectly centered during transitions
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <MotionIconButton
        size="md"
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        icon={isDarkMode ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
        variant="ghost"
        colorScheme={isDarkMode ? "yellow" : "blue"}
        color={isDarkMode ? "yellow.200" : "blue.700"}
        bg={isDarkMode ? "whiteAlpha.200" : "whiteAlpha.700"}
        _hover={{
          bg: isDarkMode ? "whiteAlpha.300" : "whiteAlpha.800"
        }}
        transition={{ duration: 0.2 }}
      />
    </MotionBox>
  );
};

export default DarkModeToggle; 