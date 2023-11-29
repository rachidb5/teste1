import React from "react";
import { Dropdown, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//Images
import logo3 from '../../assets/images/brand/logo-3.png';
import logo from '../../assets/images/brand/logo.png';
import user1 from '../../assets/images/users/1.jpg';
import user2 from '../../assets/images/users/2.jpg';
import user4 from '../../assets/images/users/4.jpg';
import user15 from '../../assets/images/users/15.jpg';
import user8 from '../../assets/images/users/8.jpg';

export function Header() {

  // FullScreen
  var elem: any = document.documentElement;
  var i = true
  const Fullscreen: any = (vale: any) => {
    switch (vale) {
      case true:
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
          elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
          elem.msRequestFullscreen();
        }
        i = false
        break;
      case false:
        document.exitFullscreen()
        i = true
        break;
    }
  }

  //dark-mode
  // const Darkmode = () => {
  //   document.querySelector(".app")?.classList.toggle("dark-mode");
  // };
  const Darkmode = () => {
    if (document.querySelector(".app")?.classList.contains('dark-mode')) {
      document.querySelector(".app")?.classList.remove('dark-mode');
      let DarkMenu1: any = document.querySelector("#myonoffswitch7") //dark -theme
      DarkMenu1.checked = true;
      let DarkMenu2: any = document.querySelector("#myonoffswitch14") //dark -menu
      DarkMenu2.checked = true;
      let DarkMenu3: any = document.querySelector("#myonoffswitch10") //dark -header
      DarkMenu3.checked = true;
    }
    else {
      document.querySelector(".app")?.classList.add('dark-mode');
      let DarkMenu1: any = document.querySelector("#myonoffswitch7") //dark -theme
      DarkMenu1.checked = true;
      let DarkMenu2: any = document.querySelector("#myonoffswitch14") //dark -menu
      DarkMenu2.checked = true;
      let DarkMenu3: any = document.querySelector("#myonoffswitch10") //dark -header
      DarkMenu3.checked = true;
    }
  }

  //leftsidemenu
  const openCloseSidebar = () => {
    document.querySelector(".app")?.classList.toggle("sidenav-toggled");
  };
  //rightsidebar
  const openCloseSidebarright = () => {
    document.querySelector(".sidebar-right")?.classList.toggle("sidebar-open");
  };

  // responsivesearch
  const responsivesearch = () => {
    document.querySelector(".header-search")?.classList.toggle("show");
  };
  //swichermainright
  const swichermainright = () => {
    document.querySelector(".demo_changer")?.classList.toggle("active");
    let demoChanger: any = document.querySelector(".demo_changer")
    demoChanger.style.right = "0px";
  };
  return (
    <Navbar expand="md" className="app-header header sticky">
      <Container fluid className="main-container">
        <div className="d-flex align-items-center">
          <Link
            aria-label="Hide Sidebar"
            className="app-sidebar__toggle"
            to="#"
            onClick={() => openCloseSidebar()}
          ></Link>
          <div className="responsive-logo">
            <Link
              to={`${import.meta.env.BASE_URL}dashboard`}
              className="header-logo"
            >
              <img
                src={logo3}
                className="mobile-logo logo-1"
                alt="logo"
              />
              <img
                src={logo}
                className="mobile-logo dark-logo-1"
                alt="logo"
              />
            </Link>
          </div>
          <Link
            className="logo-horizontal "
            to={`${import.meta.env.BASE_URL}dashboard`}
          >
            <img
              src={logo}
              className="header-brand-img desktop-logo"
              alt="logo"
            />
            <img
              src={logo3}
              className="header-brand-img light-logo1"
              alt="logo"
            />
          </Link>
          <div className="d-flex order-lg-2 ms-auto header-right-icons">
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className="navresponsive-toggler d-lg-none ms-auto"
              type="button"
            >
              <span className="navbar-toggler-icon fe fe-more-vertical text-dark"></span>
            </Navbar.Toggle>

            <div className="navbar navbar-collapse responsive-navbar p-0">
              <Navbar.Collapse
                className="navbar-collapse"
                id="navbarSupportedContent-4"
              >
                <div className="d-flex order-lg-2">
                  <div className="dropdown d-md-flex">
                    <Link
                      to="#"
                      className="nav-link icon theme-layout nav-link-bg layout-setting"
                      onClick={() => Darkmode()}
                    >
                      <span className="dark-layout">
                        <i className={`fe ${"fe-moon"}`}></i>
                      </span>
                      <span className="light-layout">
                        <i className={`fe ${"fe-sun"}`}></i>
                      </span>
                    </Link>
                  </div>
                  <div className="dropdown d-md-flex header-settings">
                  </div>
                </div>
              </Navbar.Collapse>
            </div>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
