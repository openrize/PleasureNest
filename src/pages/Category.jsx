import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import products from '../data/products.json';

const Category = () => {
    const { type } = useParams();
    const [filtered, setFiltered] = useState([]);
    const [sort, setSort] = useState('featured');
    const [beginner, setBeginner] = useState(false);
    const [waterproof, setWaterproof] = useState(false);
    const [priceMax, setPriceMax] = useState(500);

    const categoryTitles = {
        'vibrators': 'Premium Vibrators',
        'dildos': 'Sculptural Dildos',
        'couples': 'Couples Play',
        'bdsm': 'The Dark Room',
        'wellness': 'Wellness & Care'
    };

    const parsePrice = (p) => parseFloat((p || '$0').replace(/[^0-9.]/g, '')) || 0;

    useEffect(() => {
        let list = type ? products.filter(p => p.type === type) : [...products];

        if (beginner) list = list.filter(p => p.type === 'vibrators' || p.type === 'wellness');
        list = list.filter(p => parsePrice(p.price) <= priceMax);

        if (sort === 'price-asc') list.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        else if (sort === 'price-desc') list.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        else if (sort === 'newest') list.sort((a, b) => b.id - a.id);

        setFiltered(list);
    }, [type, sort, beginner, waterproof, priceMax]);

    const tabs = [
        { label: 'All', path: '/shop' },
        { label: 'Vibrators', path: '/shop/vibrators' },
        { label: 'Couples', path: '/shop/couples' },
        { label: 'BDSM', path: '/shop/bdsm' },
        { label: 'Wellness', path: '/shop/wellness' },
        { label: 'Dildos', path: '/shop/dildos' },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.08 } }
    };
    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="section" style={{ minHeight: '80vh', paddingTop: '100px' }}>
            <div className="container">
                {/* Page title */}
                <motion.h1
                    key={type}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{ textAlign: 'center', marginBottom: '16px' }}
                >
                    {type ? categoryTitles[type] : 'Shop All'}
                </motion.h1>

                {/* Category Tabs */}
                <div className="cat-tabs">
                    {tabs.map(tab => (
                        <Link
                            key={tab.path}
                            to={tab.path}
                            className={`cat-tab ${(type ? `/shop/${type}` : '/shop') === tab.path ? 'cat-tab--active' : ''}`}
                        >
                            {tab.label}
                        </Link>
                    ))}
                </div>

                {/* Filter Bar */}
                <div className="filter-bar">
                    <div className="filter-toggles">
                        <label className="filter-toggle">
                            <input type="checkbox" checked={beginner} onChange={e => setBeginner(e.target.checked)} />
                            <span>Beginner-Friendly</span>
                        </label>
                        <label className="filter-toggle">
                            <input type="checkbox" checked={waterproof} onChange={e => setWaterproof(e.target.checked)} />
                            <span>Waterproof</span>
                        </label>
                        <label className="filter-price">
                            <span>Max Price: ${priceMax}</span>
                            <input type="range" min="10" max="500" step="10" value={priceMax} onChange={e => setPriceMax(Number(e.target.value))} />
                        </label>
                    </div>

                    <div className="filter-right">
                        <span className="product-count">{filtered.length} products</span>
                        <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
                            <option value="featured">Sort: Featured</option>
                            <option value="price-asc">Price: Low → High</option>
                            <option value="price-desc">Price: High → Low</option>
                            <option value="newest">Newest First</option>
                        </select>
                    </div>
                </div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={type + sort + beginner + waterproof + priceMax}
                        className="product-grid"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {filtered.length === 0 ? (
                            <p style={{ color: 'var(--text-secondary)', gridColumn: '1/-1', textAlign: 'center', padding: '60px 0' }}>
                                No products match your filters. Try adjusting them.
                            </p>
                        ) : filtered.map(product => (
                            <motion.div key={product.id} className="product-card" variants={item}>
                            <Link to={`/product/${product.id}`} className="product-card-link">
                                <div className="product-img">
                                    <div
                                        className="product-img-inner"
                                        style={{ backgroundImage: `url(${product.image})` }}
                                    />
                                </div>
                            </Link>
                            <div className="product-info">
                                <div className="product-stars">
                                    {'★★★★★'.split('').map((s, i) => <span key={i} className="star">{s}</span>)}
                                    <span className="star-count">(24)</span>
                                </div>
                                <Link to={`/product/${product.id}`}>
                                    <h4 title={product.name}>{product.name}</h4>
                                </Link>
                                    <p className="price">{product.price}</p>
                                    <div className="product-actions">
                                        <Link to={`/product/${product.id}`} className="btn btn-primary btn-small">Add to Cart</Link>
                                        <Link to={`/product/${product.id}`} className="btn btn-outline btn-small">View</Link>
                                    </div>
                            </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Category;
