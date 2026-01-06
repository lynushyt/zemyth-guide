
export const Footer: React.FC = () => {
    return (
        <footer style={{
            padding: 'var(--space-xl) var(--space-md)',
            textAlign: 'center',
            borderTop: '1px solid var(--border-subtle)',
            background: 'var(--bg-core)',
            marginTop: 'var(--space-xl)'
        }}>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: 'var(--space-md)' }}>🚀 Ready to build the future?</h3>
                <p style={{ marginBottom: 'var(--space-lg)', color: 'var(--text-muted)' }}>
                    Start creating your project today.
                </p>

                <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
                    <button style={{
                        padding: '12px 24px',
                        borderRadius: '8px',
                        background: 'var(--brand-primary)',
                        color: 'white', border: 'none', fontWeight: 600, fontSize: '1rem'
                    }}>Launch App</button>
                    <button style={{
                        padding: '12px 24px',
                        borderRadius: '8px',
                        background: 'transparent',
                        color: 'var(--text-main)', border: '1px solid var(--border-highlight)', fontWeight: 600, fontSize: '1rem'
                    }}>Read Docs</button>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                    ZEMYTH: Build real. Own real. Profit real.
                </p>
            </div>
        </footer>
    );
};
