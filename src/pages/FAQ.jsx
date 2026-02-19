import { useState } from 'react';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ backgroundColor: 'var(--bg-secondary)', marginBottom: '20px', borderRadius: '4px', overflow: 'hidden' }}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{ padding: '20px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: '600' }}
            >
                {question}
                <i className={`fa fa-chevron-down`} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}></i>
            </div>
            <div style={{
                padding: isOpen ? '20px' : '0 20px',
                maxHeight: isOpen ? '200px' : '0',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                color: 'var(--text-secondary)'
            }}>
                <p>{answer}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    return (
        <section className="section">
            <div className="container" style={{ maxWidth: '800px' }}>
                <h1 style={{ textAlign: 'center', marginTop: '80px' }}>Frequently Asked Questions</h1>

                <div className="faq-container">
                    <FAQItem
                        question="Is my order shipped discreetly?"
                        answer="Yes! All orders come in plain, unmarked packaging. There are no logos or descriptions on the outside of the box to ensure your complete privacy."
                    />
                    <FAQItem
                        question="Are the products body-safe?"
                        answer="Absolutely. All PleasureNest products are made from high-quality, body-safe materials like medical-grade silicone, glass, and metal. We strictly avoid phthalates and harmful chemicals."
                    />
                    <FAQItem
                        question="Can I return a product?"
                        answer="Due to the intimate nature of our products, we generally cannot accept returns on opened items. However, if a product is defective, we offer hassle-free replacements within 30 days of purchase."
                    />
                    <FAQItem
                        question="Do you offer international shipping?"
                        answer="Yes, we ship to multiple countries worldwide. Shipping times and costs vary depending on the destination."
                    />
                </div>
            </div>
        </section>
    );
};

export default FAQ;
