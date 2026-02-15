
import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

const Home = () => {
    return (
        <section id="home" className="hero-section" style={{ padding: '4rem 0', borderBottom: 'none' }}>
            <div className="container home-grid">

                {/* Left Column: Photo, Name, Links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center', textAlign: 'center' }}>
                    {/* Profile Photo */}
                    <img
                        src="/profile.jpg"
                        alt="Muhammet Özkaraca"
                        style={{
                            width: '200px',
                            height: '200px',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            mixBlendMode: 'multiply' // Blends the white background with the page
                        }}
                    />

                    <div>
                        <h1 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', lineHeight: '1.2', fontFamily: '"Fira Sans", sans-serif', color: '#586e75' }}>Muhammet Özkaraca</h1>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
                            {/* Navigation Links */}
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', fontSize: '1rem', alignItems: 'center', fontFamily: '"Fira Sans", sans-serif' }}>
                                <Link to="/" style={{ color: '#54927d', textDecoration: 'none' }}>Home</Link>
                                <span>·</span>
                                <Link to="/research" style={{ color: '#54927d', textDecoration: 'none' }}>Research</Link>
                                <span>·</span>
                                <Link to="/teaching" style={{ color: '#54927d', textDecoration: 'none' }}>Teaching</Link>
                            </div>

                            {/* Social Links */}
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem', fontSize: '1.2rem' }}>
                                <a href="https://www.linkedin.com/in/muhammet-ozkaraca/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ color: 'var(--color-accent)' }}><FaLinkedin /></a>
                                <a href="#" aria-label="Google Scholar" style={{ color: 'var(--color-accent)' }}><SiGooglescholar /></a>
                                <a href="https://github.com/muhammetozkaraca" target="_blank" rel="noopener noreferrer" aria-label="GitHub" style={{ color: 'var(--color-accent)' }}><FaGithub /></a>
                                <a href="https://x.com/muhammetozkrca" target="_blank" rel="noopener noreferrer" aria-label="Twitter" style={{ color: 'var(--color-accent)' }}><FaTwitter /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Bio */}
                <div style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        I am a Political Science Ph.D. student at the University of North Carolina at Chapel Hill. I work on international relations, comparative politics, and political methodology.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        I previously received my master’s degree in Political Science from the Central European University and I completed my B.A. in International Relations at the Bilkent University. Before starting my graduate studies at the UNC, I worked as a project assistant at the International Centre for Migration Policy Development for two years.
                    </p>
                    <p>
                        <a href="/CV.pdf" target="_blank" rel="noopener noreferrer" style={{ fontWeight: 'bold' }}>You can find my CV here.</a>
                    </p>
                    <p style={{ marginTop: '1.5rem' }}>
                        You can reach me at <a href="mailto:ozkaraca@unc.edu" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9em', color: 'var(--color-accent)', textDecoration: 'none' }}>ozkaraca@unc.edu</a>.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Home;
