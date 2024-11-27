import '../App.css'; 
import Header from "../components/Header"; 
import CarsList from '../components/CarsList';
import Footer from '../components/Footer';

const Cars = () => {
  return (
    <div className="App">
      <Header 
        title="Available Cars" 
        backgroundPic="headerPic.jpg"
      />

      <CarsList/>

      <Footer
        logoSrc="./images/carLogo.png"
        copyText="© 2024 RevLux. All rights reserved."
        link="#"
      />
    </div>
  );
}

export default Cars;