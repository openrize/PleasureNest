import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Collections from './pages/Collections';
import Wellness from './pages/Wellness';
import Rewards from './pages/Rewards';
import ScrollToTop from './components/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Category />} />
                    <Route path="/shop/:type" element={<Category />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/collections/:slug" element={<Collections />} />
                    <Route path="/wellness" element={<Wellness />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/education/:slug" element={<Education />} />
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/rewards" element={<Rewards />} />
                    <Route path="/blog" element={<Navigate to="/education" replace />} />
                    <Route path="/guides" element={<Navigate to="/education" replace />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
