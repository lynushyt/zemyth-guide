import React from 'react';
import './ProjectFlow.css';

export const ProjectFlow: React.FC = () => {
    const steps = [
        {
            title: "Define Your Venture",
            time: "15 minutes",
            content: (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <p>Complete the business overview including Market Size, Problem Statement, and Solution.</p>

                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '8px', borderLeft: '3px solid var(--brand-primary)' }}>
                        <strong style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.3rem' }}>1.1 Business Overview</strong>
                        <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            <li>Project Name & Description</li>
                            <li>Market Size (TAM)</li>
                            <li>Problem & Solution</li>
                        </ul>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '8px', borderLeft: '3px solid var(--brand-accent)' }}>
                        <strong style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.3rem' }}>1.2 Team Info</strong>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Founders, Key members, Advisors</span>
                    </div>

                    <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.8rem', borderRadius: '8px', borderLeft: '3px solid var(--brand-secondary)' }}>
                        <strong style={{ display: 'block', color: 'var(--text-main)', marginBottom: '0.3rem' }}>1.3 Business Model</strong>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Revenue streams, Pricing, GTM plan</span>
                    </div>
                </div>
            )
        },
        {
            title: "Set Milestones",
            time: "20 minutes",
            content: (
                <>
                    <p>Define 3-5 verifiable milestones. MUST be:</p>
                    <ul style={{ paddingLeft: '1.2rem', margin: '0.5rem 0', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        <li><strong>Specific</strong>: Clear deliverable</li>
                        <li><strong>Measurable</strong>: Quantifiable outcome</li>
                        <li><strong>Time-bound</strong>: Realistic deadline</li>
                        <li><strong>Verifiable</strong>: Can be proven</li>
                    </ul>
                    <p style={{ marginTop: '0.5rem', color: 'var(--brand-secondary)' }}>Example: MVP (30 days) - Working prototype + User walkthrough</p>
                </>
            )
        },
        {
            title: "Configure Funding",
            time: "10 minutes",
            content: (
                <>
                    <p>Set Min/Max goals ($10k - $1M). Setup investment tiers (Bronze to Diamond) and ownership multipliers.</p>
                    <div style={{ marginTop: '0.8rem', fontSize: '0.9rem', background: 'var(--bg-core)', padding: '0.8rem', borderRadius: '8px' }}>
                        <strong style={{ color: 'var(--brand-accent)' }}>3.3 Token Parameters:</strong>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.4rem', color: 'var(--text-muted)' }}>
                            <li>Token name & symbol</li>
                            <li>Total supply allocation</li>
                            <li>Backer distribution %</li>
                            <li>Team/Advisor allocation %</li>
                            <li>Protocol-controlled liquidity %</li>
                        </ul>
                    </div>
                </>
            )
        },
        {
            title: "Security & Compliance",
            time: "5 minutes",
            content: (
                <>
                    <p style={{ marginBottom: '0.8rem' }}>Required documentation:</p>
                    <ul style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.2rem', paddingLeft: '1.2rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>Token Utility</li>
                        <li>Exit/Refunds</li>
                    </ul>
                    <div style={{ marginTop: '1rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.8rem' }}>
                        <strong style={{ color: 'var(--text-highlight)', fontSize: '0.9rem' }}>Auto-Generated Smart Contract Features:</strong>
                        <ul style={{ paddingLeft: '1.2rem', marginTop: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                            <li>Progressive fund unlocking</li>
                            <li>Community voting mechanisms</li>
                            <li>Timeout protections (90 days inactivity)</li>
                            <li>Pivot procedures with backer consent</li>
                        </ul>
                    </div>
                </>
            )
        }
    ];

    return (
        <section style={{ padding: 'var(--space-xl) var(--space-md)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-lg)', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>🎯 Project Creation Flow</h2>

                <div className="project-flow-container">
                    {steps.map((step, index) => (
                        <div key={index} className="flow-step">
                            <div style={{
                                position: 'absolute', top: 0, right: 0,
                                padding: '4px 12px', background: 'var(--brand-primary)',
                                color: 'var(--text-inverse)', fontSize: '0.8rem', fontWeight: 'bold',
                                borderBottomLeftRadius: 'var(--radius-md)',
                                zIndex: 2
                            }}>
                                Step {index + 1}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', color: 'var(--brand-accent)' }}>{step.title}</h3>
                            <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: 'block', marginBottom: '1rem' }}>⏱ {step.time}</span>
                            <div style={{ fontSize: '0.95rem', color: 'var(--text-highlight)' }}>
                                {step.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
