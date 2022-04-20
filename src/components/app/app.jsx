import React from 'react';
import Main from '../../pages/main/main';
import Archive from '../../pages/archive/archive';
import Form from '../../pages/form/form';
import { AppRoute } from '../../const';

const App = () => {
    return (
        <Main mode={AppRoute.MAIN} />  
        // <Form mode={AppRoute.EVENT} /> 
        // <Archive mode={AppRoute.ARCHIVE} /> 
        
    )
}

export default App;