import { Header } from "../../molecules";
import Sidebar from "../..//molecules/sidebar";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <Header />
      <div className="main-container container-fluid">
        <div className="page-container">
          <Sidebar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
