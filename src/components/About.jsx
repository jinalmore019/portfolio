import React from 'react';
import { BookOpen, Code, Terminal, Server, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Full Stack Web Development', icon: <Globe className="text-primary" /> },
    { name: 'Data Structures & Algorithms', icon: <Code className="text-primary" /> },
    { name: 'Computer Networks', icon: <Server className="text-primary" /> },
    { name: 'React & Spring Boot', icon: <Terminal className="text-primary" /> }
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Engineering',
      institution: 'Dharmsinh Desai University (DDU), Nadiad',
      year: '2025 – 2028',
      desc: 'Pursuing advanced studies in Computer Engineering with focus on software development and problem solving.'
    },
    {
      degree: 'Diploma in Information Technology',
      institution: 'The Maharaja Sayajirao University of Baroda (MSU)',
      year: '2021 – 2025',
      desc: 'Completed foundational studies in IT, engaging in real-world projects and technical events.'
    }
  ];

  return (
    <section id="about" style={{ position: 'relative' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', width: '100%' }}>About Me</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
          
          {/* Education Timeline */}
          <div className="glass-panel">
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <BookOpen size={32} color="var(--primary)" />
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)' }}>Education</h3>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', borderLeft: '2px solid var(--glass-border)', paddingLeft: '1.5rem', marginLeft: '1rem' }}>
              {education.map((edu, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  <div style={{ 
                    position: 'absolute', 
                    left: '-2rem', 
                    top: '0.2rem',
                    width: '1rem', 
                    height: '1rem', 
                    background: 'var(--primary)', 
                    borderRadius: '50%',
                    boxShadow: '0 0 10px var(--primary)'
                  }}></div>
                  <h4 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '0.3rem' }}>{edu.degree}</h4>
                  <p style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem' }}>{edu.institution}</p>
                  <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.8rem', borderRadius: '20px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>{edu.year}</span>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{edu.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="glass-panel">
            <h3 style={{ fontSize: '1.8rem', color: 'var(--text-main)', marginBottom: '2rem' }}>Core Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {skills.map((skill, idx) => (
                <div key={idx} style={{ 
                  background: 'rgba(217, 70, 239, 0.05)', 
                  border: '1px solid rgba(217, 70, 239, 0.2)',
                  padding: '1rem', 
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  flex: '1 1 calc(50% - 1rem)',
                  minWidth: '200px',
                  transition: 'var(--transition)',
                  cursor: 'default'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.background = 'rgba(217, 70, 239, 0.1)';
                  e.currentTarget.style.boxShadow = '0 5px 15px rgba(217, 70, 239, 0.2)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(217, 70, 239, 0.05)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                >
                  <div style={{ color: 'var(--primary)' }}>
                    {skill.icon}
                  </div>
                  <span style={{ fontWeight: 500, color: 'var(--text-main)' }}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      {/* Decorative Blob */}
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, var(--secondary) 0%, transparent 70%)',
        opacity: 0.15,
        filter: 'blur(50px)',
        zIndex: -1,
        animation: 'float 8s ease-in-out infinite reverse'
      }}></div>
    </section>
  );
};

export default About;
