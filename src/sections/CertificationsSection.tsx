import { SparklesSection } from '../components/SparklesSection';

interface Certification {
  id: string;
  name: string;
  issuer: string;
  image: string;
  link?: string;
  date?: string;
  tooltip: string;
}

const CERTIFICATIONS: Certification[] = [
  {
    id: 'azure-ai-fundamentals',
    name: 'Microsoft Certified: Azure AI Fundamentals',
    issuer: 'Microsoft',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
    link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/',
    date: 'Apr 2025',
    tooltip: 'View Microsoft Credential',
  },
  {
    id: 'accenture-data-analytics',
    name: 'Accenture North America – Data Analytics & Visualization Job Simulation',
    issuer: 'Forage',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg',
    link: 'https://www.theforage.com/virtual-internships/prototype/hzmoNKtzvAzXsEqx8/Accenture-North-America-Data-Analytics-and-Visualization',
    date: 'Oct 2024',
    tooltip: 'View Forage Credential',
  },
];

function CertificationCard({ cert }: { cert: Certification }) {
  const CardContent = (
    <div className="flex flex-row h-full max-md:flex-col">
      {/* Certificate Image */}
      <div className="w-48 h-full flex-shrink-0 overflow-hidden relative bg-[var(--card-bg)] flex items-center justify-center p-6
        max-md:w-full max-md:h-32
        max-[480px]:h-28"
      >
        <img
          src={cert.image}
          alt={`${cert.name} Certificate`}
          className="w-full h-full object-contain block"
          loading="lazy"
        />
      </div>

      {/* Card Content */}
      <div className="p-5 flex flex-col flex-1 bg-[var(--card-bg)] transition-colors duration-300 justify-center max-md:p-4 max-[480px]:p-4">
        <p className="font-sans text-[11px] font-semibold text-[var(--text-color)] opacity-50 tracking-[0.5px] uppercase m-0 mb-2 max-[480px]:text-[10px] max-[480px]:mb-1.5">
          {cert.issuer}
        </p>
        <h3 className="font-sans text-lg leading-[1.3] text-[var(--text-color)] font-bold m-0 mb-2 max-[480px]:text-base max-[480px]:mb-1.5">
          {cert.name}
        </h3>
        {cert.date && (
          <p className="text-sm leading-relaxed text-[var(--text-color)] opacity-70 m-0 max-[480px]:text-[13px]">
            Issued: {cert.date}
          </p>
        )}
      </div>
    </div>
  );

  if (cert.link) {
    return (
      <article
        className="w-full h-[180px] bg-[var(--card-bg)] border border-[var(--border-color)] opacity-90 rounded relative flex overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:opacity-100 hover:-translate-y-1
          max-md:h-auto max-md:min-h-[180px]
          max-[480px]:min-h-[200px]
          max-[480px]:h-auto"
        data-tooltip={cert.tooltip}
      >
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-inherit flex w-full h-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        >
          {CardContent}
        </a>
      </article>
    );
  }

  return (
    <article
      className="w-full h-[180px] bg-[var(--card-bg)] border border-[var(--border-color)] opacity-90 rounded relative flex overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
        max-md:h-auto max-md:min-h-[180px]
        max-[480px]:min-h-[200px]
        max-[480px]:h-auto"
      data-tooltip={cert.tooltip}
    >
      {CardContent}
    </article>
  );
}

export function CertificationsSection() {
  return (
    <SparklesSection
      id="certifications"
      className="scroll-section py-[120px] px-6 bg-[var(--bg-color)] relative transition-colors duration-300
        before:content-[''] before:absolute before:left-1/2 before:top-0 before:-translate-x-1/2 before:w-screen before:border-t before:border-dashed before:border-[var(--edge)] before:h-0 before:pointer-events-none before:z-0 before:transition-colors before:duration-300
        max-md:py-[100px] max-md:px-8
        max-sm:py-[60px] max-sm:px-5
        max-[480px]:py-20 max-[480px]:px-4
        max-[360px]:py-[60px] max-[360px]:px-3"
    >
      <div className="max-w-[700px] mx-auto">
        <h2 className="text-2xl font-semibold mb-4 text-[var(--text-color)] tracking-[-0.025em]">
          Certifications
        </h2>

        <div className="grid grid-cols-1 gap-6 max-md:gap-4 max-sm:gap-3 max-[480px]:gap-4">
          {CERTIFICATIONS.map((cert) => (
            <CertificationCard key={cert.id} cert={cert} />
          ))}
        </div>
      </div>
    </SparklesSection>
  );
}
