import React, { useState } from 'react';
import Section from '../components/Section';

const ResearchCard = ({ title, coauthors, description, materials }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="card" style={{ cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
            <h3
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: isOpen ? undefined : '0',
                }}
            >
                <span>
                    {title}
                    {coauthors && <><br /><span style={{ fontSize: '0.9rem', fontWeight: 'normal', color: 'var(--color-text-light)' }}>{coauthors}</span></>}
                </span>
                <span style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-text-light)',
                    transition: 'transform 0.2s ease',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>
                    ▼
                </span>
            </h3>

            {isOpen && (
                <div style={{ marginTop: '0.75rem' }}>
                    {description && <p>{description}</p>}

                    {materials && materials.length > 0 && (
                        <div style={{
                            marginTop: '1rem',
                            padding: '0.75rem 1rem',
                            backgroundColor: 'var(--color-base2)',
                            border: '1px solid var(--color-border)',
                            borderRadius: '4px',
                        }}>
                            <p style={{ fontSize: '0.8rem', fontFamily: '"Fira Sans", sans-serif', fontWeight: '600', color: 'var(--color-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                Materials
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {materials.map((item, i) => (
                                    <a
                                        key={i}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={e => e.stopPropagation()}
                                        style={{
                                            display: 'inline-block',
                                            padding: '0.35rem 0.75rem',
                                            fontSize: '0.85rem',
                                            fontFamily: '"Fira Sans", sans-serif',
                                            color: 'var(--color-accent)',
                                            border: '1px solid var(--color-accent)',
                                            borderRadius: '3px',
                                            textDecoration: 'none',
                                            transition: 'background-color 0.2s ease',
                                        }}
                                        onMouseEnter={e => { e.target.style.backgroundColor = 'rgba(42, 161, 152, 0.1)'; }}
                                        onMouseLeave={e => { e.target.style.backgroundColor = 'transparent'; }}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const Research = () => {
    const projects = [
        {
            title: 'Blaming the Ref: Strategic Responses to Critical Election Reports',
            coauthors: 'Co-author with Tyler Pratt',
            description: 'Governments accused of electoral misconduct often push back against the credibility of election observation missions. When do these efforts succeed in improving perceptions of election quality? This project investigates the strategies governments use to contest EOM findings and their effectiveness in shaping views of electoral integrity.',
            materials: [
                { label: 'Registered Pre-Analysis Plan', url: 'https://osf.io/qb8wy/files/rq6we' },
            ],
        },
        {
            title: 'Sovereign Lending Dynamics',
            description: 'States seek financial resources for multiple purposes. To that end, they can borrow from multiple creditors using different instruments. In this project, I focus on official bilateral lending and analyze from which states other states obtain official sovereign credit the most, as well as whether and why certain creditors are willing to extend such resources more than others.',
            materials: [],
        },
        {
            title: 'The Institutional Firewall: Secularism and Religious Terrorism',
            description: 'This study examines whether secular institutional frameworks can reduce the prevalence and lethality of religious terrorist organizations. The findings show that secular states are less likely to host such organizations and that these groups, when present, tend to be less lethal.',
            materials: [],
        },
    ];

    return (
        <div className="container" style={{ padding: '2rem 0' }}>
            <h1 style={{ marginBottom: '2rem' }}>Research</h1>

            <Section id="current-research" title="Current Research">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {projects.map((project, i) => (
                        <ResearchCard key={i} {...project} />
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Research;
