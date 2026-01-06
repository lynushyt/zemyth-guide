
export const Protections: React.FC = () => {
    const protectionGroups = [
        {
            title: "For Founders",
            icon: "👨‍💻",
            features: ["No equity dilution", "Flexible pivots", "Fair voting", "Graduated unlocking"]
        },
        {
            title: "For Backers",
            icon: "🛡️",
            features: ["Progressive unlocking", "NFT ownership", "Voting rights", "Abandonment protection"]
        },
        {
            title: "For Platform",
            icon: "⚖️",
            features: ["Protocol-controlled tokens", "Verified milestones", "Transparent metrics", "Sustainable incentives"]
        }
    ];

    return (
        <section style={{ padding: 'var(--space-xl) var(--space-md)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-lg)', textAlign: 'center' }}>🛡️ Built-in Protections</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-md)' }}>
                    {protectionGroups.map((group) => (
                        <div key={group.title} style={{
                            background: 'var(--bg-card)',
                            padding: 'var(--space-lg)',
                            borderRadius: '24px',
                            border: '1px solid var(--border-subtle)',
                            textAlign: 'center'
                        }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{group.icon}</div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-md)', color: 'var(--text-highlight)' }}>{group.title}</h3>
                            <ul style={{ listStyle: 'none', textAlign: 'left', display: 'inline-block' }}>
                                {group.features.map((feat) => (
                                    <li key={feat} style={{
                                        marginBottom: '0.5rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.5rem',
                                        color: 'var(--text-muted)'
                                    }}>
                                        <span style={{ color: 'var(--brand-accent)' }}>✓</span> {feat}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
