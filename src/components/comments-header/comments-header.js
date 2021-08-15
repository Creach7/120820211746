import './comments-header.scss';
import React from 'react';
import Like from './like.svg';
import Comment from './comment.svg';

function CommentsHeader({ onChangeDisplay, display, likesCount, commentsCount }) {
  return (
    <div className='container row marbot'>
      <div className='container row'>
        <a
          className={display ? 'comments-header__text_press' : 'comments-header__text_unpress'}
          onClick={(e) => {
            e.preventDefault();
            onChangeDisplay(true);
          }}
          href='/'
        >
          Последние отзывы
        </a>
        <a
          className={!display ? 'comments-header__text_press' : 'comments-header__text_unpress'}
          onClick={(e) => {
            e.preventDefault();
            onChangeDisplay(false);
          }}
          href='/'
        >
          Все отзывы
        </a>
      </div>
      <div className='container row'>
        <div className='container row mar like'>
          <img className='' src={Like} alt='like' />
          <p className='text_count'>
            {likesCount}
          </p>
        </div>
        <div className='container row comment'>
          <img className='' src={Comment} alt='comment' />
          <p className='text_count'>
            {commentsCount}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CommentsHeader;