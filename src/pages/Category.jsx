import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import products from '../data/products.json';

const Category = () => {
    const { type } = useParams();
    const [filteredProducts, setFilteredProducts] = useState([]);

    const categoryTitles = {
        'vibrators': 'Premium Vibrators',
        'dildos': 'Sculptural Dildos',
        'couples': 'Couples Play',
        'bdsm': 'The Dark Room',
        'wellness': 'Wellness & Care'
    };

    useEffect(() => {
        if (type) {
            setFilteredProducts(products.filter(p => p.type === type));
        } else {
            setFilteredProducts(products);
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
                    {filteredProducts.map(product => (
                        <motion.div key={product.id} className="product-card" variants={item}>
                            <div className="product-img">
                                <div 
                                    className="product-img-inner"
                                    style={{ backgroundImage: `url(${product.image})` }}
                                ></div>
                            </div>
                            <div className="product-info">
                                <h4 title={product.name}>{product.name}</h4>
                                <p className="price">{product.price}</p>
                                <div className="product-actions">
                                    <Link to={`/product/${product.id}`} className="btn btn-primary btn-small">Add to Cart</Link>
                                    <Link to={`/product/${product.id}`} className="btn btn-outline btn-small">View</Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Category;
