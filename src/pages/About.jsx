const About = () => {
    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                <h1 style={{ marginTop: '100px' }}>About PleasureNest</h1>
                <p style={{ fontSize: '1.2rem', marginBottom: '40px', color: 'var(--text-secondary)' }}>Redefining Your Intimate Experience</p>

                <div style={{ textAlign: 'left', background: 'var(--bg-secondary)', padding: '40px', borderRadius: '4px' }}>
                    <h3>Our Mission</h3>
                    <p style={{ marginBottom: '20px' }}>PleasureNest is your online destination for premium adult toys. Our mission is to provide high-quality, safe, and discreet products that enhance intimacy, pleasure, and wellness. We believe exploring your desires should be fun, safe, and judgment-free.</p>

                    <h3>Why We Started</h3>
                    <p style={{ marginBottom: '20px' }}>We noticed a gap in the market for a truly premium, inclusive, and educational shopping experience. We wanted to create a space that feels less like a typical shop and more like a curated boutique for your wellness journey.</p>

                    <h3>Our Promise</h3>
                    <p>Every product in our collection is hand-picked for quality and safety. We promise absolute discretion in shipping and billing, because your privacy is our priority.</p>
                </div>
            </div>
        </section>
    );
};

export default About;
