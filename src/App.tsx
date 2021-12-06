import React, { FC } from 'react';
import { BrowserRouter as Routes, Route, Switch } from 'react-router-dom';
import MainPage from './components/pages/main-page';

const App: FC = () => (
  <Routes>
    <Switch>
      <Route path="/" component={MainPage} exact />
    </Switch>
  </Routes>
  );

export default App;
