import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import ContactUs from './pages/contact-us/contact-us'
import Shop from './pages/shop/shop'
import Blog from './pages/blog/blog'
import NotFound from './pages/NotFound'
import Layout from './components/Layout'
import { AboutUs } from './pages/about-us/about-us'
import { Pages } from './pages/pages/pages'

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/pages" element={<Blog />} />
        <Route path="/blog" element={<Pages />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App