/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import MarqueeRow from './MarqueeRow';

type TechItem = {
  name: string;
  icon: string;
  url: string;
};

const categories: Record<string, { title: string; items: TechItem[] }> = {
  languages: {
    title: 'Languages',
    items: [
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', url: 'https://python.org' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', url: 'https://typescriptlang.org' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', url: 'https://isocpp.org' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg', url: 'https://learn.microsoft.com/dotnet/csharp' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
      { name: 'Markdown', icon: 'https://cdn.simpleicons.org/markdown/FFFFFF', url: 'https://daringfireball.net/projects/markdown' },
      { name: 'Bash', icon: 'https://cdn.simpleicons.org/gnubash/FFFFFF', url: 'https://gnu.org/software/bash' },
    ],
  },
  frameworks: {
    title: 'Frameworks & Libraries',
    items: [
      { name: '.NET', icon: 'https://cdn.simpleicons.org/dotnet/FFFFFF', url: 'https://dotnet.microsoft.com' },
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org' },
      { name: 'Express', icon: 'https://cdn.simpleicons.org/express/FFFFFF', url: 'https://expressjs.com' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', url: 'https://react.dev' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', url: 'https://reactnative.dev' },
      { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/FFFFFF', url: 'https://nextjs.org' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', url: 'https://vuejs.org' },
      { name: 'Nuxt.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-original.svg', url: 'https://nuxt.com' },
      { name: 'Quasar', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quasar/quasar-original.svg', url: 'https://quasar.dev' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', url: 'https://tailwindcss.com' },
      { name: 'Sequelize', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg', url: 'https://sequelize.org' },
      { name: 'NestJS', icon: 'https://cdn.simpleicons.org/nestjs/FFFFFF', url: 'https://nestjs.com' },
      { name: 'Prisma', icon: 'https://cdn.simpleicons.org/prisma/FFFFFF', url: 'https://prisma.io' },
      { name: 'Electron', icon: 'https://cdn.simpleicons.org/electron/FFFFFF', url: 'https://electronjs.org' },
      { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/FFFFFF', url: 'https://vite.dev' },
      { name: 'Zustand', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', url: 'https://zustand-demo.pmnd.rs' },
      { name: 'TanStack Query', icon: 'https://cdn.simpleicons.org/reactquery/FFFFFF', url: 'https://tanstack.com/query' },
    ],
  },
  databaseCloud: {
    title: 'Database & Cloud',
    items: [
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', url: 'https://postgresql.org' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', url: 'https://mysql.com' },
      { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg', url: 'https://supabase.com' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg', url: 'https://firebase.google.com' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg', url: 'https://redis.io' },
    ],
  },
  toolsDevOps: {
    title: 'Tools & DevOps',
    items: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', url: 'https://docker.com' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', url: 'https://linux.org' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', url: 'https://git-scm.com' },
      { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github/FFFFFF', url: 'https://github.com' },
      { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg', url: 'https://gitlab.com' },
      { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg', url: 'https://figma.com' },
      { name: 'Adobe Photoshop', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg', url: 'https://adobe.com/photoshop' },
      { name: 'Typst', icon: 'https://cdn.simpleicons.org/typst/239DAD', url: 'https://typst.app' },
      { name: 'Turborepo', icon: 'https://cdn.simpleicons.org/turborepo/FFFFFF', url: 'https://turbo.build/repo' },
      { name: 'Cloudflare Workers', icon: 'https://cdn.simpleicons.org/cloudflare/FFFFFF', url: 'https://workers.cloudflare.com' },
      { name: 'MinIO', icon: 'https://cdn.simpleicons.org/minio/FFFFFF', url: 'https://min.io' },
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

function TechCard({ name, icon, url }: TechItem) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-dark-card border border-dark-border rounded-xl p-5 flex flex-col items-center gap-3 hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-200 group w-36 h-32 shrink-0 cursor-pointer"
    >
      <TechIcon name={name} src={icon} />
      <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-200 text-center leading-tight">
        {name}
      </span>
    </a>
  );
}

function CategorySection({ title, items, direction, repeat }: { title: string; items: TechItem[]; direction: 'ltr' | 'rtl'; repeat: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="mb-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="text-xl font-semibold text-gray-200 mb-6 text-center">
        {title}
      </h3>
      <MarqueeRow direction={direction} speed={35} repeat={repeat} paused={hovered}>
        {items.map((item) => (
          <TechCard key={item.name} name={item.name} icon={item.icon} url={item.url} />
        ))}
      </MarqueeRow>
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
        <CategorySection
          key={key}
          title={title}
          items={items}
          direction={i % 2 === 0 ? 'rtl' : 'ltr'}
          repeat={key === 'databaseCloud' ? 4 : 1}
        />
      ))}
    </section>
  );
}
