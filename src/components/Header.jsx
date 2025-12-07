import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Research', href: '/research' },
        { name: 'Teaching', href: '/teaching' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <header
            style={{
                backgroundColor: 'var(--color-surface)',
                padding: '1rem 0',
                marginBottom: '2rem',
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <nav>
                    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0, fontFamily: '"Fira Sans", sans-serif' }}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.href}
                                    style={{
                                        color: 'var(--color-accent)',
                                        fontWeight: 'normal',
                                        fontSize: '1rem',
                                        textDecoration: 'none'
                                    }}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
