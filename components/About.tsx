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
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          Hi! I&apos;m <span className="font-semibold text-white">Aljayz</span> – a proactive,
          growth-focused Junior Software Engineer candidate, currently pursuing a{' '}
          <span className="text-accent">BS in Computer Science</span> at Mindanao State
          University – Marawi City (2022–Present).
        </p>
        <p className="text-lg text-gray-300 leading-relaxed mb-4">
          I have hands-on experience in UI/UX design and frontend development, applied
          during an internship at Centralized Cloud Computing International Inc.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Driven by a passion for continuous learning, I actively explore{' '}
          <span className="font-semibold text-white">
            Artificial Intelligence, Cloud Computing, Web Development, Parallel/Distributed
            Computing, Mobile Development, and Cybersecurity.
          </span>{' '}
          This portfolio showcases my projects, achievements, and the technologies I work with.
        </p>
      </div>
    </section>
  );
}