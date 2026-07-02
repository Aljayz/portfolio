/* eslint-disable @next/next/no-img-element */
export default function Contact() {
  const contacts = [
    { name: 'GitHub', icon: 'github', url: 'https://github.com/Aljayz' },
    { name: 'Instagram', icon: 'instagram', url: 'https://www.instagram.com/the.aljayz/' },
    { name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/aljaytbit' },
    { name: 'Email', icon: 'gmail', url: 'mailto:albertjaybarrororoisque@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20 px-4 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 gradient-text inline-flex items-center gap-3 justify-center">
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
        Contact me via
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {contacts.map(({ name, icon, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-dark-card border border-dark-border rounded-xl p-6 flex flex-col items-center gap-3 hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all duration-200 group cursor-pointer w-40"
          >
            <div className="h-14 w-14 rounded-xl bg-white/[7%] flex items-center justify-center shrink-0 shadow-[inset_0_0_8px_rgba(124,58,237,0.15),0_0_12px_rgba(124,58,237,0.25)] group-hover:shadow-[inset_0_0_12px_rgba(124,58,237,0.25),0_0_20px_rgba(124,58,237,0.4)] transition-shadow duration-200">
              <img
                src={`https://cdn.simpleicons.org/${icon}/ffffff`}
                alt={name}
                className="h-9 w-9 object-contain drop-shadow-[0_0_4px_rgba(124,58,237,0.4)] group-hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.6)] transition-all duration-200"
              />
            </div>
            <span className="text-xs text-gray-400 group-hover:text-gray-200 transition-colors duration-200 text-center leading-tight">
              {name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
