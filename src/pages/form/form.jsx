import React from 'react';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import Board from '../../components/board/board';
import { useLocation } from 'react-router-dom';

const Form = ({events}) => {
    const location = useLocation();
    return (
        <>
        <Header mode={location.pathname} />
        <section className='main__wrapper'>
            <Filter ShowButton={false} />
            <Board AddEvent={true} events={events} />
        </section>
        </>
    )
}

export default Form;