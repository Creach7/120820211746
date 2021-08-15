import './App.scss';
import React from 'react';
import Header from '../header/header'
import Comments from '../comments/comments';
import ServiceList from '../service-list/service-list';
import CommentsSend from '../comments-send/comments-send';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      ],
      comments: [
        {
          id: 1,
          name: 'Самуил',
          date: new Date('2011-10-13T10:36:03.769Z'),
          text: `Привет, Верунь! ниче себе ты крутая. фотка класс!!!!`
        },
        {
          id: 2,
          name: 'Лилия Семёновна',
          date: new Date('2011-10-14T10:36:03.769Z'),
          text: `Вероника, здравствуйте! Есть такой вопрос: Особый вид 
            куниц жизненно стабилизирует кинетический момент, это и есть 
            всемирно известный центр огранки алмазов и торговли бриллиантами?`
        },
        {
          id: 3,
          name: 'Лилия Семёновна',
          date: new Date('2011-10-14T10:40:03.769Z'),
          text: `Вероника, здравствуйте! Есть такой вопрос: Особый вид 
            куниц жизненно стабилизирует кинетический момент?`
        },
        {
          id: 4,
          name: 'Гость',
          date: new Date('2005-10-14T10:40:03.769Z'),
          text: `Мой id - 4`
        }
      ],
      commentsLastId: 4,
      likesCount: 131,
      commentsCount: 4
    }
  }
  onAdd = (text) => {
    const List = this.state.comments;
    List.push({
      id: this.state.commentsLastId + 1,
      name: 'Гость',
      date: new Date(),
      text: text
    });
    List.sort((a, b) => a.date - b.date);

    this.setState(state => {
      return {
        comments: List,
        commentsLastId: state.commentsLastId + 1,
        commentsCount: state.commentsCount + 1
      }
    })
  }
  render() {
    const { name, work, photo, description, services, comments, likesCount, commentsCount } = this.state;
    return (
      <div className="App container column">
        <Header
          name={name}
          work={work}
          photo={photo}
          description={description}
        />
        <ServiceList services={services} />
        <Comments comments={comments} likesCount={likesCount} commentsCount={commentsCount} />
        <CommentsSend onAdd={this.onAdd} />
      </div>
    );
  }
}

export default App;
