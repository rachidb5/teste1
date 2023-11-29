import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../layouts/Footer/Footer';
import Header from '../layouts/Header/Header';
import Sidebar from '../layouts/SideBar/SideBar';

function App() {

  return (
    <Fragment>
    <div className="horizontalMenucontainer">
      <div className="page">
        <div className="page-main">
          <Header />
          <Sidebar />
          <div className="main-content app-content ">
            <div className="side-app">
              <div
                className="main-container container-fluid"
              >
                <Outlet />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </Fragment>
  )
}

export default App
