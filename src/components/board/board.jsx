import React from "react";
import Card from '../card/card';
import Loadmore from "../load-more/load-more";
import Sorting from "../sorting/sorting";
import Event from "../event/event";

const Board = ({ShowSorting, AddEvent}) => {
    return (
        <section class="board">
            {
                ShowSorting && <Sorting />
            }
            {
                AddEvent ?
                <Event /> :
                <>
                <div className="board__events">
                    <Card />
                </div>
                <Loadmore />
                </>           
            }
            
        </section>
    )
}

export default Board;