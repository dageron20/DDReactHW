import React from 'react';

const Loadmore = ({handleLoadMore}) => {
    return (
        <button onClick={handleLoadMore} className='load-more' type="button">Загрузить еще</button>
    )
}
export default Loadmore;