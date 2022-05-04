import React from "react";
import Card from '../card/card';
import Loadmore from "../load-more/load-more";
import Sorting from "../sorting/sorting";
import Event from "../event/event";


const Board = ({ShowSorting, AddEvent, events}) => {

    const [step, setStep] = React.useState(3); 

    const handleLoadMore = () => {
        events.length >= step ? setStep(step + 1) : setStep(events.length);
    }

    return (
        <section className="board">
            {
                ShowSorting && <Sorting />
            }
            {
                AddEvent ? <Event events={events}/> :
                <>
                    <div className="board__events">
                        { events.slice(0, step).map(event => <Card {...event} key={event._id} events={events}/> )}
                    </div>
                    <Loadmore handleLoadMore={handleLoadMore} />
                </>           
            }
            
        </section>
    )
}

export default Board;