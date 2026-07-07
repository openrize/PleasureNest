import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const REWARDS_TIERS = [
    {
        name: 'Nest',
        points: '0 – 499',
        perks: ['Welcome gift on first order', 'Birthday wellness surprise', 'Early access to new collections'],
    },
    {
        name: 'Bloom',
        points: '500 – 1,499',
        perks: ['Free shipping on all orders', 'Exclusive wellness guides', 'Priority customer support'],
    },
    {
        name: 'Radiant',
        points: '1,500+',
        perks: ['VIP early access to sales', 'Complimentary gift wrapping', 'Annual wellness gift box'],
    },
];

const Rewards = () => {
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
                    <div className="section-eyebrow">Rewards</div>
                    <h1 className="section-title">Pleasure Nest Rewards</h1>
                    <p className="section-sub">
                        Earn points with every purchase and unlock exclusive wellness perks.
                        Because loyal customers deserve to feel celebrated.
                    </p>
                </motion.div>

                <motion.div
                    className="rewards-grid"
                    initial="hidden"
                    animate="show"
                    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
                >
                    {REWARDS_TIERS.map((tier) => (
                        <motion.div key={tier.name} className="rewards-card" variants={fadeUp}>
                            <h3>{tier.name}</h3>
                            <p className="rewards-points">{tier.points} points</p>
                            <ul>
                                {tier.perks.map((perk) => (
                                    <li key={perk}>
                                        <i className="fa fa-check" /> {perk}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    className="rewards-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                    <p>Start earning points on your next order.</p>
                    <Link to="/shop" className="btn btn-primary">
                        Start Shopping <i className="fa fa-arrow-right" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default Rewards;
