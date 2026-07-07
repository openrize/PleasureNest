import { useState } from 'react';
import { motion } from 'framer-motion';
import { trackNewsletter } from '../utils/analytics';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        trackNewsletter(email.trim());
        setSubmitted(true);
        setEmail('');
    };

    return (
        <section className="section newsletter-section">
            <div className="container">
                <motion.div
                    className="newsletter-card"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="newsletter-content">
                        <div className="section-eyebrow">Stay Connected</div>
                        <h2 className="section-title" style={{ marginBottom: '12px' }}>
                            Wellness Insights, Delivered
                        </h2>
                        <p className="section-sub" style={{ margin: '0 auto' }}>
                            Receive thoughtful guides on intimacy, self-care, and relationship wellness — no spam, ever.
                        </p>
                    </div>
                    {submitted ? (
                        <p className="newsletter-success">
                            <i className="fa fa-check-circle" /> Thank you for subscribing.
                        </p>
                    ) : (
                        <form className="newsletter-form" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                aria-label="Email address"
                            />
                            <button type="submit" className="btn btn-primary">
                                Subscribe
                            </button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;
