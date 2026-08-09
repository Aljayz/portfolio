/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react';

export type Project = {
  name: string;
  desc: string;
  link: string;
  repoLink?: string;
  visibility: string;
  status: string;
  techStack?: string[];
};

const statusStyles: Record<string, string> = {
  'In Progress': 'bg-yellow-500/20 text-yellow-400',
  'Completed': 'bg-green-500/20 text-green-400',
  'Cancelled': 'bg-red-500/20 text-red-400',
  'Extensible': 'bg-purple-500/20 text-purple-400',
  'Deployed': 'bg-blue-500/20 text-blue-400',
};

type TechInfo = {
  color: string;
  iconUrl: string;
  textColor: string;
};

const devicon = (name: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

const simpleIcon = (name: string) =>
  `https://cdn.simpleicons.org/${name}/ffffff`;

const techMap: Record<string, TechInfo> = {
  'Python':             { color: '#3776AB', iconUrl: devicon('python'), textColor: '#fff' },
  'MPI4PY':             { color: '#555',    iconUrl: devicon('python'), textColor: '#fff' },
  'NumPy':              { color: '#013243', iconUrl: devicon('numpy'),  textColor: '#fff' },
  'Tkinter':            { color: '#555',    iconUrl: devicon('python'), textColor: '#fff' },
  'Llama3':             { color: '#555',    iconUrl: simpleIcon('meta'), textColor: '#fff' },
  'C++':                { color: '#00599C', iconUrl: devicon('cplusplus'), textColor: '#fff' },
  'Next.js 16':         { color: '#000',    iconUrl: simpleIcon('nextdotjs'), textColor: '#fff' },
  'TypeScript':         { color: '#3178C6', iconUrl: devicon('typescript'), textColor: '#fff' },
  'Firebase Auth':      { color: '#ffca28', iconUrl: simpleIcon('firebase'), textColor: '#111' },
  'Supabase':           { color: '#3ECF8E', iconUrl: devicon('supabase'), textColor: '#111' },
  'Cloudflare Workers': { color: '#F38020', iconUrl: simpleIcon('cloudflare'), textColor: '#fff' },
  'Lucide':             { color: '#555',    iconUrl: simpleIcon('lucide'), textColor: '#fff' },
  'JavaScript':         { color: '#F7DF1E', iconUrl: simpleIcon('javascript'), textColor: '#111' },
  'CSS':                { color: '#1572B6', iconUrl: devicon('css3'),   textColor: '#fff' },
  'HTML':               { color: '#E34F26', iconUrl: devicon('html5'),  textColor: '#fff' },
  'Electron':           { color: '#47848F', iconUrl: simpleIcon('electron'), textColor: '#fff' },
  'React':              { color: '#61DAFB', iconUrl: devicon('react'),  textColor: '#111' },
  'React 19':           { color: '#61DAFB', iconUrl: devicon('react'),  textColor: '#111' },
  'Vite':               { color: '#646CFF', iconUrl: simpleIcon('vite'), textColor: '#fff' },
  'Tailwind CSS':       { color: '#06B6D4', iconUrl: devicon('tailwindcss'), textColor: '#111' },
  'Zustand':            { color: '#555',    iconUrl: devicon('react'),  textColor: '#fff' },
  'Prisma':             { color: '#2D3748', iconUrl: devicon('prisma'), textColor: '#fff' },
  'Gemini AI':          { color: '#555',    iconUrl: simpleIcon('googlegemini'), textColor: '#fff' },
  'Groq':               { color: '#F55036', iconUrl: simpleIcon('groq'), textColor: '#fff' },
  'PWA':                { color: '#5A0FC8', iconUrl: simpleIcon('pwa'), textColor: '#fff' },
  'Turborepo':          { color: '#EF4444', iconUrl: simpleIcon('turborepo'), textColor: '#fff' },
  'NestJS 11':          { color: '#E0234E', iconUrl: simpleIcon('nestjs'),    textColor: '#fff' },
  'PostgreSQL 15':      { color: '#4169E1', iconUrl: devicon('postgresql'),   textColor: '#fff' },
  'Prisma 6':           { color: '#2D3748', iconUrl: devicon('prisma'),       textColor: '#fff' },
  'MinIO':              { color: '#C72C48', iconUrl: simpleIcon('minio'),     textColor: '#fff' },
  'Redis':              { color: '#DC382D', iconUrl: devicon('redis'),        textColor: '#fff' },
  'Docker Compose':     { color: '#2496ED', iconUrl: simpleIcon('docker'),    textColor: '#fff' },
  'BullMQ':             { color: '#E0234E', iconUrl: '', textColor: '#fff' },
  'TanStack Query':     { color: '#FF4154', iconUrl: simpleIcon('reactquery'), textColor: '#fff' },
  'Dexie.js':           { color: '#555',    iconUrl: 'https://avatars.githubusercontent.com/u/32483223?s=48&v=4', textColor: '#fff' },
  'Recharts':           { color: '#22B5BF', iconUrl: '', textColor: '#fff' },
  'JWT':                { color: '#000',    iconUrl: simpleIcon('jsonwebtokens'), textColor: '#fff' },
};

function TechBadge({ name }: { name: string }) {
  const info = techMap[name] || { color: '#555', iconUrl: '', textColor: '#fff' };

  return (
    <span
      className="inline-flex items-center gap-1 rounded px-2 py-1 text-xs font-medium leading-none"
      style={{ backgroundColor: info.color, color: info.textColor }}
    >
      {info.iconUrl && (
        <img src={info.iconUrl} alt="" className="w-3.5 h-3.5 [filter:drop-shadow(0_0_1.5px_rgba(0,0,0,0.9))_drop-shadow(0_0_1px_rgba(0,0,0,0.9))]" />
      )}
      <span>{name}</span>
    </span>
  );
}

export default function ProjectDetails({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        className="bg-dark-card border border-dark-border rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto p-6 relative animate-in"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-2xl font-bold text-white pr-8 mb-4">{project.name}</h3>

        <div className="flex gap-2 mb-4">
          <span className="text-xs bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full capitalize">
            {project.visibility}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              statusStyles[project.status] || 'bg-gray-700 text-gray-300'
            }`}
          >
            {project.status}
          </span>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.desc}</p>

        <div className="space-y-3 mb-6">
          {project.link && project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {project.visibility === 'private' ? 'View Page' : 'View Repository'}
            </a>
          )}
          {project.repoLink && project.repoLink !== project.link && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-white transition-colors text-sm"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Source Repository
            </a>
          )}
        </div>

        {project.techStack && project.techStack.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}