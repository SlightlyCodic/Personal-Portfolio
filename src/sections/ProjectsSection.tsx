import { SparklesSection } from '../components/SparklesSection';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  tooltip: string;
  tags: string[];
  imageClass?: string;
}

const PROJECTS: Project[] = [
  {
    id: 'tinyclip-vlm',
    title: 'Tiny CLIP Vision-Language Model',
    description: 'A high-performance, lightweight vision-language model (~34M parameters) for efficient image–text retrieval, trained with multi-caption contrastive learning and distillation.',
    image: '/images/tinyclip-vlm.png',
    link: 'https://github.com/SlightlyCodic/High-Performance-Vision-Language-Model-Under-50M-Parameters',
    tooltip: 'Compact Vision-Language Model',
    tags: ['Python', 'PyTorch', 'Vision-Language AI', 'Contrastive Learning', 'Research'],
  },

  {
  id: 'clip-prompt-tuning',
  title: 'Prompt Tuning for Vision–Language Models',
  description: 'An in-depth research project analyzing and improving prompt tuning methods for CLIP, including CuPL, CoOp, CoCoOp, and Tip-Adapter, with extensive evaluation, visualization, and explainability analysis.',
  image: '/images/clip-prompt-tuning.png',
  link: 'https://github.com/oz-e/applied-ml',
  tooltip: 'CLIP Prompt Tuning Research',
  tags: ['Python', 'PyTorch', 'CLIP', 'Vision-Language AI', 'Research'],
  },


  {
  id: 'spotify-recsys',
  title: 'Spotify Song Recommendation System',
  description: 'A personalized music recommendation engine that suggests songs based on user listening history and Spotify audio features.',
  image: '/images/spotify-recsys.png',
  link: 'https://github.com/SlightlyCodic/Spotify-Song-Recommendation-System',
  tooltip: 'Music Recommendation Engine',
  tags: ['Python', 'Machine Learning', 'Spotify API', 'Data Science'],
  },
  {
  id: 'hf-image-classifier',
  title: 'AI Image Classification App',
  description: 'A Streamlit-powered web app that classifies uploaded images using state-of-the-art Hugging Face vision models with confidence scores and analytics.',
  image: '/images/hf-image-classifier.png',
  link: 'https://slightlycodic-image-classification-using-hugging-fa-main-4t3ub6.streamlit.app/',
  tooltip: 'Hugging Face Image Classifier',
  tags: ['Python', 'Streamlit', 'Hugging Face', 'Computer Vision'],
},

{
  id: 'token-abbreviation-classifier',
  title: 'Token Classification for Abbreviations',
  description: 'An NLP tool that identifies and classifies abbreviations in text using token classification techniques for improved text understanding.',
  image: '/images/token-abbreviation-classifier.png',
  link: 'https://comm061nlp.streamlit.app',
  tooltip: 'Abbreviation Token Classifier',
  tags: ['Python', 'NLP', 'Token Classification'],
},
{
  id: 'diabetic-retinopathy-detection',
  title: 'Diabetic Retinopathy Detection',
  description: 'A deep learning-based computer vision system that detects and classifies diabetic retinopathy from retinal fundus images.',
  image: '/images/diabetic.png',
  link: 'https://github.com/SlightlyCodic/DiabeticRetinopathyDetection',
  tooltip: 'Retinopathy Detection AI',
  tags: ['Python', 'Computer Vision', 'Deep Learning'],
},
{
  id: 'vehicle-rental-web-app',
  title: 'Vehicle Rental Web Application',
  description: 'A full web application for browsing, selecting, and booking vehicles for rental with user accounts, booking management, and dynamic filtering.',
  image: '/images/vehicle-rental-web-app.png',
  link: 'https://github.com/SlightlyCodic/Vehicle-Rental-Web-Application',
  tooltip: 'Vehicle Rental System',
  tags: ['PHP', 'HTML', 'CSS', 'JavaScript'],
}





];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="w-full h-[400px] bg-[var(--card-bg)] border border-[var(--border-color)] opacity-90 rounded relative flex flex-col overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-100 hover:-translate-y-1
        max-md:h-auto max-md:min-h-[350px]
        max-[480px]:min-h-[380px]
        max-[480px]:h-auto"
      data-tooltip={project.tooltip}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline text-inherit flex flex-col h-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1"
      >
        {/* Card Image */}
        <div className="w-full h-40 overflow-hidden relative bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] flex items-center justify-center
          max-md:h-[140px]
          max-[480px]:h-[120px]"
        >
          <img
            src={project.image}
            alt={`${project.title} Preview`}
            className={`w-full h-full object-cover block ${project.imageClass || ''}`}
            loading="lazy"
          />
        </div>

        {/* Card Content */}
        <div className="p-5 flex flex-col flex-1 bg-[var(--card-bg)] transition-colors duration-300 max-md:p-4 max-[480px]:p-4">
          <p className="font-sans text-[11px] font-semibold text-[var(--text-color)] opacity-50 tracking-[0.5px] uppercase m-0 mb-2 max-[480px]:text-[10px] max-[480px]:mb-1.5">
            Featured Project
          </p>
          <h3 className="font-sans text-lg leading-[1.3] text-[var(--text-color)] font-bold m-0 mb-3 flex items-center gap-2 max-[480px]:text-base max-[480px]:mb-2.5">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-[var(--text-color)] opacity-70 m-0 mb-4 flex-1 max-[480px]:text-[13px]">
            {project.description}
          </p>
          <p className="text-[11px] text-[var(--text-color)] opacity-50 m-0 mb-2 font-medium uppercase tracking-[0.5px]">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5 m-0 mb-4 max-[480px]:m-0 max-[480px]:mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-[3px] bg-[rgba(128,128,128,0.1)] border border-[var(--border-color)] opacity-80 rounded-md text-[10px] text-[var(--text-color)] font-semibold font-sans transition-all duration-200 uppercase tracking-[0.3px] max-[480px]:text-[9px] max-[480px]:px-1.5 max-[480px]:py-0.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}

export function ProjectsSection() {
  return (
    <SparklesSection
      id="projects"
      className="scroll-section py-[120px] px-6 bg-[var(--bg-color)] relative transition-colors duration-300
        before:content-[''] before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:w-screen before:border-t before:border-dashed before:border-[var(--edge)] before:h-0 before:pointer-events-none before:z-0 before:transition-colors before:duration-300
        max-md:py-[100px] max-md:px-8
        max-sm:py-[60px] max-sm:px-5
        max-[480px]:py-20 max-[480px]:px-4
        max-[360px]:py-[60px] max-[360px]:px-3"
    >
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--text-color)] tracking-[-0.025em]">
          Projects
        </h2>

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-4 max-sm:gap-3 max-[480px]:gap-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Footer Text */}
        <div className="flex items-center justify-center mt-14 px-6 max-[480px]:mt-10 max-[480px]:px-4">
          <p className="text-[0.9375rem] text-[var(--text-color)] opacity-45 m-0 text-center leading-relaxed italic max-[480px]:text-[0.875rem]">
            Make sure to star the projects you like. Check out my other cool work on my{' '}
            <a
              href="https://github.com/SlightlyCodic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-color)] opacity-70 no-underline font-medium transition-all duration-200 border-b border-[var(--border-color)] hover:opacity-95"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>
    </SparklesSection>
  );
}
