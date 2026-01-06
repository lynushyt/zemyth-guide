import React from 'react';

export const Resources: React.FC = () => {
    return (
        <section style={{
            padding: 'var(--space-xl) var(--space-md)',
            background: 'var(--bg-core)'
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-lg)', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>🔗 Resources</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-lg)' }}>

                    {/* Platform Links */}
                    <div style={{ background: 'var(--bg-card)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--brand-primary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Platform Links</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li>
                                <a href="https://zemyth.app/raise" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--text-main)', textDecoration: 'none' }}>
                                    📊 Project Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="https://docs.zemyth.app" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--text-main)', textDecoration: 'none' }}>
                                    📚 Documentation
                                </a>
                            </li>
                            <li>
                                <a href="https://discord.gg/zemyth" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.1rem', color: 'var(--text-main)', textDecoration: 'none' }}>
                                    💬 Community Discord
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support Channels */}
                    <div style={{ background: 'var(--bg-card)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--brand-accent)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Support Channels</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-muted)' }}>
                            <li style={{ display: 'flex', gap: '0.5rem' }}>
                                <span>👾</span> <strong>Founder Discord:</strong> #founder-support
                            </li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}>
                                <span>📧</span> <strong>Email:</strong> <a href="mailto:founders@zemyth.app" style={{ color: 'var(--brand-primary)' }}>founders@zemyth.app</a>
                            </li>
                            <li style={{ display: 'flex', gap: '0.5rem' }}>
                                <span>🕒</span> <strong>Office Hours:</strong> Tuesdays 2-4 PM EST
                            </li>
                        </ul>
                    </div>

                    {/* Additional Guides */}
                    <div style={{ background: 'var(--bg-card)', padding: 'var(--space-md)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--brand-secondary)', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>Additional Guides</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                            <li><a href="https://docs.zemyth.app/raise/examples" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Complete Lifecycle Example</a></li>
                            <li><a href="https://docs.zemyth.app/raise/milestones" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Milestone Best Practices</a></li>
                            <li><a href="https://docs.zemyth.app/raise/community" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>Community Building Guide</a></li>
                        </ul>
                    </div>

                </div>

            </div>
        </section>
    );
};
