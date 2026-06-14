import React from 'react';
import { Mail, Globe, User, Code2 } from 'lucide-react';

const Contact = () => {
  const socials = [
    {
      name: 'GitHub',
      icon: <Code2 size={24} />,
      link: 'https://github.com/jinalmore019',
      color: '#ffffff'
    },
    {
      name: 'LinkedIn',
      icon: <User size={24} />,
      link: 'https://www.linkedin.com/in/jinal-more-b5a040363/',
      color: '#0A66C2'
    },
    {
      name: 'Devfolio',
      icon: <Globe size={24} />,
      link: 'https://devfolio.co/@jinal19',
      color: '#3770FF'
    }
  ];

  return (
    <section id="contact" style={{ minHeight: '60vh', paddingBottom: '2rem' }}>
      <div className="container">
        <div className="glass-panel" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 style={{ marginBottom: '1rem' }}>Let's Connect</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
            I am currently open to new opportunities, internships, and placements. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a href="mailto:jinallmore619@gmail.com" className="btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.2rem', marginBottom: '4rem' }}>
            <Mail size={24} /> Say Hello
          </a>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            {socials.map((social, idx) => (
              <a key={idx} href={social.link} target="_blank" rel="noreferrer" 
                 style={{ 
                   display: 'flex', 
                   flexDirection: 'column', 
                   alignItems: 'center', 
                   gap: '0.8rem',
                   color: 'var(--text-muted)',
                   textDecoration: 'none',
                   transition: 'var(--transition)'
                 }}
                 onMouseOver={(e) => {
                   e.currentTarget.style.color = social.color;
                   e.currentTarget.style.transform = 'translateY(-5px)';
                 }}
                 onMouseOut={(e) => {
                   e.currentTarget.style.color = 'var(--text-muted)';
                   e.currentTarget.style.transform = 'translateY(0)';
                 }}
              >
                <div style={{ 
                  background: 'rgba(255,255,255,0.05)', 
                  padding: '1rem', 
                  borderRadius: '50%',
                  border: '1px solid var(--glass-border)'
                }}>
                  {social.icon}
                </div>
                <span style={{ fontWeight: 500 }}>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <footer style={{ textAlign: 'center', marginTop: '4rem', color: 'rgba(255,255,255,0.3)', fontSize: '0.9rem' }}>
          <p>Designed & Built by Jinal More &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
