import React from 'react';
import '../App.css'; 

const ShowRoomGallery = () => {
    return (
        <div className="gallery">
            <div className="gallery-item">
                <img src="./images/showroom2.jpg" alt="Image 1" />
            </div>
            <div className="gallery-item">
                <img src="./images/showroom1.jpg" alt="Image 2" />
            </div>
            <div className="gallery-item">
                <img src="./images/showroom3.jpg" alt="Image 3" />
            </div>
            <div className="gallery-item">
                <img src="./images/showroom4.jpg" alt="Image 4" />
            </div>
            <div className="gallery-item">
                <img src="./images/showroom5.jpg" alt="Image 5" />
            </div>
            <div className="gallery-item">
                <img src="./images/showroom6.jpg" alt="Image 6" />
            </div>
        </div>
    );
};

export default ShowRoomGallery;
