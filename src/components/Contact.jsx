const Contact = () => {
  const contactItems = [
    {
      label: '+91-93928 20034',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: 'srinathguna12@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: 'Hyderabad, Telangana, India',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-accent font-mono text-sm tracking-widest uppercase mb-3 fade-in">What's Next?</p>
        <h2 className="font-bold mb-6 fade-in delay-100"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', letterSpacing: '-0.02em' }}>
          Get In Touch
        </h2>
        <p className="text-muted leading-relaxed mb-10 fade-in delay-200">
          Whether you have a question, a project in mind, or just want to say hi,
          my inbox is always open. I'll try my best to get back to you!
        </p>

        {/* Contact details */}
        <div className="flex flex-col items-center gap-4 mb-10 fade-in delay-300">
          {contactItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3 text-muted">
              <span className="text-accent">{item.icon}</span>
              <span className="text-sm">{item.label}</span>
            </div>
          ))}
        </div>

        <a href="mailto:srinathguna12@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-base
                     bg-blue-500 text-white shadow-xl shadow-blue-500/30
                     hover:bg-blue-400 hover:shadow-blue-400/40 hover:-translate-y-1
                     transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400/60 fade-in delay-300">
          Say Hello!
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t theme-border pt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <a href="https://linkedin.com/in/gajji-srinath" target="_blank" rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-accent transition-colors duration-200 hover:-translate-y-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
          <p className="text-muted text-sm">
            Designed & Built by <span className="text-gradient font-semibold">Gajji Srinath</span>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
