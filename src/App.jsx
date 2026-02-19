import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import Product from './pages/Product';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
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
                    <Route path="/product/:id" element={<Product />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/blog" element={<Blog />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
