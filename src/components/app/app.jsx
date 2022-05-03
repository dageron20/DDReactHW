import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../../pages/main/main';
import Archive from '../../pages/archive/archive';
import Form from '../../pages/form/form';
import { AppRoute } from '../../const';
import Notfound from '../../pages/notfound/notfound';
import { observer } from 'mobx-react-lite';
import { events } from '../../components/store/index';

const App = observer(() => {

    const { data } = events;

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>     
                    <Main events={data} />           
                </Route>     

                <Route  path={AppRoute.ARCHIVE} exact>
                    <Archive />             
                </Route> 

                <Route path={AppRoute.EVENT} exact>
                    <Form events={data} />
                </Route>  

                <Route component={Notfound}>
                </Route>
            </Switch>
        </BrowserRouter>
    )
})

export default App;