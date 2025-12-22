import { useState, useCallback } from 'react';
import { SparklesSection } from '../components/SparklesSection';
import { TerminalCard } from '../components/TerminalCard';
import { DinoGame } from '../components/DinoGame';

export function HeroSection() {
  const [showGame, setShowGame] = useState(false);

  const handleProfileClick = useCallback(() => {
    setShowGame(true);
  }, []);

  const handleCloseGame = useCallback(() => {
    setShowGame(false);
  }, []);

  return (
    <SparklesSection
      id="hero"
      className="scroll-section flex justify-center items-center py-10 px-10 min-h-[30vh] relative
        max-md:py-[100px] max-md:px-8
        max-sm:py-[60px] max-sm:px-5 max-sm:min-h-[50vh]
        max-[480px]:py-[10px] max-[480px]:px-4
        max-[360px]:py-10 max-[360px]:px-3"
    >
      {/* Shooting stars background */}
      <div className="absolute inset-0 pointer-events-none z-0" aria-hidden="true">
        <span className="shooting-star star-1" />
        <span className="shooting-star star-2" />
        <span className="shooting-star star-3" />
        <span className="shooting-star star-4" />
      </div>

      {/* Terminal Card */}
      {!showGame && (
        <div className="relative z-[1] w-full flex justify-center">
          <TerminalCard onProfileClick={handleProfileClick} />
        </div>
      )}

      {/* Dino Game */}
      {showGame && (
        <div className="relative z-[1] w-full">
          <DinoGame onClose={handleCloseGame} />
        </div>
      )}
    </SparklesSection>
  );
}
