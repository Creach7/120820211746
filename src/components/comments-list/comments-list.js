import React from 'react';
import CommentsListItem from '../comments-list-item/comments-list-item';
import './comments-list.scss';

function CommentsList({ display, comments }) {
  let list = comments;
  if (display) {
    list = list.slice(-3);
  }
  return (
    <div>
      <ul className='comments-list'>
        {
          list.map((comment) => {
            return (
              <li key={comment.id}>
                <CommentsListItem name={comment.name} date={comment.date} text={comment.text} />
              </li>
            );
          })
        }
      </ul>
      {/* <CommentsListItem /> */}
    </div>
  )
}

export default CommentsList;