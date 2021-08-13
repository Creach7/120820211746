import React from 'react';
import './service-list.scss'
import ServiceListItem from '../service-list-item/service-list-item';

function ServiceList({ services }) {
  services.sort((a, b) => {
    return b.count - a.count;
  });
  let sum = 0;
  let max = 0;
  let id;
  for (let ser of services) {
    sum += ser.count;
    if (ser.count > max) {
      max = sum;
      id = ser.id;
    }
  }
  return (
    <div className='margin-left-130 margin-top-13'>
      <div className='container row-reverse'>
        <p className='text fs13 lh15 margin-right-30'>Услуг</p>
      </div>
      <div className='bords margin-top-7 margin-bottom-9'>
        <ul>
          {
            services.map((ser) => {
              return (
                <li key={ser.id} className='item'>
                  <ServiceListItem name={ser.name} count={ser.count} proc={(ser.count / sum) * 100} larg={(ser.id === id) ? true : false} />
                </li>
              );
            })
          }
        </ul>
      </div>
      <div className='container row'>
        <p className='text bold fs16 lh26'>
          Всего
        </p>
        <p className='text bold fs16 lh15 margin-right-40'>
          {sum}
        </p>
      </div>
    </div >
  );
}

export default ServiceList;