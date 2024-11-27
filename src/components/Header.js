import React from "react";

const Header = ({title, backgroundPic}) => {
    return (
        <header className="header text-center bg-cover bg-center text-white" style={{ backgroundImage: `url(./images/${backgroundPic})`}}>
        <h1 className="headTxt font-bolder">{title}</h1>
    </header>
    );
}
export default Header;