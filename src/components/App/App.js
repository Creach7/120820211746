import './App.scss';
import React from 'react';
import Header from '../header/header'
import Comments from '../comments/comments';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worker: {
        name: 'Вероника Ростова',
        work: 'Менеджер по продажам',
        photo: `${process.env.PUBLIC_URL}/images/photo.png`,
        description: 'Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны',
        services: [
          {
            id: 2,
            name: 'Пакетные туры',
            count: 3
          },
          {
            id: 3,
            name: 'Отели',
            count: 1
          },
          {
            id: 1,
            name: 'Ручное бронирование',
            count: 11
          },
        ]
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Header worker={this.state.worker} />
        <Comments/>
      </div>
    );
  }
}

export default App;
