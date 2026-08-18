import Image from 'next/image';
import profilePic from '@/public/profile.jpg';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 px-4"
    >
      {/* Background decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-dark to-dark" />
      <div className="relative z-10 text-center max-w-3xl">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/30">
            <Image
                src={profilePic}
                alt="Aljayz profile picture"
                placeholder="blur"
                sizes="(max-width: 768px) 160px, 192px"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Hi, I&apos;m{' '}
          <span className="gradient-text">Aljayz</span>
        </h1>
        <p className="text-lg text-gray-400 mb-2">Albert Jay B. Rosique</p>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Software Engineer specializing in High-Performance Systems, Web
          Applications, and AI Solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary hover:bg-primary-dark rounded-full text-white font-semibold transition duration-200 shadow-lg shadow-primary/30 cursor-pointer"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary/50 hover:border-primary text-gray-200 hover:text-white rounded-full transition duration-200 cursor-pointer"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}