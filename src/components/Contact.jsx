import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container contact-container">
        <p className="contact-pretitle text-gradient animate-fade-in">What's Next?</p>
        <h2 className="heading-xl contact-title animate-fade-in delay-100">Get In Touch</h2>
        
        <p className="contact-description text-muted animate-fade-in delay-200">
          Whether you have a question, a project in mind, or just want to say hi, 
          my inbox is always open. I'll try my best to get back to you!
        </p>
        
        <div className="contact-info animate-fade-in delay-300">
          <p className="text-muted" style={{ marginBottom: '1rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            +91-93928 20034
          </p>
          <p className="text-muted" style={{ marginBottom: '1rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            srinathguna12@gmail.com
          </p>
          <p className="text-muted" style={{ marginBottom: '2rem' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ verticalAlign: 'middle', marginRight: '8px' }}>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            Hyderabad, Telangana, India
          </p>
        </div>

        <a href="mailto:srinathguna12@gmail.com" className="btn btn-primary contact-btn animate-fade-in delay-300">
          Say Hello
        </a>
      </div>
      
      <footer className="footer">
        <div className="social-links">
          <a href="https://linkedin.com/in/gajji-srinath" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
        </div>
        <p className="footer-text text-muted">
          Designed & Built by Gajji Srinath
        </p>
      </footer>
    </section>
  );
};

export default Contact;
