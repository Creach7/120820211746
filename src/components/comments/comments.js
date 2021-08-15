import './comments.scss';
import React from 'react';
import CommentsHeader from '../comments-header/comments-header';
import CommentsList from '../comments-list/comments-list';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayLastComments: true
    }
  }
  onChangeDisplay = (bool) => {
    this.setState({
      displayLastComments: bool
    });
  }
  render() {
    const { comments, likesCount, commentsCount } = this.props;
    return (
      <div className='comments-block'>
        <CommentsHeader
          onChangeDisplay={this.onChangeDisplay}
          display={this.state.displayLastComments}
          likesCount={likesCount}
          commentsCount={commentsCount}
        />
        <CommentsList
          display={this.state.displayLastComments}
          comments={comments} />
      </div>
    )
  }
}

export default Comments;