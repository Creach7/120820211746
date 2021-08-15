import React from 'react';
import './service-list-item.scss'

function ServiceListItem({ name, count, proc, larg }) {
  const divStyle = {
    width: `${proc}%`,
    backgroundColor: (larg) ? `#B1E19B` : `#ACE2F8`,
  }
  return (
    <div className="container row">
      <div className='bg' style={divStyle}></div>
      <p className='list-item__text-name'>
        {name}
      </p>
      <p className='list-item__text_count'>
        {count}
      </p>
    </div>
  );
}

export default ServiceListItem;