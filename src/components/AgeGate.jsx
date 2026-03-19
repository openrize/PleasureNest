import { useState, useEffect } from 'react';

const AgeGate = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const confirmed = localStorage.getItem('pn_age_confirmed');
        if (!confirmed) setVisible(true);
    }, []);

    const handleEnter = () => {
        localStorage.setItem('pn_age_confirmed', 'true');
        setVisible(false);
    };

    const handleExit = () => {
        window.location.href = 'https://www.google.com';
    };

    if (!visible) return null;

    return (
        <div className="age-gate-overlay">
            <div className="age-gate-card">
                <div className="age-gate-logo">
                    Pleasure<span>Nest</span>
                </div>
                <div className="age-gate-badge">18+</div>
                <h2>Adults Only</h2>
                <p>
                    This website contains adult content intended for individuals
                    18 years of age or older. By entering, you confirm that you
                    are at least 18 years old and agree to our Terms of Service.
                </p>
                <div className="age-gate-note">
                    <i className="fa fa-lock" /> &nbsp;Discreet billing &amp; packaging, always.
                </div>
                <div className="age-gate-actions">
                    <button className="btn btn-primary age-gate-enter" onClick={handleEnter}>
                        I'm 18+ – Enter Site
                    </button>
                    <button className="btn btn-outline age-gate-exit" onClick={handleExit}>
                        Exit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgeGate;
