

import { Banner } from './components/banner';
import { Hero } from './components/hero';


const Home = () => {
  return (
    <main className="p-4">
      <div className='container border'>

        {/* banner */}
        <Banner />

        {/* hero */}
        <Hero />
      </div>
    </main>
  );
}

export default Home