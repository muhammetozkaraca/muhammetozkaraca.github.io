import React from 'react';
import Section from '../components/Section';

const Research = () => {
    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <h1 style={{ marginBottom: '2rem' }}>Research</h1>



            {/* Current Research */}
            <Section id="current-research" title="Current Research">
                <div className="grid-3">
                    <div className="card">
                        <h3>Perception of Election Integrity</h3>
                        <p>
                            Governments accused of electoral misconduct often push back against the credibility of election observation missions. When do these efforts succeed in improving perceptions of election quality? This project investigates the strategies governments use to contest EOM findings and their effectiveness in shaping views of electoral integrity
                        </p>
                    </div>
                    <div className="card">
                        <h3>Sovereign Lending</h3>
                        <p>
                            {/* Description pending */}
                        </p>
                    </div>
                </div>
            </Section>

            {/* Research Portfolio */}

        </div>
    );
};

export default Research;
