import React from "react";
import Card from '../card/card';
import Loadmore from "../load-more/load-more";
import Sorting from "../sorting/sorting";
import Event from "../event/event";


const Board = ({ShowSorting, AddEvent, events}) => {
    return (
        <section className="board">
            {
                ShowSorting && <Sorting />
            }
            {
                AddEvent ? <Event events={events}/> :
                <>
                    <div className="board__events">
                        { events.map(event => <Card {...event} key={event._id} events={events}/> )}
                    </div>
                    <Loadmore />
                </>           
            }
            
        </section>
    )
}

export default Board;