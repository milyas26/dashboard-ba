import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setIsSidebarCompact } from "../../../redux/slices/mainSlice";
import React from "react";

const Header = () => {
  const { isSidebarCompact } = useAppSelector((state: any) => state.main);
  const [openHeader, setOpenHeader] = React.useState("");
  const dispatch = useAppDispatch();
  return (
    <div>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="navbar-container">
            {/* <!-- Navbar Barnd --> */}
            <div className="navbar-header pull-left">
              <a href="#" className="navbar-brand">
                <small>
                  <img src="../../../../assets/img/logo.png" alt="" />
                </small>
              </a>
            </div>
            <div
              className={`sidebar-collapse ${isSidebarCompact && "active"}`}
              id="sidebar-collapse"
            >
              <i
                className="collapse-icon fa fa-bars"
                onClick={() => dispatch(setIsSidebarCompact())}
              ></i>
            </div>
            <div className="navbar-header pull-right">
              <div className="navbar-account">
                <ul className="account-area">
                  <li className={openHeader === "login-area" ? "open" : ""}>
                    <a
                      className="login-area dropdown-toggle"
                      data-toggle="dropdown"
                      onClick={() =>
                        setOpenHeader(
                          openHeader === "login-area" ? "" : "login-area"
                        )
                      }
                    >
                      <div className="avatar" title="View your public profile">
                        <img src="../../../../assets/img/avatars/adam-jansen.jpg" />
                      </div>
                      <section>
                        <h2>
                          <span className="profile">
                            <span>David Stevenson</span>
                          </span>
                        </h2>
                      </section>
                    </a>
                    {/* <!--Login Area Dropdown--> */}
                    <ul className="pull-right dropdown-menu dropdown-arrow dropdown-login-area">
                      <li className="username">
                        <a>David Stevenson</a>
                      </li>
                      <li className="email">
                        <a>David.Stevenson@live.com</a>
                      </li>
                      {/* <!--Avatar Area--> */}
                      <li>
                        <div className="avatar-area">
                          <img
                            src="../../../../assets/img/avatars/adam-jansen.jpg"
                            className="avatar"
                          />
                          <span className="caption">Change Photo</span>
                        </div>
                      </li>
                      {/* <!--Avatar Area--> */}
                      <li className="edit">
                        <a href="profile.html" className="pull-left">
                          Profile
                        </a>
                        <a href="#" className="pull-right">
                          Setting
                        </a>
                      </li>
                      {/* <!--Theme Selector Area--> */}
                      <li className="theme-area">
                        <ul className="colorpicker" id="skin-changer">
                          <li>
                            <a
                              className="colorpick-btn"
                              href="#"
                              style={{ backgroundColor: "#5DB2FF" }}
                              rel="assets/css/skins/blue.min.css"
                            ></a>
                          </li>
                          <li>
                            <a
                              className="colorpick-btn"
                              href="#"
                              style={{ backgroundColor: "#2dc3e8" }}
                              rel="assets/css/skins/azure.min.css"
                            ></a>
                          </li>
                          <li>
                            <a
                              className="colorpick-btn"
                              href="#"
                              style={{ backgroundColor: "#03B3B2" }}
                              rel="assets/css/skins/teal.min.css"
                            ></a>
                          </li>
                          <li>
                            <a
                              className="colorpick-btn"
                              href="#"
                              style={{ backgroundColor: "#53a93f" }}
                              rel="assets/css/skins/green.min.css"
                            ></a>
                          </li>
                          <li>
                            <a
                              className="colorpick-btn"
                              href="#"
                              style={{ backgroundColor: "#FF8F32" }}
                              rel="assets/css/skins/orange.min.css"
                            ></a>
                          </li>
                          <li>
                            <a
                              className="colorpick-btn"
                              href="#"
                              style={{ backgroundColor: "#cc324b" }}
                              rel="assets/css/skins/pink.min.css"
                            ></a>
                          </li>
                          <li>
                            <a
                              className="colorpick-btn"
                              href="#"
                              style={{ backgroundColor: "#AC193D" }}
                              rel="assets/css/skins/darkred.min.css"
                            ></a>
                          </li>
                          <li>
                            <a
                              className="colorpick-btn"
                              href="#"
                              style={{ backgroundColor: "#8C0095" }}
                              rel="assets/css/skins/purple.min.css"
                            ></a>
                          </li>
                          <li>
                            <a
                              className="colorpick-btn"
                              href="#"
                              style={{ backgroundColor: "#0072C6" }}
                              rel="assets/css/skins/darkblue.min.css"
                            ></a>
                          </li>
                          <li>
                            <a
                              className="colorpick-btn"
                              href="#"
                              style={{ backgroundColor: "#585858" }}
                              rel="assets/css/skins/gray.min.css"
                            ></a>
                          </li>
                          <li>
                            <a
                              className="colorpick-btn"
                              href="#"
                              style={{ backgroundColor: "#474544" }}
                              rel="assets/css/skins/black.min.css"
                            ></a>
                          </li>
                          <li>
                            <a
                              className="colorpick-btn"
                              href="#"
                              style={{ backgroundColor: "#001940" }}
                              rel="assets/css/skins/deepblue.min.css"
                            ></a>
                          </li>
                        </ul>
                      </li>
                      {/* <!--/Theme Selector Area--> */}
                      <li className="dropdown-footer">
                        <a href="/login">Sign out</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
