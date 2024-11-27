import '../App.css'; 
import Header from "../components/Header"; 
import Carousel from '../components/Carousel';
import carouselData from '../components/CarouselData';
import TextBox from '../components/TextArea';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="App">
      <Header 
        title="RevLux" 
        backgroundPic="headerPic.jpg"
      />

      <div className="home-content-section flex flex-col md:flex-row items-center md:items-start px-4 md:px-8 py-8 max-w-screen-xl mx-auto">
        <div className="carousel-container w-full md:w-1/2 md:mr-40">
          <Carousel items={carouselData} />
        </div>
        
        <TextBox
          companyLine="Driven by Excellence, Designed for Dreamers"
          textContent="RevLux redefines the art of luxury car rentals, 
          offering a meticulously curated fleet of high-performance 
          vehicles designed to exceed expectations. From sleek sports 
          cars that deliver exhilarating drives to sophisticated sedans 
          crafted for ultimate comfort, we provide an unmatched 
          experience for every journey. Whether you’re celebrating a 
          special occasion, making a statement at a corporate event, or
           simply indulging in the thrill of luxury, our commitment to 
           excellence ensures your experience is seamless, personalized, 
           and unforgettable."
        />
      </div>
      <Footer
        logoSrc="./images/carLogo.png"
        copyText="© 2024 RevLux. All rights reserved."
        link="#"
      />
    </div>
  );
}

export default Home;