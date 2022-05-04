import { observer } from 'mobx-react-lite';
import React from 'react';
import { events } from '../../components/store/index';
import { action } from 'mobx';

const Sorting = observer(() => {

  const handleFiltred2 = action((e) => {
    events.filtredData = events[e.target.value]
  });

    return (
        <div className="board__filter-list">
            <span className="board__filter--title">Сортировка:</span>
            <input
              type="radio"
              id="board__filter-default"
              className="board__filter visually-hidden"
              name="board-filter"
              onChange={handleFiltred2}
              value={"defDate"}
            />
            <label htmlFor="board__filter-default" className="board__filter-label">По умолчанию</label>
            <input
              type="radio"
              id="board__filter-new"
              className="board__filter visually-hidden"
              name="board-filter"
              value={"newDate"}
              onChange={handleFiltred2}
            />
            <label htmlFor="board__filter-new" className="board__filter-label">Сначала новые</label>
            <input
              type="radio"
              id="board__filter-old"
              className="board__filter visually-hidden"
              name="board-filter"
              value={"oldDate"}
              onChange={handleFiltred2}
            />
            <label htmlFor="board__filter-old" className="board__filter-label">Сначала старые</label>
          </div>
    )
})

export default Sorting;