const projects = [
  {
    name: 'Parallel-and-Distributed-Merge-Sort-Implementations',
    desc: 'A research comparison of sequential vs. parallel Merge Sort using MPI4PY, Python, and NumPy. Evaluates performance scalability in distributed systems through multi-processor sorting and merging.',
    link: 'https://github.com/Aljayz/Parallel-and-Distributed-Merge-Sort-Implementations',
    visibility: 'public',
    status: 'Completed',
  },
  {
    name: 'Llama-API',
    desc: 'A dual project featuring: (1) Tkinter GUI for Llama3 with streaming responses and keyboard controls, and (2) MPI4PY-based parallel merge sort research comparing sequential vs distributed performance.',
    link: 'https://github.com/Aljayz/Llama-API',
    visibility: 'public',
    status: 'Completed',
  },
  {
    name: 'Stochastic-Queue-System_Simulation',
    desc: 'A C++ discrete-event simulator modeling single/multi-server queues with exponential arrival/service times. Calculates key metrics (utilization, wait times, rejection rates) for balanced (λ=μ), overloaded (λ>μ), and underloaded (λ<μ) systems.',
    link: 'https://github.com/Aljayz/Stochastic-Queue-System_Simulation',
    visibility: 'public',
    status: 'Completed',
  },
  {
    name: 'Jobars-Events-Webpage',
    desc: 'A web application for managing events, featuring a user-friendly interface and real-time updates.',
    link: 'https://jobars-events.aljayz.workers.dev/',
    visibility: 'private',
    status: 'Deployed', // Capitalized to match logic below
  },
  {
    name: 'Cooperative Development Authority - Philippines',
    desc: 'Freelance project with NDA',
    link: '#',
    visibility: 'private',
    status: 'Cancelled',
  },
  {
    name: 'TikTok-Like-Automated-Like-Spam-Web-Browser-Extension',
    desc: 'A browser extension that automates liking TikTok videos based on user-defined criteria, utilizing web scraping and automation techniques.',
    link: 'https://github.com/Aljayz/TikTok-Like-Automated-Like-Spam-Web-Browser-Extension.git',
    visibility: 'public',
    status: 'Extensible',
  },
  {
    name: 'Nexube',
    desc: 'A desktop media streaming application built with Electron, React, and Vite — designed for multi-profile households with advanced playback control.',
    link: 'https://github.com/Aljayz/nexube',
    visibility: 'public',
    status: 'v2.7.0'
  },
  {
    name: 'JobVest',
    desc: 'AI employment platform for Mindanao that translates informal, vernacular work experience into formal competencies employers search — making the invisible workforce visible. Serves both formal and informal, white- and blue-collar workers.',
    link: 'https://job-vest-web.vercel.app/',
    visibility: 'private',
    status: 'Deployed',
  }
];

const statusStyles: Record<string, string> = {
  'In Progress': 'bg-yellow-500/20 text-yellow-400',
  'Completed': 'bg-green-500/20 text-green-400',
  'Cancelled': 'bg-red-500/20 text-red-400',
  'Extensible': 'bg-purple-500/20 text-purple-400',
  'Deployed': 'bg-blue-500/20 text-blue-400', // Added a styling rule for "Deployed"
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text inline-flex items-center gap-3 justify-center">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
        </svg>
        Projects
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, idx) => {
          // Determine if the link should actually be disabled
          const isLinkDisabled = project.visibility === 'private' && project.status !== 'Deployed';

          return (
            <div
              key={idx}
              className="bg-dark-card border border-dark-border rounded-xl p-6 flex flex-col justify-between hover:border-primary/50 transition-colors shadow-lg"
            >
              <div>
                {/* Badges row */}
                <div className="flex gap-2 mb-2 justify-end">
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

                {/* Title */}
                <h3 className="text-xl font-bold text-white leading-tight mb-3">
                  {project.name}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>
              </div>

              {/* Action Button */}
              <a
                href={project.link}
                target={project.link !== '#' ? '_blank' : undefined}
                rel={project.link !== '#' ? 'noopener noreferrer' : undefined}
                className={`mt-auto inline-flex items-center gap-2 font-medium text-sm transition duration-200 ${
                  isLinkDisabled
                    ? 'text-gray-500 cursor-not-allowed pointer-events-none'
                    : 'text-accent hover:text-white cursor-pointer'
                }`}
              >
                {project.visibility === 'private'
                  ? project.status === 'Deployed' ? 'View Page' : 'Confidential'
                  : 'View Repository'}
                
                {/* External link icon shows if it's public OR if it's a deployed private project */}
                {(!isLinkDisabled && project.link !== '#') && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                )}
              </a>
            </div>
          );
        })}
      </div>
      <p className="text-center text-gray-500 mt-10 italic">More coming soon...</p>
    </section>
  );
}
