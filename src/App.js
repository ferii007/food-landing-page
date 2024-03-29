
import './assets/style/style.css';
import 'remixicon/fonts/remixicon.css';
import HeroSection from "./components/hero-components/HeroSection";
import ServicesSection from "./components/services-components/ServicesSection";
import MenuSection from './components/menu-components/MenuSection';
import TestimonialSection from './components/testimonial-components/TestimonialSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <HeroSection />

      <ServicesSection />

      <MenuSection />

      <TestimonialSection />

      <Footer />
    </>
  );
}

export default App;
