import { SparklesSection } from '../components/SparklesSection';

interface Skill {
  name: string;
  icon: string;
  link: string;

}

const SKILLS: Skill[] = [
  // Programming Languages
  { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg', link: 'https://www.python.org/' },
  { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg', link: 'https://www.typescriptlang.org/' },
  { name: 'PHP', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg', link: 'https://www.php.net/' },

  // AI / Machine Learning
  { name: 'PyTorch', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg', link: 'https://pytorch.org/' },
  { name: 'Hugging Face', icon: 'https://huggingface.co/front/assets/huggingface_logo.svg', link: 'https://huggingface.co/' },
  { name: 'Computer Vision', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg', link: 'https://en.wikipedia.org/wiki/Computer_vision' },
  { name: 'Natural Language Processing', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg', link: 'https://en.wikipedia.org/wiki/Natural_language_processing' },
  { name: 'Recommender Systems', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/apache/apache-original.svg', link: 'https://en.wikipedia.org/wiki/Recommender_system' },
  { name: 'LangChain', icon: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4', link: 'https://www.langchain.com/' },

  // Frontend
  { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg', link: 'https://react.dev/' },
  { name: 'Next.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg', link: 'https://nextjs.org/' },
  { name: 'Tailwind CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg', link: 'https://tailwindcss.com/' },
  { name: 'Bootstrap', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg', link: 'https://getbootstrap.com/' },

  // Backend & APIs
  { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg', link: 'https://nodejs.org/' },
  { name: 'Streamlit', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/streamlit/streamlit-original.svg', link: 'https://streamlit.io/' },
  { name: 'REST APIs', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg', link: 'https://restfulapi.net/' },

  // Databases
  { name: 'PostgreSQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg', link: 'https://www.postgresql.org/' },
  { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg', link: 'https://www.mongodb.com/' },
  { name: 'Vector Databases', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg', link: 'https://www.pinecone.io/learn/vector-database/' },

  // DevOps & Tools
  { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg', link: 'https://git-scm.com/' },
  { name: 'Docker', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg', link: 'https://www.docker.com/' },
  { name: 'Postman', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg', link: 'https://www.postman.com/' },
  { name: 'Vercel', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg', link: 'https://vercel.com/' },
  { name: 'AWS', icon: 'images/AWS.png', link: 'https://aws.amazon.com/' },
];



export function StackSection() {
  return (
    <SparklesSection
      id="skills"
      className="scroll-section relative bg-[var(--bg-color)] text-[var(--text-color)] py-20 px-6 transition-colors duration-300
        before:content-[''] before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:w-screen before:border-t before:border-dashed before:border-[var(--edge)] before:h-0 before:pointer-events-none before:z-0 before:transition-colors before:duration-300
        max-md:py-[100px] max-md:px-8
        max-sm:py-[60px] max-sm:px-5
        max-[480px]:py-20 max-[480px]:px-4
        max-[360px]:py-[60px] max-[360px]:px-3"
    >
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--text-color)] tracking-[-0.025em]">
          Stack
        </h2>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(48px,1fr))] gap-3 mb-6
          max-sm:grid-cols-[repeat(auto-fill,minmax(36px,1fr))] max-sm:gap-2
          max-[480px]:grid-cols-[repeat(auto-fill,minmax(32px,1fr))] max-[480px]:gap-1.5"
        >
          {SKILLS.map((skill) => (
            <a
              key={skill.name}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip={skill.name}
              className="flex items-center justify-center opacity-100 transition-opacity duration-200 aspect-square no-underline hover:opacity-70"
            >
              <img
                src={skill.icon}
                alt={skill.name}
                loading="lazy"
                className="w-12 h-12 object-contain max-sm:w-9 max-sm:h-9 max-[480px]:w-8 max-[480px]:h-8"
              />
            </a>
          ))}
        </div>
      </div>
    </SparklesSection>
  );
}
