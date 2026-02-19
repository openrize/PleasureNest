import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Category = () => {
    const { type } = useParams();
    const [products, setProducts] = useState([]);

    // Data... (Same as before, abbreviated for brevity)
    const categoryTitles = {
        'vibrators': 'Premium Vibrators',
        'dildos': 'Sculptural Dildos',
        'couples': 'Couples Play',
        'bdsm': 'The Dark Room',
        'wellness': 'Wellness & Care'
    };

    const allProducts = [
        { id: 1, name: 'Luxury Rechargeable Vibrator', price: '$129.99', type: 'vibrators', imgClass: 'placeholder-p1' },
        { id: 2, name: 'Silk Rope Restraints', price: '$45.00', type: 'bdsm', imgClass: 'placeholder-p2' },
        { id: 3, name: 'Dual Action Massager', price: '$89.99', type: 'vibrators', imgClass: 'placeholder-p3' },
        { id: 4, name: 'Glass Pleasure Wand', price: '$55.00', type: 'dildos', imgClass: 'placeholder-p4' },
        { id: 5, name: 'G-Spot Delight', price: '$75.00', type: 'vibrators', imgClass: 'placeholder-p1' },
        { id: 6, name: 'Satin Blindfold', price: '$25.00', type: 'bdsm', imgClass: 'placeholder-p2' },
        { id: 7, name: 'Remote Control Egg', price: '$65.00', type: 'couples', imgClass: 'placeholder-p3' },
        { id: 8, name: 'Massage Oil Candle', price: '$35.00', type: 'wellness', imgClass: 'placeholder-p4' },
    ];

    useEffect(() => {
        if (type) {
            setProducts(allProducts.filter(p => p.type === type));
        } else {
            setProducts(allProducts);
        }
    }, [type]);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="section" style={{ minHeight: '80vh' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '80px', marginTop: '40px' }}>
                    <motion.h1
                        key={type} // Re-animate on change
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {type ? categoryTitles[type] : 'Shop All'}
                    </motion.h1>
                </div>

                <motion.div
                    className="product-grid"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    {products.map(product => (
                        <motion.div key={product.id} className="product-card" variants={item}>
                            <div className={`product-img ${product.imgClass}`}></div>
                            <div className="product-info">
                                <h4>{product.name}</h4>
                                <p className="price">{product.price}</p>
                                <Link to={`/product/${product.id}`} className="btn btn-small" style={{ marginTop: '15px' }}>Add to Cart</Link>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Category;
