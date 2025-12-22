import { useState, useRef, useEffect } from 'react';
import { SparklesSection } from '../components/SparklesSection';

export function ActivitySection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.7;

    const handleEnded = () => {
      setIsPlaying(false);
      audio.currentTime = 0;
    };

    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().catch(console.error);
      setIsPlaying(true);
    }
  };

  return (
    <SparklesSection
      id="githubActivity"
      className="scroll-section py-6 px-16 flex justify-center items-center bg-[var(--bg-color)] mb-[30px] transition-colors duration-300
        max-md:py-[18px] max-md:px-8
        max-sm:py-4 max-sm:px-5
        max-[480px]:py-3 max-[480px]:px-4"
    >
      <div className="flex gap-4 items-center flex-wrap justify-center max-sm:flex-col max-sm:gap-2.5">
        {/* Currently Building */}
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(128,128,128,0.08)] border border-[rgba(255,255,255,0.15)] opacity-85 rounded transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] cursor-pointer no-underline
            hover:bg-[rgba(128,128,128,0.15)] hover:opacity-100 hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.25)]
            light-theme:bg-transparent light-theme:border-[rgba(0,0,0,0.12)]
            max-sm:px-3 max-sm:py-[7px] max-sm:gap-2 max-sm:max-w-full
            max-[480px]:px-2.5 max-[480px]:py-1.5 max-[480px]:gap-[7px]"
        >
          <i className="fa-brands fa-github text-lg text-[var(--text-color)] flex-shrink-0 opacity-90 max-sm:text-sm max-[480px]:text-[13px]" />
          <div className="flex flex-col gap-0.5 min-w-0">
            <p className="text-xs font-semibold text-[var(--text-color)] opacity-95 m-0 tracking-[0.02em] max-sm:text-[11px] max-[480px]:text-[10px]">
              Currently Building
            </p>
            <p className="text-[11px] text-[var(--text-color)] opacity-60 m-0 font-medium max-sm:text-[9px] max-[480px]:text-[8px]">
              Spotify Local Jam
            </p>
          </div>
        </a>

        {/* Spotify Activity */}
        <div
          onClick={togglePlay}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[rgba(128,128,128,0.08)] border border-[rgba(255,255,255,0.15)] opacity-85 rounded transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] no-underline text-inherit cursor-pointer max-w-[280px]
            hover:bg-[rgba(128,128,128,0.15)] hover:opacity-100 hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.25)]
            max-sm:px-3 max-sm:py-[7px] max-sm:gap-2 max-sm:max-w-full
            max-[480px]:px-2.5 max-[480px]:py-1.5 max-[480px]:gap-[7px]"
        >
          <i className="fa-brands fa-spotify text-lg text-[#1DB954] flex-shrink-0 opacity-95 max-sm:text-sm" />
          <div className="flex flex-col gap-0.5 min-w-0 flex-1">
            <p className="text-xs font-semibold text-[var(--text-color)] opacity-95 m-0 overflow-hidden text-ellipsis whitespace-nowrap tracking-[0.02em] max-sm:text-[11px]">
              Trophies
            </p>
            <p className="text-[11px] text-[var(--text-color)] opacity-60 m-0 overflow-hidden text-ellipsis whitespace-nowrap font-medium max-sm:text-[9px]">
              Drake
            </p>
          </div>
          <i
            className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'} flex-shrink-0 text-xs text-[var(--text-color)] opacity-50 transition-all duration-300 hover:text-[#1DB954] hover:opacity-90 hover:scale-[1.2] max-sm:text-[10px]`}
          />
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} preload="metadata" style={{ display: 'none' }}>
        <source src="/audio/song.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </SparklesSection>
  );
}
