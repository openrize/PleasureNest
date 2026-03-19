const TrustBar = () => {
    const items = [
        { icon: 'archive', label: 'Discreet Packaging' },
        { icon: 'certificate', label: 'Body-Safe Materials' },
        { icon: 'lock', label: 'Secure Checkout' },
        { icon: 'refresh', label: '30-Day Easy Returns' },
        { icon: 'truck', label: 'Fast Discreet Delivery' },
    ];

    return (
        <div className="trust-bar">
            <div className="container trust-bar-inner">
                {items.map((item, i) => (
                    <div className="trust-bar-item" key={i}>
                        <i className={`fa fa-${item.icon}`} />
                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustBar;
