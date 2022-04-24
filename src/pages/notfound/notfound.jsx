import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => {
    return (
        <>
            <h1>
                404 PAGE NOT FOUND
            </h1>
            <p>
                Кажется, вы заблудились...
            </p>
            <Link to='/'>
                <button type='button'> 
                    Вернутся назад
                </button>
            </Link>
            

        </>
    )
}

export default Notfound;