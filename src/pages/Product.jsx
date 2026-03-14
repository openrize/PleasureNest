import { useParams } from 'react-router-dom';
import { useState } from 'react';
import products from '../data/products.json';

const Product = () => {
    const { id } = useParams();
    const [qty, setQty] = useState(1);

    const product = products.find(p => p.id === parseInt(id)) || {
        name: 'Product Not Found',
        price: '$0.00',
        sku: 'N/A',
        desc: 'Sorry, we couldn\'t find the product you were looking for.'
    };

    const handleAddToCart = () => {
        alert(`Added ${qty} x ${product.name} to cart!`);
    };

    return (
        <section className="section" style={{ paddingTop: '100px' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
                {/* Gallery */}
                <div className="product-gallery">
                    <div style={{ 
                        height: '500px', 
                        backgroundImage: `url(${product.image})`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundColor: '#111',
                        borderRadius: '4px', 
                        marginBottom: '20px' 
                    }}></div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div style={{ width: '80px', height: '80px', backgroundImage: `url(${product.image})`, backgroundSize: 'cover', borderRadius: '4px', cursor: 'pointer', border: '2px solid var(--accent-color)' }}></div>
                    </div>
                </div>

                {/* Meta */}
                <div className="product-meta">
                    <h1 style={{ fontSize: '2rem', marginBottom: '10px', lineHeight: 1.2 }}>{product.name}</h1>
                    <div style={{ fontSize: '2rem', color: 'var(--accent-color)', fontWeight: 700, marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>{product.price}</div>

                    <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.1rem' }}>{product.desc}</p>

                    <ul style={{ listStyle: 'none', marginBottom: '30px' }}>
                        <li style={{ marginBottom: '10px' }}><i className="fa fa-check" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> Body-safe materials</li>
                        <li style={{ marginBottom: '10px' }}><i className="fa fa-check" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> Discreet packaging</li>
                        <li style={{ marginBottom: '10px' }}><i className="fa fa-check" style={{ color: 'var(--accent-color)', marginRight: '10px' }}></i> Premium quality</li>
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
                        <p><strong>Category:</strong> {product.type}</p>
                        <p><strong>SKU:</strong> PN-DATA-{product.id}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
