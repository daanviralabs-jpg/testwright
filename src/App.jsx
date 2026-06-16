import { useEffect } from 'react';
import { useReveal } from './hooks/useReveal.js';
import { colors } from './config/product.js';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProviderBar from './components/ProviderBar.jsx';
import Features from './components/Features.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import BuilderSpotlight from './components/BuilderSpotlight.jsx';
import LocatorSpotlight from './components/LocatorSpotlight.jsx';
import ApiSettingsSpotlight from './components/ApiSettingsSpotlight.jsx';
import TesterSpotlight from './components/TesterSpotlight.jsx';
import ScanSpotlight from './components/ScanSpotlight.jsx';
import Stats from './components/Stats.jsx';
import Pricing from './components/Pricing.jsx';
import Faq from './components/Faq.jsx';
import CtaBand from './components/CtaBand.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  // Push the configured palette onto :root as CSS variables.
  // Rebrand the whole site by editing product.colors.
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(colors).forEach(([token, value]) => {
      root.style.setProperty(`--${token}`, value);
    });
  }, []);

  // One IntersectionObserver drives every .reveal animation.
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProviderBar />
        <Features />
        <HowItWorks />
        <BuilderSpotlight />
        <LocatorSpotlight />
        <ApiSettingsSpotlight />
        <TesterSpotlight />
        <ScanSpotlight />
        <Stats />
        <Pricing />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
