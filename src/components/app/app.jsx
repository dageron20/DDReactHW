import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../../pages/main/main';
import Archive from '../../pages/archive/archive';
import Form from '../../pages/form/form';
import { AppRoute } from '../../const';
import Notfound from '../../pages/notfound/notfound';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route path='/' exact component={Main}>                
                </Route>     

                <Route path={AppRoute.ARCHIVE} exact component={Archive}>             
                </Route> 

                <Route path={AppRoute.EVENT} exact component={Form}>
                </Route>  

                <Route component={Notfound}>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;