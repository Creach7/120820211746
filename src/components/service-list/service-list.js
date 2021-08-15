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
    <div className='service-list'>
      <div className='container row-reverse'>
        <p className='service-list__text-head'>Услуг</p>
      </div>
      <div className='service-list__service-block'>
        <ul className='list'>
          {
            services.map((ser) => {
              return (
                <li key={ser.id}>
                  <ServiceListItem name={ser.name} count={ser.count} proc={((ser.count / sum) * 100)} larg={(ser.id === id) ? true : false} />
                </li>
              );
            })
          }
        </ul>
      </div>
      <div className='container row'>
        <p className='service-list__text-all'>
          Всего
        </p>
        <p className='service-list__text-sum'>
          {sum}
        </p>
      </div>
    </div >
  );
}

export default ServiceList;