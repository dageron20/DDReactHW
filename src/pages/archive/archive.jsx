import React from 'react';
import Board from '../../components/board/board';
import Header from '../../components/header/header';
import { useLocation } from 'react-router-dom';

import { events } from '../../components/store/index'

const Archive = () => {

    const { archiveData } = events
    const { pathname } = useLocation();

    return (
        <>
            <Header mode={pathname}/>
            <section className='main__wrapper'>
                <Board ShowSorting={false} events={archiveData} />
            </section>
        </>
    )
}

export default Archive;