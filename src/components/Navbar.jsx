import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      transition: 'all 0.3s ease',
      padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
      background: scrolled ? 'rgba(15, 12, 41, 0.8)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#home" style={{ 
          fontSize: '1.5rem', 
          fontWeight: 800, 
          color: 'var(--text-main)', 
          textDecoration: 'none',
          letterSpacing: '1px'
        }}>
          JM<span style={{ color: 'var(--primary)' }}>.</span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', gap: '2rem' }} className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} style={{
              color: 'var(--text-muted)',
              textDecoration: 'none',
              fontWeight: 500,
              transition: 'var(--transition)',
            }}
            onMouseOver={(e) => e.target.style.color = 'var(--primary)'}
            onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="nav-mobile-toggle" style={{ display: 'none', cursor: 'pointer' }} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X color="var(--text-main)" /> : <Menu color="var(--text-main)" />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          width: '100%',
          background: 'rgba(15, 12, 41, 0.95)',
          backdropFilter: 'blur(10px)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1.5rem',
          borderBottom: '1px solid rgba(255,255,255,0.1)'
        }}>
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} 
               onClick={() => setMenuOpen(false)}
               style={{
                 color: 'var(--text-main)',
                 textDecoration: 'none',
                 fontWeight: 600,
                 fontSize: '1.2rem'
               }}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
