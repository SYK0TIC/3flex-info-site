'use client';

import React from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Flex,
  Icon,
  useColorMode
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { 
  MdAccessTimeFilled, 
  MdEmojiEvents, 
  MdSportsScore, 
  MdGroups, 
  MdStar, 
  MdSportsBasketball, 
  MdAttachMoney, 
  MdCalendarMonth 
} from 'react-icons/md';
import { headerVariant, springUpItem, staggerContainer, hoverScale } from '../utils/animations';

// Convert Chakra components to motion components
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionSimpleGrid = motion(SimpleGrid);

// Updated benefit type with icon
interface Benefit {
  title: string;
  description: string;
  icon: React.ComponentType;
}

// Content from marketing documents with icons
const benefits: Benefit[] = [
  {
    title: "Bring Your Own Team",
    description: "Compete alongside your chosen teammates all season—no random pairings, just strategic, cohesive play.", // comparing, REWORD to assuage worries of people who don't like team formats, and to promise help for both captains and members of teams
    icon: MdGroups // CHANGE TO 
  },
  {
    title: "Play on Your Schedule",
    description: "Flexible participation lets you play regularly or just step in whenever your team needs you most.", // promising, REWORD slightly to focus on our slick availability/scheduling system?
    icon: MdAccessTimeFilled // CHANGE TO ROBO ARM EMOJI? 
  },
  {
    title: "Affordable, Pay-As-You-Play",
    description: "Forget upfront costs—pay only for matches you actually play, keeping competition budget-friendly.", // promising, pairs well with #2
    icon: MdAttachMoney
  },
  {
    title: "Fresh Competition Weekly",
    description: "Match up against diverse teams from across your area at local clubs, ensuring unique challenges.", // promising, comparing (to other leagues)
    icon: MdSportsBasketball // MUST CHANGE TO SOMETHING ELSE, NOT BASKETBALL
  },
  {
    title: "High-Level Matches", // High-QUALITY Matches?
    description: "Tailored specifically for committed amateurs and aspiring semi-pros craving consistently competitive play.", // promising, maybe focus on how it's based on proven models?
    icon: MdStar // CHANGE TO 5 STARS? TO SWEAT DROPLET? TO SMILING FACE? 
  },
  {
    title: "Better Than Ladder Leagues",
    description: "Say goodbye to random partners and inconsistent matches; enjoy structured team play.", // comparing, maybe refocus on something that overlaps less with #4, #5 to sharpen the promise? 
    icon: MdSportsScore // CHANGE
  },
  {
    title: "Reliable, Organized Events",
    description: "Enjoy weekly, professionally managed match-ups designed for seamless participation.", // promising, maybe SWITCH to focus on getting to play at all sorts of different clubs??
    icon: MdCalendarMonth // CHANGE TO CALENDAR WITH DATE CIRCLED
  },
  {
    title: "Climb the Rankings",
    description: "Battle it out for seasonal rankings, exclusive tournament awards, and ultimate bragging rights.",  // promising, REWORD to sound less corny (TITLE ITSELF IS MID)
    icon: MdEmojiEvents // CHANGE TO TROPHY? TO WINNER'S STAND? TO 1st PLACE MEDAL?
  },
];

const WhyYouLoveIt = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  
  return (
    <Box
      as="section"
      id="why-love-it"
      py={20}
      px={4}
      position="relative"
      overflow="hidden"
      bgGradient={
        isDark 
          ? "linear(to-br, gray.900, gray.800)" 
          : "linear(to-br, blue.50, gray.50)"
      }
    >
      <Container maxW="container.xl">
        <MotionBox
          textAlign="center"
          mb={16}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer(0.3, 0.1)}
        >
          <MotionHeading 
            as="h2" 
            fontSize="4xl" 
            fontWeight="bold" 
            mb={4}
            variants={headerVariant}
          >
            Why You'll <Text as="span" color={isDark ? "brand.300" : "brand.500"}>Love It</Text>
          </MotionHeading>
          <MotionText 
            fontSize="xl" 
            maxW="3xl" 
            mx="auto"
            color={isDark ? "gray.300" : "gray.600"}
            variants={headerVariant}
          >
            3FLEX CIRCUIT provides a structured team-based pickleball experience that brings out the best in competitive play.
          </MotionText>
        </MotionBox>

        <MotionSimpleGrid 
          columns={[1, 2, 3, 4]} 
          spacing={8}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer(0.3, 0.1)}
        >
          {benefits.map((benefit, index) => (
            <MotionBox
              key={index}
              bg={isDark ? "gray.700" : "white"}
              p={6}
              borderRadius="lg"
              boxShadow="md"
              variants={springUpItem}
              whileHover={hoverScale}
            >
              <MotionFlex
                h="50px"
                w="50px"
                borderRadius="full"
                bg={isDark ? "brand.300" : "brand.500"}
                color="white"
                justify="center"
                align="center"
                mb={4}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
                viewport={{ once: true }}
              >
                <Icon as={benefit.icon} boxSize={6} />
              </MotionFlex>
              <Heading as="h3" fontSize="xl" fontWeight="bold" mb={2} color={isDark ? "white" : "gray.800"}>
                {benefit.title}
              </Heading>
              <Text color={isDark ? "gray.300" : "gray.600"}>
                {benefit.description}
              </Text>
            </MotionBox>
          ))}
        </MotionSimpleGrid>
      </Container>
    </Box>
  );
};

export default WhyYouLoveIt; 