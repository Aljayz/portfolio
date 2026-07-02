import Image from 'next/image';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 gradient-text inline-flex items-center gap-3 justify-center">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
        Contact me via
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="https://www.instagram.com/the.aljayz/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-200 hover:opacity-80 cursor-pointer"
        >
          <Image
            src="https://img.shields.io/badge/Instagram-the.aljayz-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
            alt="Instagram"
            width={0}
            height={0}
            className="h-8 w-auto"
            unoptimized
          />
        </a>
        <a
          href="https://www.facebook.com/aljaytbit"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-200 hover:opacity-80 cursor-pointer"
        >
          <Image
            src="https://img.shields.io/badge/Facebook-aljaytbit-1877F2?style=for-the-badge&logo=facebook&logoColor=white"
            alt="Facebook"
            width={0}
            height={0}
            className="h-8 w-auto"
            unoptimized
          />
        </a>
        <a
          href="https://github.com/Aljayz"
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-200 hover:opacity-80 cursor-pointer"
        >
          <Image
            src="https://img.shields.io/badge/GitHub-Aljayz-181717?style=for-the-badge&logo=github&logoColor=white"
            alt="GitHub"
            width={0}
            height={0}
            className="h-8 w-auto"
            unoptimized
          />
        </a>
        <a
          href="mailto:albertjaybarrororoisque@gmail.com"
          className="transition duration-200 hover:opacity-80 cursor-pointer"
        >
          <Image
            src="https://img.shields.io/badge/Email-albertjaybarrororoisque%40gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white"
            alt="Email"
            width={0}
            height={0}
            className="h-8 w-auto"
            unoptimized
          />
        </a>
      </div>
    </section>
  );
}