/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import MarqueeRow from './MarqueeRow';

type TechItem = {
  name: string;
  icon: string;
};

const categories: Record<string, { title: string; items: TechItem[] }> = {
  languages: {
    title: 'Languages',
    items: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'Markdown', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg' },
      { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg' },
    ],
  },
  frameworks: {
    title: 'Frameworks & Libraries',
    items: [
      { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnet/dotnet-original.svg' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
      { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg' },
      { name: 'Quasar', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quasar/quasar-original.svg' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Sequelize', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg' },
    ],
  },
  databaseCloud: {
    title: 'Database & Cloud',
    items: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
    ],
  },
  toolsDevOps: {
    title: 'Tools & DevOps',
    items: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg' },
      { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
      { name: 'Adobe Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-plain.svg' },
      { name: 'Typst', icon: 'https://cdn.simpleicons.org/typst/239DAD' },
    ],
  },
};

function TechIcon({ name, src }: { name: string; src: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="h-14 w-14 rounded-xl bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">
        {name[0]}
      </div>
    );
  }

  return (
    <div className="h-14 w-14 rounded-xl bg-white/[7%] flex items-center justify-center shrink-0 shadow-[inset_0_0_8px_rgba(124,58,237,0.15),0_0_12px_rgba(124,58,237,0.25)] group-hover:shadow-[inset_0_0_12px_rgba(124,58,237,0.25),0_0_20px_rgba(124,58,237,0.4)] transition-shadow duration-200">
      <img
        src={src}
        alt={name}
        className="h-9 w-9 object-contain drop-shadow-[0_0_4px_rgba(124,58,237,0.4)] group-hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.6)] transition-all duration-200"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function TechCard({ name, icon }: TechItem) {
  return (
    <div className="bg-dark-card border border-dark-border rounded-xl p-5 flex flex-col items-center gap-3 hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-200 group w-36 h-28 shrink-0">
      <TechIcon name={name} src={icon} />
      <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-200 text-center leading-tight">
        {name}
      </span>
    </div>
  );
}

export default function TechStack() {
  const entries = Object.entries(categories);

  return (
    <section id="tech" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text inline-flex items-center gap-3 justify-center">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
        Tech Stack
      </h2>

      {entries.map(([key, { title, items }], i) => (
        <div key={key} className="mb-10">
          <h3 className="text-xl font-semibold text-gray-200 mb-6 text-center">
            {title}
          </h3>
          <MarqueeRow
            direction={i % 2 === 0 ? 'rtl' : 'ltr'}
            speed={35}
            repeat={key === 'databaseCloud' ? 4 : 1}
          >
            {items.map((item) => (
              <TechCard key={item.name} name={item.name} icon={item.icon} />
            ))}
          </MarqueeRow>
        </div>
      ))}
    </section>
  );
}
