import React from "react";
import './header.scss';
// import ServiceList from "../service-list/service-list.js";

function Header({ name, work, photo, description }) {
  return (
    <div className='header'>
      <div className='header__photo-block'>
        <img className='header__photo' src={photo} alt={'face'} />
      </div>
      <p className='header__text-name'>{name}</p>
      <p className='header__text-work'>{work}</p>
      <div className='header__description-block'>
        <p className='header__text-description'>{description}</p>
      </div>
    </div>
  );
}

export default Header;