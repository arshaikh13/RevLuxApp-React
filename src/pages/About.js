import '../App.css'; 
import Header from "../components/Header"; 
import Footer from '../components/Footer';
import accordionData from '../components/AccordionData';
import Accordion from '../components/Accordion';
import ShowRoomGallery from '../components/ShowRoom';

const About = () => {
  return (
    <div className="App">
      <Header 
        title="Our Purpose" 
        backgroundPic="headerPic.jpg"
      />

      <div className='accordionContain'>
        {accordionData.map((item, index) => (
          <Accordion
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>

      <h1 className='aboutHeader'>Explore Our Services</h1>

      <ShowRoomGallery/>

      <Footer
        logoSrc="./images/carLogo.png"
        copyText="© 2024 RevLux. All rights reserved."
        link="#"
      />
    </div>
  );
}

export default About;