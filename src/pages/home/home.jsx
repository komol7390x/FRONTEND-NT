import { Banner } from './components/banner';
import { Categories } from './components/categories';
import { Hero } from './components/hero';
import { PopularProduct } from './components/popular-product';
import { Sale } from './components/sale';


const Home = () => {
  return (
    <main className="p-4">
      <div className='container border'>

        {/* banner */}
        <Banner />

        {/* hero */}
        <Hero />

        {/* Popular-categories */}
        <Categories />

        {/* Popular-categories */}
        <PopularProduct />

        {/* Sale */}
        <Sale />
      </div>
    </main>
  );
}

export default Home