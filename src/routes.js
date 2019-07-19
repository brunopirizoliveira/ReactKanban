import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Wrapper from './pages/wrapper/wrapper';

const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route path="/" component={Wrapper} />
        </Switch>
    </BrowserRouter>

);

export default Routes;