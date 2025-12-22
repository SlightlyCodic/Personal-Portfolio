import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from './contexts/ThemeContext';
import { TooltipProvider } from './components/Tooltip';
import { IntroOverlay } from './components/IntroOverlay';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HeroSection } from './sections/HeroSection';
import { ActivitySection } from './sections/ActivitySection';
import { ProjectsSection } from './sections/ProjectsSection';
import { StackSection } from './sections/StackSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div id="name" className="max-w-[920px] mx-auto relative scroll-pt-[90px]">
          <IntroOverlay />
          <TooltipProvider />
          <Navbar />
          <main>
            {/* CLI section removed */}
            <HeroSection />
            <ActivitySection />
            <ProjectsSection />
            <StackSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
        <Analytics />
      </ThemeProvider>
    </Router>
  );
}

export default App;
