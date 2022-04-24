import React from 'react';
import Board from '../../components/board/board';
import Header from '../../components/header/header';
import { useLocation } from 'react-router-dom';

const Archive = () => {

    const location = useLocation();

    return (
        <>
            <Header mode={location.pathname}/>
            <section className='main__wrapper'>
                <Board ShowSorting={false} />
            </section>
        </>
    )
}

export default Archive;