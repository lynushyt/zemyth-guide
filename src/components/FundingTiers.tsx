
export const FundingTiers: React.FC = () => {
    const tiers = [
        { name: 'Bronze', min: '$100', mult: '1.0x', color: '#CD7F32' },
        { name: 'Silver', min: '$500', mult: '1.2x', color: '#C0C0C0' },
        { name: 'Gold', min: '$1,000', mult: '1.5x', color: '#FFD700' },
        { name: 'Platinum', min: '$5,000', mult: '2.0x', color: '#E5E4E2' },
        { name: 'Diamond', min: '$10,000', mult: '3.0x', color: '#B9F2FF' }, // Diamond blue
    ];

    return (
        <section style={{ padding: 'var(--space-xl) var(--space-md)', background: 'var(--bg-surface)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: 'var(--space-md)', textAlign: 'center' }}>💎 Investment Tiers</h2>
                <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: 'var(--space-lg)' }}>
                    Higher tiers grant increased ownership weight for the same investment amount.
                </p>

                <div style={{
                    display: 'grid',
                    gap: 'var(--space-sm)'
                }}>
                    {tiers.map((tier) => (
                        <div key={tier.name} style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: 'var(--space-md)',
                            background: 'var(--bg-core)',
                            borderRadius: '8px',
                            borderLeft: `4px solid ${tier.color}`
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <span style={{
                                    fontWeight: 700,
                                    fontSize: '1.2rem',
                                    color: tier.color,
                                    width: '100px'
                                }}>{tier.name}</span>
                                <span style={{ color: 'var(--text-muted)' }}>Min: <span style={{ color: 'var(--text-main)' }}>{tier.min}</span></span>
                            </div>
                            <div style={{
                                background: 'rgba(255,255,255,0.05)',
                                padding: '4px 12px',
                                borderRadius: '4px',
                                fontWeight: 600
                            }}>
                                {tier.mult} Ownership
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
