import { useState } from 'react';
import { motion } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            className="faq-item"
            initial={false}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="faq-q">
                {question}
                <i className={`fa fa-chevron-down faq-chevron ${isOpen ? 'open' : ''}`} />
            </div>
            <div className={`faq-a ${isOpen ? 'faq-a--open' : ''}`}>
                <p>{answer}</p>
            </div>
        </motion.div>
    );
};

const faqData = [
    {
        category: '📦 Shipping & Packaging',
        items: [
            { q: 'Is my order shipped discreetly?', a: 'Yes! All orders arrive in plain, unmarked boxes. There are no logos, product descriptions, or brand names on the outside. Your privacy is guaranteed.' },
            { q: 'How long does shipping take?', a: 'Standard shipping takes 3–7 business days. Expedited options (2–3 days) are available at checkout.' },
            { q: 'Do you ship internationally?', a: 'Yes, we ship to most countries worldwide. Shipping times and costs vary by destination.' },
        ]
    },
    {
        category: '💳 Billing & Payment',
        items: [
            { q: 'How will this appear on my bank statement?', a: 'The charge will appear under a discreet business name — never as "PleasureNest" or anything related to adult products.' },
            { q: 'What payment methods do you accept?', a: 'We accept all major credit and debit cards (Visa, Mastercard, Amex), PayPal, and Apple Pay.' },
        ]
    },
    {
        category: '🔄 Returns & Refunds',
        items: [
            { q: 'Can I return a product?', a: 'Due to the intimate nature of our products, we cannot accept returns on opened items. However, if a product is defective, we offer hassle-free replacements within 30 days of purchase.' },
            { q: 'What if my item arrives damaged?', a: 'Contact us within 7 days of delivery with a photo. We will send a replacement at no extra cost.' },
        ]
    },
    {
        category: '✅ Product Safety',
        items: [
            { q: 'Are the products body-safe?', a: 'Absolutely. All PleasureNest products use medical-grade silicone, glass, or metal. We strictly avoid phthalates and harmful chemicals — guaranteed.' },
            { q: 'How do I clean my product?', a: 'Wash before and after each use with warm water and mild soap, or a dedicated toy cleaner. Store in the included pouch away from direct sunlight and heat.' },
            { q: 'Are silicone-based lubricants safe to use?', a: 'No — silicone lubricants can degrade silicone toys. Use water-based lubricants exclusively for silicone products.' },
        ]
    },
];

const FAQ = () => {
    return (
        <>
            {/* Schema for SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqData.flatMap(cat => cat.items).map(item => ({
                        "@type": "Question",
                        "name": item.q,
                        "acceptedAnswer": { "@type": "Answer", "text": item.a }
                    }))
                })
            }} />

            <section className="section">
                <div className="container" style={{ maxWidth: '800px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center', marginTop: '80px', marginBottom: '60px' }}
                    >
                        <div className="section-eyebrow">Got Questions?</div>
                        <h1>Frequently Asked Questions</h1>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '16px' }}>
                            Everything you need to know about shopping safely and discreetly at PleasureNest.
                        </p>
                    </motion.div>

                    {faqData.map((section, si) => (
                        <div key={si} style={{ marginBottom: '48px' }}>
                            <h3 style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--accent-color)' }}>
                                {section.category}
                            </h3>
                            {section.items.map((item, i) => (
                                <FAQItem key={i} question={item.q} answer={item.a} />
                            ))}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default FAQ;
