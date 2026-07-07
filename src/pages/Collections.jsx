import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../data/products.json';
import QuoteActions from '../components/QuoteActions';
import { withInventory } from '../utils/inventory';
import { COLLECTIONS, getCollectionBySlug, filterByCollection } from '../utils/categories';

const Collections = () => {
    const { slug } = useParams();
    const collection = slug ? getCollectionBySlug(slug) : null;
    const inventoryProducts = products.map(withInventory);
    const filtered = collection
        ? filterByCollection(inventoryProducts, slug)
        : inventoryProducts;

    const stagger = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.06 } },
    };
    const fadeUp = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section className="section" style={{ paddingTop: '120px' }}>
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="section-eyebrow">Collections</div>
                    <h1 className="section-title">
                        {collection ? collection.title : 'All Collections'}
                    </h1>
                    <p className="section-sub">
                        {collection
                            ? collection.subtitle
                            : 'Curated wellness collections designed for comfort, confidence, and connection.'}
                    </p>
                </motion.div>

                {!slug && (
                    <motion.div
                        className="collection-grid"
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                        style={{ marginBottom: '80px' }}
                    >
                        {COLLECTIONS.map((col) => (
                            <motion.div key={col.slug} variants={fadeUp}>
                                <Link to={col.route} className="collection-card">
                                    <div className={`cat-img ${col.placeholder}`} />
                                    <div className="collection-card-body">
                                        <span className="cat-eyebrow">{col.subtitle}</span>
                                        <h3>{col.title}</h3>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {slug && (
                    <motion.div
                        className="product-grid"
                        variants={stagger}
                        initial="hidden"
                        animate="show"
                    >
                        {filtered.map((item) => (
                            <motion.div key={item.id} className="product-card" variants={fadeUp}>
                                <Link to={`/product/${item.id}`} className="product-card-link">
                                    <div className="product-img">
                                        <div
                                            className="product-img-inner"
                                            style={{ backgroundImage: `url(${item.image})` }}
                                        />
                                    </div>
                                </Link>
                                <div className="product-info">
                                    <Link to={`/product/${item.id}`}>
                                        <h4 title={item.name}>{item.name}</h4>
                                    </Link>
                                    <p className={`stock-badge ${item.inventory.stockClass}`}>
                                        {item.inventory.stockLabel}
                                    </p>
                                    <QuoteActions productName={item.name} locationTag="collections_grid" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Collections;
