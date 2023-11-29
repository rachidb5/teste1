import React, { Fragment } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Dashboard from './components/Dashboard/Dashboard';

import './index.scss';

const container: HTMLElement | any = document.getElementById('root');
const root = createRoot(container);

root.render(

  <Fragment>
    <BrowserRouter>
      <Routes>
        {/* MAin App Route */}
        <Route path={""} element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path={"/Dashboard"} element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Fragment>,
)
              