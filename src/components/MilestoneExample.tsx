
export const MilestoneExample: React.FC = () => {
    return (
        <section style={{ padding: 'var(--space-xl) var(--space-md)', background: 'var(--bg-surface)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)', textAlign: 'center' }}>📊 Demo Project Example</h2>
                <p style={{ textAlign: 'center', marginBottom: 'var(--space-lg)', color: 'var(--text-muted)' }}>
                    Project: <strong style={{ color: 'var(--text-main)' }}>DeFi Analytics Dashboard</strong> • Goal: <strong style={{ color: 'var(--text-main)' }}>$100,000</strong>
                </p>

                <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                    {/* Vertical line */}
                    <div style={{
                        position: 'absolute', left: '7px', top: '20px', bottom: '20px',
                        width: '2px', background: 'var(--border-highlight)'
                    }} />

                    {[
                        { title: "Week 4", name: "Core Dashboard", amt: "$30K" },
                        { title: "Week 8", name: "15 Protocols + App", amt: "$25K" },
                        { title: "Week 12", name: "Premium + 1k Users", amt: "$25K" },
                        { title: "Week 16", name: "Revenue: $5K MRR", amt: "$20K" }
                    ].map((ms, i) => (
                        <div key={i} style={{
                            marginBottom: 'var(--space-md)',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute', left: '-2.45rem', top: '6px',
                                width: '16px', height: '16px', borderRadius: '50%',
                                background: i === 3 ? 'var(--brand-accent)' : 'var(--brand-primary)',
                                border: '4px solid var(--bg-surface)'
                            }} />
                            <div style={{
                                background: 'var(--bg-core)',
                                padding: 'var(--space-md)',
                                borderRadius: '12px',
                                border: '1px solid var(--border-subtle)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '1rem'
                            }}>
                                <div>
                                    <div style={{ fontSize: '0.9rem', color: 'var(--brand-primary)', fontWeight: 600 }}>{ms.title}</div>
                                    <div style={{ fontSize: '1.2rem', fontWeight: 700 }}>{ms.name}</div>
                                </div>
                                <div style={{
                                    display: 'flex', alignItems: 'center',
                                    fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-highlight)'
                                }}>
                                    {ms.amt}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
