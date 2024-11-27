import '../App.css'; 
import Header from "../components/Header"; 
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <div className="App">
      <Header 
        title="Contact Us" 
        backgroundPic="headerPic.jpg"
      />

      <ContactForm
        header="Our Info"
        phone="(318) 665-4876"
        email="contact@revlux.com"
        address="355 MotorCross Way, San Francisco, California, 44783"
        hours="Monday - Friday: 9 AM - 6 PM"
        option1="General"
        option2="Rental"
        option3="Maintenance"
      />

      <Footer
        logoSrc="./images/carLogo.png"
        copyText="© 2024 RevLux. All rights reserved."
        link="#"
      />    
    </div>
  );
}

export default Contact;