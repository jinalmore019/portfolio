import React, { useEffect, useState } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Computer Engineering Student",
    "Full Stack Web Developer",
    "Problem Solver"
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => { clearInterval(ticker) };
  }, [text, isDeleting]);

  const tick = () => {
    let i = loopNum % roles.length;
    let fullText = roles[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setTypingSpeed(prev => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(2000); // Wait before deleting
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setTypingSpeed(150);
    }
  };

  return (
    <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px' }}>
      <div className="container" style={{ width: '100%' }}>
        <div className="animate-fade-in" style={{ maxWidth: '800px' }}>
          <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '1.2rem', marginBottom: '1rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
            ✨ Hello, I'm
          </p>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1rem', color: 'var(--text-main)', lineHeight: 1.1 }}>
            Jinal More
          </h1>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', height: '80px', marginBottom: '1.5rem', background: 'linear-gradient(90deg, #d946ef, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            {text}<span style={{ borderRight: '3px solid var(--primary)', paddingRight: '5px', animation: 'blink 1s infinite' }}></span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2.5rem', lineHeight: 1.8 }}>
            "Technology is best when it brings people together." <br/>
            Passionate about coding, learning new technologies and building useful software. Focused on building real-world projects and improving problem-solving skills.
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a href="/Jinal_More_Resume.html" target="_blank" className="btn-primary">
              View Resume <ArrowRight size={20} />
            </a>
            <a href="https://github.com/jinalmore019" target="_blank" rel="noreferrer" className="btn-outline">
              GitHub Profile <Download size={20} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Decorative Blob */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, var(--primary) 0%, transparent 70%)',
        opacity: 0.15,
        filter: 'blur(60px)',
        zIndex: -1,
        animation: 'float 6s ease-in-out infinite'
      }}></div>
    </section>
  );
};

export default Hero;
