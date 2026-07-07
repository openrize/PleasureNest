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
        vibrators: 'Self-Care Collection',
        dildos: 'Personal Wellness',
        couples: 'Couples & Connection',
        bdsm: 'Advanced Wellness',
        wellness: 'Wellness Essentials',
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
        { label: 'Self-Care', path: '/shop/vibrators' },
        { label: 'Couples', path: '/shop/couples' },
        { label: 'Wellness', path: '/shop/wellness' },
        { label: 'Personal', path: '/shop/dildos' },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.06 } }
    };
    const item = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section className="section" style={{ minHeight: '80vh', paddingTop: '120px' }}>
            <div className="container">
                <motion.div
                    key={type}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                    style={{ marginBottom: '40px' }}
                >
                    <div className="section-eyebrow">Shop</div>
                    <h1 className="section-title">{type ? categoryTitles[type] : 'All Products'}</h1>
                    <p className="section-sub">
                        Premium intimacy wellness, curated for comfort and confidence.
                    </p>
                </motion.div>

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

                <div className="filter-bar">
                    <div className="filter-toggles">
                        <label className="filter-toggle">
                            <input type="checkbox" checked={beginner} onChange={e => setBeginner(e.target.checked)} />
                            <span>Beginner-Friendly</span>
                        </label>
                        <label className="filter-toggle">
                            <input type="checkbox" checked={inStockOnly} onChange={e => setInStockOnly(e.target.checked)} />
                            <span>In Stock</span>
                        </label>
                    </div>

                    <div className="filter-right">
                        <span className="product-count">{filtered.length} products</span>
                        <select className="sort-select" value={sort} onChange={e => setSort(e.target.value)}>
                            <option value="featured">Featured</option>
                            <option value="stock-high">Availability</option>
                            <option value="newest">Newest</option>
                        </select>
                    </div>
                </div>

                <div className="inventory-chips">
                    <span className="inv-chip inv-chip--in">{inventoryStats.inStock} in stock</span>
                    <span className="inv-chip inv-chip--low">{inventoryStats.lowStock} low stock</span>
                    <span className="inv-chip inv-chip--out">{inventoryStats.outOfStock} unavailable</span>
                </div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${type}-${sort}-${beginner}-${inStockOnly}`}
                        className="product-grid"
                        variants={container}
                        initial="hidden"
                        animate="show"
                    >
                        {filtered.map(p => (
                            <motion.div key={p.id} className="product-card" variants={item}>
                                <Link to={`/product/${p.id}`} className="product-card-link">
                                    <div className="product-img">
                                        <div className="product-img-inner" style={{ backgroundImage: `url(${p.image})` }} />
                                    </div>
                                </Link>
                                <div className="product-info">
                                    <Link to={`/product/${p.id}`}>
                                        <h4 title={p.name}>{p.name}</h4>
                                    </Link>
                                    <p className={`stock-badge ${p.inventory.stockClass}`}>{p.inventory.stockLabel}</p>
                                    <QuoteActions productName={p.name} locationTag="category_grid" />
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
