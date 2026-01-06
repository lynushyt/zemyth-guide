import React from 'react';
import './HeaderStyles.css';

export const Header: React.FC = () => {
    const features = [
        {
            icon: "📈",
            title: "Progressive Funding",
            desc: "Capital is released in stages only when verifiable milestones are met."
        },
        {
            icon: "💎",
            title: "NFT Ownership",
            desc: "Backers hold liquid, tradeable positions that represent their stake."
        },
        {
            icon: "🗳️",
            title: "On-Chain Voting",
            desc: "Community governance controls milestone approval and dispute resolution."
        },
        {
            icon: "🚀",
            title: "Fair Launch",
            desc: "Tokens are distributed tied to real business fundamentals and revenue."
        }
    ];

    return (
        <header className="hero-header">
            <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    marginBottom: 'var(--space-md)',
                    background: 'var(--gradient-text)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 800
                }}>
                    Welcome to Zemyth Raise
                </h1>
                <p style={{
                    fontSize: '1.25rem',
                    color: 'var(--text-muted)',
                    marginBottom: 'var(--space-lg)',
                    lineHeight: 1.6,
                    maxWidth: '800px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    Zemyth Raise is your gateway to decentralized venture funding. <br />
                    <span style={{ color: 'var(--text-main)' }}>Build real businesses, verify real progress, share real profits.</span>
                </p>

                <div className="hero-features">
                    {features.map((feature, i) => (
                        <div key={i} className="feature-card">
                            <div className="feature-icon">{feature.icon}</div>
                            <div className="feature-title">{feature.title}</div>
                            <div className="feature-desc">{feature.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </header>
    );
};
