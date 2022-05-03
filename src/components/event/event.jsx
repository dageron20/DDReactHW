import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { AppRoute } from '../../const';
import moment from 'moment';
import 'moment/locale/ru';
import { events } from '../../components/store/index';


const Event = () => {
  const { id } = useParams();
  const curEvent = 
  ( 
    id ?
    events.data.filter(item => item._id === id)[0] : {
      theme:'Введите вашу тему',
      comment:'Введите ваш коммент',
      date: new Date()
    }
  );

  const [event, setEvent] = useState({  
    theme: `${curEvent.theme}`,
    comment: `${curEvent.comment}`,
    date: moment(curEvent.date).format("YYYY-MM-DDTkk:mm"),
  });

  const handleFieldChange = (evt) => {
    const { name, value } = evt.target;
    setEvent({...event, [name]: value})
  }

  const handleToEdit = (evt) => {
    evt.preventDefault();
    events.editEvent({
      id: curEvent._id,
      theme: event.theme,
      comment: event.comment,
      date: event.date,
      favorite: event.favorite,
      archive: event.archive,
    });
    document.location.href = AppRoute.MAIN;
  }

  const handleToAdd = (evt) => {
    evt.preventDefault();
    events.addEvent({
      id: curEvent._id,
      theme: event.theme,
      comment: event.comment,
      date: event.date,
      favorite: event.favorite,
      archive: event.archive,
    });
    document.location.href = AppRoute.MAIN;
  }

  console.log(event);

    return (
        <form 
        className="board__form"
        onSubmit={id ? handleToEdit : handleToAdd}
        >
            <h2 className="board__title">{id ? 'Редактирование события' : 'Добавление события'}</h2>
            <fieldset className="board__field board__field--theme">
              <label htmlFor="theme" className="board__label board__label--theme">Тема:</label>
              <textarea
                type="text"
                className="board__input board__input--theme"
                name="theme"
                onChange={handleFieldChange}
                value={event.theme}
                required
              ></textarea>
            </fieldset>
            <fieldset className="board__field board__field--comment">
              <label htmlFor="comment" className="board__label board__label--comment">Комментарий:</label>
              <textarea
                type="text"
                className="board__input board__input--comment"
                name="comment"
                onChange={handleFieldChange}
                value={event.comment}
                required
              ></textarea>
            </fieldset>
            <fieldset className="board__field board__field--date">
              <label htmlFor="date" className="board__label board__label--date">Дата:</label>
              <input
                type="datetime-local"
                className="board__input board__input--date"
                onChange={handleFieldChange}
                value={event.date}
              />
            </fieldset>
            <div className="btns">
              <button type="submit" className="btn-submit">{id ? 'Сохранить' : 'Добавить'}</button>
              <button type="reset" className="btn-reset">Очистить</button>
            </div>
          </form>
    )
}

export default Event;