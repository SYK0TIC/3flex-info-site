'use client';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyYouLoveIt from './components/WhyYouLoveIt';
import LeagueAtGlance from './components/LeagueAtGlance';
import CaptainSection from './components/CaptainSection';
import PartneringSection from './components/PartneringSection';
import FoundersSection from './components/FoundersSection';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box as="main">
      <DarkModeToggle />
      <Navbar />
      <HeroSection />
      <WhyYouLoveIt />
      <LeagueAtGlance />
      <CaptainSection />
      <PartneringSection />
      <FoundersSection />
      <Footer />
    </Box>
  );
} 