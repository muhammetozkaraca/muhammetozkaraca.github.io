import React from 'react';
import Section from '../components/Section';

const Teaching = () => {
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <h1 style={{ marginBottom: '2rem' }}>Teaching</h1>

            <Section id="teaching" title="Teaching Activities">
                <div className="timeline-container">
                    <div className="teaching-item">
                        <div className="teaching-term">Spring 2026<br />Fall 2025</div>
                        <div>
                            <h3>POLI 150: International Relations and Global Politics</h3>
                            <p>Teaching Assistant. Led recitation sessions on different topics of International Politics.</p>
                            <p style={{ marginTop: '0.5rem' }}>
                                <a href="/slides/week2_slides.pdf" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-accent)', textDecoration: 'none', borderBottom: '1px dotted' }}>Sample Slides</a>
                            </p>
                        </div>
                    </div>
                    <div className="teaching-item">
                        <div className="teaching-term">Summer 2025</div>
                        <div>
                            <h3>Summer PhD Math Camp</h3>
                            <p>Teaching Assistant for the summer math boot camp for incoming Political Science Ph.D. students.</p>
                        </div>
                    </div>
                    <div className="teaching-item">
                        <div className="teaching-term">Spring 2025</div>
                        <div>
                            <h3>POLI 150: International Relations and Global Politics</h3>
                            <p>Grader</p>
                        </div>
                    </div>
                    <div className="teaching-item">
                        <div className="teaching-term">Fall 2024</div>
                        <div>
                            <h3>POLI/PWAD 444: Terrorism and International Peace</h3>
                            <p>Grader</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Teaching;
