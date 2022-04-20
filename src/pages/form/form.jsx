import React from 'react';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import Board from '../../components/board/board';
import Event from '../../components/event/event';
import { AppRoute } from '../../const';

const Form = () => {
    return (
        <>
        <Header mode={AppRoute.MAIN} />
        <section className='main__wrapper'>
            <Filter ShowButton={false} />
            <Board AddEvent={true}/>
        </section>
        </>
    )
}

export default Form;