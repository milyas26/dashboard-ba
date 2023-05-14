"use client";

import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../src/redux/hooks";
import { setIsSubMenuOpen } from "../../../../src/redux/slices/mainSlice";

interface MenuItems {
  id: string;
  label: string;
  icon?: string;
  url?: string;
  children?: Array<MenuItems>;
}

const Sidebar = () => {
  const { isSidebarCompact, subMenuOpen } = useAppSelector((state: any) => state.main);
  const dispatch = useAppDispatch();
  const path = useLocation().pathname;
  const navigate = useNavigate();

  const handleMenuOpen = (id: any) => {
    dispatch(setIsSubMenuOpen(id));
  };

  const menus = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "glyphicon glyphicon-home",
      url: "/dashboard",
    },
    {
      id: "nama-menu",
      label: "Nama Menu",
      icon: "fa fa-desktop",
      children: [
        {
          id: "submenu-1",
          label: "Submenu 1",
          url: "/dashboard/submenu-1",
        },
        {
          id: "submenu-2",
          label: "Submenu 2",
          url: "/dashboard/submenu-2",
        },
      ],
    },
  ];

  const renderMenuItem = (menuItem: MenuItems) => {
    const { id, label, icon, url, children } = menuItem;
    const isSubmenuOpen = subMenuOpen === id;
    return (
      <li
        key={id}
        className={`${isSubmenuOpen ? "open" : ""} ${path == url && "active"}`}
      >
        <a
          // href={children ? "#" : url}
          className={children ? "menu-dropdown" : ""}
          onClick={() => {
            handleMenuOpen(children ? id : "");
            if (url) {
              navigate(url);
            } 
          }}
        >
          <i className={`menu-icon ${icon}`}></i>
          <span className="menu-text">{label}</span>
          {children && <i className="menu-expand"></i>}
        </a>
        {children && (
          <ul
            className="submenu"
            style={{ display: isSubmenuOpen ? "block" : "none" }}
          >
            {children.map((child: MenuItems) => (
              <li key={child.id} className={`${path == child.url && "active"}`}>
                <a onClick={() => {
                  if(child.url) {
                    navigate(child.url);
                  }
                }}>
                  <span className="menu-text">{child.label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div
      className={`page-sidebar ${isSidebarCompact && "menu-compact"}`}
      id="sidebar"
    >
      <div className="sidebar-header-wrapper">
        <input type="text" className="searchinput" />
        <i className="searchicon fa fa-search"></i>
        <div className="searchhelper">
          Search Reports, Charts, Emails or Notifications
        </div>
      </div>
      <ul className="nav sidebar-menu">
        {menus.map((menu) => renderMenuItem(menu))}
      </ul>
    </div>
  );
};

export default Sidebar;
