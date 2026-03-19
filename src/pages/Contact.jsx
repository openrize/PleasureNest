import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'general',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message Sent! We will get back to you shortly.');
        setFormData({ name: '', email: '', type: 'general', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    return (
        <section className="section" style={{ paddingTop: '120px' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h1>Get in Touch</h1>
                <p style={{ marginBottom: '40px', color: 'var(--text-secondary)' }}>Have questions or need support? Contact PleasureNest today.</p>

                <div className="contact-info" style={{ marginBottom: '50px' }}>
                    <p><i className="fa fa-envelope" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> <a href="mailto:openrize@gmail.com" style={{ color: 'var(--text-primary)' }}>openrize@gmail.com</a></p>
                    <p><i className="fa fa-phone" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> <a href="tel:2243779043" style={{ color: 'var(--text-primary)' }}>(224) 377-9043</a></p>
                </div>

                <div style={{ backgroundColor: 'var(--bg-secondary)', padding: '40px', borderRadius: '4px', maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Name</label>
                            <input
                                type="text"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '12px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid #333', color: 'var(--text-primary)', borderRadius: '2px', fontFamily: 'var(--font-body)' }}
                            />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Email</label>
                            <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '12px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid #333', color: 'var(--text-primary)', borderRadius: '2px', fontFamily: 'var(--font-body)' }}
                            />
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="type" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Inquiry Type</label>
                            <select
                                id="type"
                                value={formData.type}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '12px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid #333', color: 'var(--text-primary)', borderRadius: '2px', fontFamily: 'var(--font-body)' }}
                            >
                                <option value="general">General Inquiry</option>
                                <option value="order">Order Support</option>
                                <option value="product">Product Question</option>
                                <option value="returns">Returns & Exchanges</option>
                            </select>
                        </div>
                        <div style={{ marginBottom: '20px' }}>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', color: 'var(--text-secondary)' }}>Message</label>
                            <textarea
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{ width: '100%', padding: '12px', backgroundColor: 'var(--bg-tertiary)', border: '1px solid #333', color: 'var(--text-primary)', borderRadius: '2px', fontFamily: 'var(--font-body)', height: '150px', resize: 'vertical' }}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
