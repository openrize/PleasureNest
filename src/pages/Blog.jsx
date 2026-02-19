import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        { id: 1, title: 'Top 10 Adult Toys for Couples in 2026', date: 'Feb 15, 2026', excerpt: 'Discover the trending toys that are bringing partners closer together this year.' },
        { id: 2, title: 'How to Choose Your First Vibrator', date: 'Feb 12, 2026', excerpt: 'A beginner\'s guide to navigating the world of vibes, from bullets to wands.' },
        { id: 3, title: 'Benefits of Using Adult Toys for Wellness', date: 'Feb 10, 2026', excerpt: 'It\'s not just about fun—it\'s about health, stress relief, and self-care.' },
        { id: 4, title: 'Discreet Packaging: What You Need to Know', date: 'Feb 08, 2026', excerpt: 'We explain our shipping process to ensure your complete privacy.' },
        { id: 5, title: 'Exploring BDSM Safely: Beginner Tips', date: 'Feb 05, 2026', excerpt: 'SSC (Safe, Sane, Consensual) principles and how to start your journey.' },
        { id: 6, title: 'How Adult Toys Can Improve Intimacy', date: 'Feb 03, 2026', excerpt: 'Breaking down the stigma and enhancing connection with your partner.' },
    ];

    return (
        <section className="section" style={{ paddingTop: '120px' }}>
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '60px' }}>The PleasureNest Blog</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '40px' }}>
                    {posts.map(post => (
                        <article key={post.id} style={{ backgroundColor: 'var(--bg-secondary)', borderRadius: '4px', overflow: 'hidden', transition: 'transform 0.3s ease' }}>
                            <div style={{ height: '200px', background: 'linear-gradient(45deg, #2d1b2e, #1a0b14)' }}></div>
                            <div style={{ padding: '25px' }}>
                                <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', marginBottom: '10px', display: 'block' }}>{post.date}</span>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '15px', lineHeight: '1.4' }}>{post.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '20px' }}>{post.excerpt}</p>
                                <Link to="#" style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '0.9rem', borderBottom: '1px solid var(--accent-color)' }}>Read More</Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
