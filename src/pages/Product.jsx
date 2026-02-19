import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Product = () => {
    const { id } = useParams();
    const [qty, setQty] = useState(1);

    // In a real app, fetch product by ID
    const product = {
        name: 'Luxury Rechargeable Vibrator',
        price: '$129.99',
        sku: 'PN-1001-VIBE',
        desc: 'Experience ultimate pleasure with our Luxury Rechargeable Vibrator. Perfect for solo fun or couple play. Features whisper-quiet motor, waterproof design, and body-safe materials.'
    };

    const handleAddToCart = () => {
        alert(`Added ${qty} x ${product.name} to cart!`);
    };

    return (
        <section className="section" style={{ paddingTop: '100px' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
                {/* Gallery */}
                <div className="product-gallery">
                    <div style={{ height: '500px', background: 'radial-gradient(#444, #222)', borderRadius: '4px', marginBottom: '20px' }}></div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div style={{ width: '80px', height: '80px', background: '#333', borderRadius: '4px', cursor: 'pointer', border: '2px solid var(--accent-color)' }}></div>
                        <div style={{ width: '80px', height: '80px', background: '#333', borderRadius: '4px', cursor: 'pointer', opacity: 0.7 }}></div>
                        <div style={{ width: '80px', height: '80px', background: '#333', borderRadius: '4px', cursor: 'pointer', opacity: 0.7 }}></div>
                    </div>
                </div>

                {/* Meta */}
                <div className="product-meta">
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{product.name}</h1>
                    <div style={{ fontSize: '2rem', color: 'var(--accent-color)', fontWeight: 700, marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>{product.price}</div>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.1rem' }}>{product.desc}</p>

                    <ul style={{ listStyle: 'none', marginBottom: '30px' }}>
                        <li style={{ marginBottom: '10px' }}><i className="fa fa-check" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> Rechargeable battery</li>
                        <li style={{ marginBottom: '10px' }}><i className="fa fa-check" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> Waterproof design</li>
                        <li style={{ marginBottom: '10px' }}><i className="fa fa-check" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> Whisper-quiet motor</li>
                        <li style={{ marginBottom: '10px' }}><i className="fa fa-check" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> Body-safe silicone</li>
                    </ul>

                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginBottom: '40px' }}>
                        <input
                            type="number"
                            value={qty}
                            min="1"
                            onChange={(e) => setQty(e.target.value)}
                            style={{ width: '60px', padding: '10px', background: 'var(--bg-tertiary)', border: '1px solid #333', color: '#fff', textAlign: 'center', fontFamily: 'var(--font-body)' }}
                        />
                        <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
                    </div>

                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', borderTop: '1px solid #333', paddingTop: '20px' }}>
                        <p><strong>Category:</strong> Vibrators</p>
                        <p><strong>SKU:</strong> {product.sku}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
