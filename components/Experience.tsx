export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 max-w-5xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text inline-flex items-center gap-3 justify-center">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m2.298 0a48.08 48.08 0 013.255-.038m-3.255-.038a48.123 48.123 0 00-3.058.1 5.25 5.25 0 00-.197 0m6.51-.062a48.079 48.079 0 013.203.138m-3.203-.138a5.235 5.235 0 00-.197 0m5.25 6.92v-4.25m0 0c0-.952.47-1.796 1.178-2.322a48.21 48.21 0 00.322-.178m-11.75 2.5a2.25 2.25 0 010 2.25M9 6.75a.75.75 0 010 1.5m-4.5 7.5v4.25c0 1.094.787 2.036 1.872 2.18A48.185 48.185 0 0012 21.75" />
        </svg>
        Experience & Achievements
      </h2>
      <div className="space-y-8">
        <div className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h3 className="text-xl font-bold text-white">
            UI/UX Designer Intern & Front End Developer Intern
          </h3>
          <p className="text-sm text-accent mt-1">
            Centralized Cloud Computing International Inc., BGC, Taguig (June–July 2025)
          </p>
          <p className="text-gray-400 mt-3">
            Delivered UI/UX designs 3× weekly using Figma & Adobe Photoshop, integrated
            backend-to-frontend, and converted Figma designs into responsive web applications.
          </p>
        </div>

        <div className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h3 className="text-xl font-bold text-white">
            1st Runner Up – 2025 Philippine Army Capture the Flag Cyber Security Competition
          </h3>
          <p className="text-gray-400 mt-3">
            Demonstrated advanced cybersecurity and problem-solving skills in a national CTF event.
          </p>
        </div>

        <div className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h3 className="text-xl font-bold text-white">
            2023 Champion – College-Based Programming Contest
          </h3>
          <p className="text-gray-400 mt-3">
            Won first place in a competitive programming competition among peers.
          </p>
        </div>

        <div className="bg-dark-card border border-dark-border rounded-xl p-6">
          <h3 className="text-xl font-bold text-white">BS Computer Science</h3>
          <p className="text-sm text-accent mt-1">Mindanao State University – Marawi City (2022–Present)</p>
        </div>
      </div>
    </section>
  );
}