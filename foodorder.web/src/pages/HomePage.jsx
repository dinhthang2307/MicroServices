import Navbar from '../components/Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../components/style.css'
import Hero from '../components/Hero'
import Delivery from '../components/Delivery'
import Healthy from '../components/Healthy'
import ProductSlider from '../components/ProductSlider'
import Products from '../components/Products'
import Footer from '../components/Footer'
import ListItems from '../components/ListItems'

function HomePage() {

  return (
    <div>
      <Hero />
      <Delivery />
      <Healthy />
      <ProductSlider />
      <Products />
      
      <Footer />
    </div>
  )
}

export default HomePage;
