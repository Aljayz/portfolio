export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center gradient-text inline-flex items-center gap-3 justify-center">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
        About Me
      </h2>
      <div className="bg-dark-card border border-dark-border rounded-2xl p-8 shadow-xl">
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Hi! I&apos;m <span className="font-semibold text-white">Aljayz</span> — a proactive,
          growth-oriented <span className="font-semibold text-white">Software Engineer</span>.
        </p>
        <ul className="space-y-3 text-gray-300">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 mt-0.5 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>
              <span className="font-semibold text-white">Cum Laude</span> graduate of{' '}
              <span className="font-semibold text-white">BS in Computer Science</span> from Mindanao
              State University – Main Campus, Marawi City (2022–2026).
            </span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 mt-0.5 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>
              Hands-on <span className="font-semibold text-white">UI/UX design</span> and{' '}
              <span className="font-semibold text-white">frontend development</span> — applied during an
              internship at Centralized Cloud Computing International Inc.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 mt-0.5 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>
              <span className="font-semibold text-white">Software architecture</span> and{' '}
              <span className="font-semibold text-white">backend development</span> — led in hackathon
              settings including the AWS Student Builder Innovation Cup 2026 and the Ranaw Tech-Solve
              Hackathon 2026.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 mt-0.5 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>
              Passionate about{' '}
              <span className="font-semibold text-white">
                Artificial Intelligence, Cloud Computing, Web Development, Distributed Computing,
                Mobile Development, and Cybersecurity.
              </span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}