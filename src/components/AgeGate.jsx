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
                <div className="age-gate-logo-container" style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
                    <img src="/logo.png" alt="Pleasure Nest" style={{ height: '60px' }} />
                </div>
                <div className="age-gate-badge">18+</div>
                <h2>Welcome to Pleasure Nest</h2>
                <p>
                    This site offers intimacy wellness products intended for adults 18 and older.
                    By entering, you confirm you are at least 18 and agree to our terms of service.
                </p>
                <div className="age-gate-note">
                    <i className="fa fa-lock" /> Discreet packaging and billing, always.
                </div>
                <div className="age-gate-actions">
                    <button className="btn btn-primary age-gate-enter" onClick={handleEnter}>
                        Enter — I am 18+
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
