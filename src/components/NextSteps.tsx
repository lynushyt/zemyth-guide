
export const NextSteps: React.FC = () => {
    return (
        <section style={{ padding: 'var(--space-xl) var(--space-md)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gap: 'var(--space-lg)', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

                    {/* Next Steps */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-md)', color: 'var(--brand-primary)' }}>🚀 Next Steps</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { title: "Immediate (Today)", items: ["Complete project setup", "Submit for moderation"] },
                                { title: "Launch Prep (Week 1)", items: ["Gather initial backers", "Create content strategy"] },
                                { title: "Post-Launch", items: ["Regular updates", "Submit milestone completions"] }
                            ].map((phase) => (
                                <div key={phase.title} style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: '8px' }}>
                                    <div style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{phase.title}</div>
                                    <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)' }}>
                                        {phase.items.map(item => <li key={item}>{item}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Success Tips */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-md)', color: 'var(--brand-accent)' }}>💡 Success Tips</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: '8px' }}>
                                <div style={{ fontWeight: 700, color: 'var(--text-highlight)' }}>Strong Proposals</div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Clear deliverables, experienced team, market validation.</p>
                            </div>
                            <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: '8px' }}>
                                <div style={{ fontWeight: 700, color: 'var(--text-highlight)' }}>Community Building</div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Share progress, respond fast, build relationships.</p>
                            </div>
                            <div style={{ background: 'var(--bg-card)', padding: '1rem', borderRadius: '8px' }}>
                                <div style={{ fontWeight: 700, color: 'var(--text-highlight)' }}>Milestone Success</div>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Under-promise, over-deliver, document everything.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
