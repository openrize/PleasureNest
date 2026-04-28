import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import products from '../data/products.json';
import QuoteActions from '../components/QuoteActions';
import { getInventoryStats, withInventory } from '../utils/inventory';

const Category = () => {
    const { type } = useParams();
    const [filtered, setFiltered] = useState([]);
    const [sort, setSort] = useState('featured');
    const [beginner, setBeginner] = useState(false);
    const [inStockOnly, setInStockOnly] = useState(false);
    const inventoryStats = getInventoryStats(products);

    const categoryTitles = {
        'vibrators': 'Premium Vibrators',
        'dildos': 'Sculptural Dildos',
        'couples': 'Couples Play',
        'bdsm': 'The Dark Room',
        'wellness': 'Wellness & Care'
    };

    useEffect(() => {
        let list = type ? products.filter(p => p.type === type) : [...products];
        list = list.map(withInventory);

        if (beginner) list = list.filter(p => p.type === 'vibrators' || p.type === 'wellness');
        if (inStockOnly) list = list.filter(p => p.inventory.isInStock);

        if (sort === 'stock-high') list.sort((a, b) => b.inventory.units - a.inventory.units);
        else if (sort === 'low-stock') list.sort((a, b) => Number(a.inventory.isLowStock) - Number(b.inventory.isLowStock));
        else if (sort === 'newest') list.sort((a, b) => b.id - a.id);

        setFiltered(list);
    }, [type, sort, beginner, inStockOnly]);

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
                            <input type="checkbox" checked={inStockOnly} onChange={e => setInStockOnly(e.target.checked)} />
                            <span>In-Stock Only</span>
                        </label>
                    </div>

                    <div className="filter-right">
                        <span className="product-count">{filtered.length} products</span>
                        <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
                            <option value="featured">Sort: Featured</option>
                            <option value="stock-high">Inventory: High → Low</option>
                            <option value="low-stock">Low Stock First</option>
                            <option value="newest">Newest First</option>
                        </select>
                    </div>
                </div>
                <div className="inventory-summary">
                    <div className="inventory-chip stock-in">In stock: {inventoryStats.inStock}</div>
                    <div className="inventory-chip stock-low">Low stock: {inventoryStats.lowStock}</div>
                    <div className="inventory-chip stock-out">Out of stock: {inventoryStats.outOfStock}</div>
                </div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={type + sort + beginner + inStockOnly}
                        className="product-grid"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {(!filtered || filtered.length === 0) ? (
                            <p style={{ color: 'var(--text-secondary)', gridColumn: '1/-1', textAlign: 'center', padding: '60px 0' }}>
                                No products match your filters. Try adjusting them.
                            </p>
                        ) : filtered.map(product => {
                            if (!product || !product.id) return null;
                            return (
                                <motion.div key={product.id} className="product-card" variants={item}>
                                    <Link to={`/product/${product.id}`} className="product-card-link">
                                        <div className="product-img">
                                            <div
                                                className="product-img-inner"
                                                style={{ backgroundImage: `url("${product.image || ''}")` }}
                                            />
                                        </div>
                                    </Link>
                                    <div className="product-info">
                                        <div className="product-stars">
                                            {'★★★★★'.split('').map((s, i) => <span key={i} className="star">{s}</span>)}
                                            <span className="star-count">(24)</span>
                                        </div>
                                        <Link to={`/product/${product.id}`}>
                                            <h4 title={product.name || 'Product'}>{product.name || 'Product'}</h4>
                                        </Link>
                                        <p className={`stock-badge ${product.inventory.stockClass}`}>{product.inventory.stockLabel}</p>
                                        <p className="price-hidden-copy">Price hidden - request quote via call or email</p>
                                        <QuoteActions productName={product.name || 'Product'} locationTag="category_grid" />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Category;
