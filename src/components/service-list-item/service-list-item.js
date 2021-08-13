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
      <p className='text fs13 lh26 abs margin-left-6'>
        {name}
      </p>
      <p className='text bold fs13 lh15 margin-right-40 margin-left-30'>
        {count}
      </p>
    </div>
  );
}

export default ServiceListItem;