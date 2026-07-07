export const COLLECTIONS = [
    {
        slug: 'couples',
        title: 'Couples',
        subtitle: 'Connection & shared experiences',
        route: '/collections/couples',
        placeholder: 'placeholder-couple',
        filter: (p) => p.type === 'couples',
    },
    {
        slug: 'self-care',
        title: 'Self-Care',
        subtitle: 'Personal wellness rituals',
        route: '/collections/self-care',
        placeholder: 'placeholder-wellness',
        filter: (p) => p.type === 'wellness' || p.type === 'vibrators',
    },
    {
        slug: 'wellness',
        title: 'Wellness',
        subtitle: 'Comfort & recovery',
        route: '/collections/wellness',
        placeholder: 'placeholder-wellness',
        filter: (p) => p.type === 'wellness',
    },
    {
        slug: 'luxury',
        title: 'Luxury Collection',
        subtitle: 'Premium curated pieces',
        route: '/collections/luxury',
        placeholder: 'placeholder-vibe',
        filter: (p) => p.priceRaw >= 12,
    },
    {
        slug: 'new-arrivals',
        title: 'New Arrivals',
        subtitle: 'Latest additions',
        route: '/collections/new-arrivals',
        placeholder: 'placeholder-vibe',
        filter: (p) => p.id >= 200,
    },
    {
        slug: 'gift-ideas',
        title: 'Gift Ideas',
        subtitle: 'Thoughtfully curated gifts',
        route: '/collections/gift-ideas',
        placeholder: 'placeholder-couple',
        filter: (p) => ['couples', 'wellness'].includes(p.type),
    },
];

export const SHOP_BY_NEED = COLLECTIONS;

export const getCollectionBySlug = (slug) =>
    COLLECTIONS.find((c) => c.slug === slug);

export const filterByCollection = (products, slug) => {
    const collection = getCollectionBySlug(slug);
    if (!collection) return products;
    return products.filter(collection.filter);
};

export const getCollectionCount = (products, collection) =>
    products.filter(collection.filter).length;

export const WELLNESS_PILLARS = [
    {
        icon: 'diamond',
        title: 'Premium Quality',
        text: 'Every product is hand-selected for craftsmanship, performance, and lasting comfort.',
    },
    {
        icon: 'certificate',
        title: 'Body-Safe Materials',
        text: 'Medical-grade silicone, glass, and metal only. Zero phthalates, always.',
    },
    {
        icon: 'archive',
        title: 'Discreet Packaging',
        text: 'Plain, unmarked boxes with private billing. Your privacy is protected.',
    },
    {
        icon: 'lock',
        title: 'Secure Checkout',
        text: 'SSL-encrypted transactions. Your data is never sold or shared.',
    },
    {
        icon: 'truck',
        title: 'Fast Shipping',
        text: 'Orders ship within 1–3 business days in discreet packaging.',
    },
    {
        icon: 'headphones',
        title: 'Customer Support',
        text: 'Friendly, judgment-free guidance whenever you need it.',
    },
];

export const EDUCATION_ARTICLES = [
    {
        slug: 'beginner-guide',
        icon: '🌿',
        title: 'Beginner Guide',
        tag: 'Getting Started',
        desc: 'A gentle introduction to intimacy wellness — what to look for, how to choose, and where to begin with confidence.',
    },
    {
        slug: 'relationship-wellness',
        icon: '💫',
        title: 'Relationship Wellness',
        tag: 'Connection',
        desc: 'How couples can deepen trust, communication, and closeness through intentional wellness practices.',
    },
    {
        slug: 'self-care',
        icon: '🕯️',
        title: 'Self Care',
        tag: 'Personal Wellness',
        desc: 'Explore self-care rituals that support confidence, relaxation, and personal wellbeing.',
    },
    {
        slug: 'product-care',
        icon: '✨',
        title: 'Product Care',
        tag: 'Care Guide',
        desc: 'Cleaning, storing, and maintaining your products for safety and longevity.',
    },
    {
        slug: 'safe-materials',
        icon: '🛡️',
        title: 'Safe Materials',
        tag: 'Safety',
        desc: 'Understanding body-safe materials and why they matter for your health and comfort.',
    },
];
