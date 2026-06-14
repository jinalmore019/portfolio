import React from 'react';
import { ExternalLink, Code, Layers, Leaf, Library } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Enterprise Library System',
      tagline: 'Placement-Ready Library Management Web App',
      description: 'A professional, enterprise-grade library management application built with Spring Boot and React. Features include automated overdue fine calculations, due date tracking, premium card-based grids with image support, CSV data reporting, and secure, database-backed authentication with registration and password recovery.',
      icon: <Library size={40} color="var(--primary)" />,
      tech: ['React', 'Spring Boot', 'Java', 'MySQL', 'CSS'],
      github: 'https://github.com/jinalmore019/Library-Management-System',
      demo: '#'
    },
    {
      title: 'NutriTrack',
      tagline: 'Personalized Fitness & Diet Assistant',
      description: 'NutriTrack is designed to assist users in achieving their fitness goals by offering personalized diet plans, calorie tracking, and real-time reminders. It includes features such as BMI calculators, progress tracking, and notifications to keep users informed and motivated.',
      icon: <Layers size={40} color="var(--accent)" />,
      tech: ['HealthTech', 'Web App', 'UI/UX'],
      github: 'https://github.com/jinalmore019/NUTRI_TRACK',
      demo: '#'
    },
    {
      title: 'EcoFeed',
      tagline: 'Rescue Food, Reduce Waste',
      description: 'A platform that efficiently redistributes surplus edible food by connecting donors, NGOs, and volunteers. Also includes a module to convert inedible food into slurry (fertilizer) through biogas plants to be distributed to local farmers, promoting sustainability and zero waste.',
      icon: <Leaf size={40} color="var(--primary)" />,
      tech: ['Full Stack', 'Real-time Coordination', 'Web App'],
      github: 'https://github.com/jinalmore019',
      demo: 'https://devfolio.co/@jinal19'
    },
    {
      title: 'MindHaven',
      tagline: 'Mental Health & Wellbeing Platform',
      description: 'A comprehensive platform dedicated to mental health and wellbeing. MindHaven provides a safe space for users to explore resources, track their mental health journey, and find support. Designed with a focus on user experience and accessibility.',
      icon: <Code size={40} color="var(--accent)" />,
      tech: ['Web Development', 'Frontend', 'Backend'],
      github: 'https://github.com/jinalmore019/MindHaven-',
      demo: '#'
    }
  ];

  return (
    <section id="projects" style={{ position: 'relative' }}>
      <div className="container">
        <h2 style={{ textAlign: 'center', width: '100%', marginBottom: '4rem' }}>Featured Projects</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {projects.map((project, idx) => (
            <div key={idx} className="glass-panel" style={{ 
              display: 'flex', 
              flexDirection: idx % 2 === 0 ? 'row' : 'row-reverse',
              gap: '2rem',
              alignItems: 'center',
              padding: '2.5rem',
              position: 'relative',
              overflow: 'hidden'
            }}>
              
              {/* Subtle background icon */}
              <div style={{ 
                position: 'absolute', 
                right: idx % 2 === 0 ? '-20px' : 'auto', 
                left: idx % 2 !== 0 ? '-20px' : 'auto', 
                opacity: 0.05, 
                transform: 'scale(8)',
                pointerEvents: 'none'
              }}>
                {project.icon}
              </div>

              <div style={{ flex: 1, zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  {project.icon}
                  <h3 style={{ fontSize: '2rem', color: 'var(--text-main)' }}>{project.title}</h3>
                </div>
                
                <h4 style={{ color: 'var(--accent)', fontSize: '1.2rem', marginBottom: '1.5rem', fontWeight: 500 }}>{project.tagline}</h4>
                
                <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                  {project.description}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2.5rem' }}>
                  {project.tech.map((tech, i) => (
                    <span key={i} style={{ 
                      background: 'rgba(255,255,255,0.05)', 
                      border: '1px solid var(--glass-border)',
                      padding: '0.4rem 1rem', 
                      borderRadius: '20px', 
                      fontSize: '0.9rem', 
                      color: 'var(--text-muted)' 
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <a href={project.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, transition: 'var(--transition)' }}
                     onMouseOver={(e) => e.currentTarget.style.color = 'var(--primary)'}
                     onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-main)'}>
                    <Code size={20} /> View Source
                  </a>
                  {project.demo !== '#' && (
                    <a href={project.demo} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, transition: 'var(--transition)' }}
                       onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'}
                       onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-main)'}>
                      <ExternalLink size={20} /> Live Demo
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
