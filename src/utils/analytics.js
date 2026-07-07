const STORAGE_KEY = 'pn_analytics_events_v1';

const persistEvent = (event, properties = {}) => {
    const entry = { event, properties, timestamp: Date.now() };
    try {
        const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        existing.push(entry);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(existing.slice(-500)));
    } catch {
        // ignore storage errors
    }
    if (import.meta.env.DEV) {
        console.info('[Analytics]', event, properties);
    }
    window.dispatchEvent(new CustomEvent('pn-analytics', { detail: entry }));
};

export const trackEvent = persistEvent;

export const trackProductView = (product) =>
    persistEvent('product_view', {
        productId: product?.id,
        productName: product?.name,
        category: product?.type,
    });

export const trackAddCart = (product) =>
    persistEvent('add_cart', {
        productId: product?.id,
        productName: product?.name,
    });

export const trackCheckout = (details = {}) =>
    persistEvent('checkout', details);

export const trackPurchase = (details = {}) =>
    persistEvent('purchase', details);

export const trackNewsletter = (email) =>
    persistEvent('newsletter_signup', { email });

export const getAnalyticsEvents = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch {
        return [];
    }
};
