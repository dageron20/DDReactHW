import React from 'react';
import Header from '../../components/header/header';
import Filter from '../../components/filter/filter';
import Board from '../../components/board/board';
import { AppRoute } from '../../const';
import { events } from '../../components/store/index';
import { observer } from 'mobx-react-lite';

const Main = observer(() => {

    const { filtredData } = events;

    return (
        <>
            <Header mode={AppRoute.MAIN}/>
            <section className="main__wrapper">
                <Filter ShowButton={true} />
                <Board events={filtredData} ShowSorting={true} />
            </section>
        </>
    )
})

export default Main;