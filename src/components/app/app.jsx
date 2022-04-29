import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../../pages/main/main';
import Archive from '../../pages/archive/archive';
import Form from '../../pages/form/form';
import { AppRoute } from '../../const';
import Notfound from '../../pages/notfound/notfound';

const App = ({events}) => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>     
                    <Main events={events} />           
                </Route>     

                <Route events={events} path={AppRoute.ARCHIVE} exact>
                    <Archive events={events} />             
                </Route> 

                <Route path={AppRoute.EVENT} exact>
                    <Form events={events} />
                </Route>  

                <Route component={Notfound}>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;