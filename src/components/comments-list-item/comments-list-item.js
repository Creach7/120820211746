import React from 'react';
import './comments-list-item.scss';

function CommentsListItem({ name, date, text }) {
  const monthNames =[
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря'
  ]
  return (
    <div>
      <div className='user-container'>
        <p className='comments-list-item__text-name'>{name}</p>
        <p className='comments-list-item__text-date'>{`${date.getDate()} ${monthNames[date.getMonth()]} ${date.getFullYear()}`}</p>
      </div>
      <p className='box sb10'>{text}</p>
    </div>
  )
}

export default CommentsListItem;