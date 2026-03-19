import Header from './Header';
import Footer from './Footer';
import AgeGate from './AgeGate';

const Layout = ({ children }) => {
    return (
        <div className="app-layout">
            <AgeGate />
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
