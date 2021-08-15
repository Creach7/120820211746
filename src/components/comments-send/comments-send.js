import './comments-send.scss';
import React from 'react';

export default class CommentsSend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  onValueChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text !== '') {
      this.props.onAdd(this.state.text);
      this.setState({
        text: ''
      });
    }
  }
  handlerKeyUp = (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      this.onSubmit(e);
    }
  }
  render() {
    return (
      <div className='comments-send'>
        <form className='container column'
          onSubmit={this.onSubmit}>
          <textarea
            type='text'
            placeholder=''
            className='comments-send-input'
            onChange={this.onValueChange}
            onKeyUp={this.handlerKeyUp}
            value={this.state.text}
          />
          <button
            type='submit'
            className='comments-send-button'
          >
            Написать консультанту
          </button>
        </form >
      </div>
    )
  }
}