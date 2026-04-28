import Header from './Header';
import Footer from './Footer';
import AgeGate from './AgeGate';
import ExperimentInsights from './ExperimentInsights';

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            <AgeGate />
            <Header />
            <main>
                {children}
            </main>
            <ExperimentInsights />
            <Footer />
        </div>
    );
};

export default Layout;
