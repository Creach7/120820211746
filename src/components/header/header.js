import React from "react";
import './header.scss';
import ServiceList from "../service-list/service-list.js";

function Header({ worker }) {
  return (
    <div>
      <div className='photo-block margin-left-17 margin-top-12 width-124'>
        <img className='photo' src={worker.photo} alt={'face'} />
      </div>
      <p className='text bold fs16 lh20 margin-left-130'>{worker.name}</p>
      <p className='text color#808080 fs12 lh20 margin-left-130'>{worker.work}</p>
      <div className='margin-left-85 description-block'>
        <p className='text fs14 lh20 margin-left-45 margin-bottom-10 margin-top-10'>{worker.description}</p>
      </div>
      <ServiceList services={worker.services} />
    </div>
  );
}

export default Header;