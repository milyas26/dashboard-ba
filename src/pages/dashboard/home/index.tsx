import React from "react";
import { DashboardLayout } from "../../../components";
import { toast } from "react-toastify";

const HomeDashboard = () => {
  return (
    <main>
      <DashboardLayout>
        <div className="page-content">
          <div className="page-breadcrumbs">
            <ul className="breadcrumb">
              <li>
                <i className="fa fa-home"></i>
                <a href="#">Home</a>
              </li>
              <li className="active">Dashboard</li>
            </ul>
          </div>

          <div className="page-header position-relative">
            <div className="header-title">
              <h1>Dashboard</h1>
            </div>
          </div>

          <div className="page-body">
            <h2>WELCOME</h2>

            <div className="flex items-center">
              <div className="mr-2 mb-2">
                <a
                  className="mr-2 btn btn-info"
                  onClick={() => toast.info("Info Toast")}
                >
                  Toast Info
                </a>
              </div>

              <div className="mr-2 mb-2">
                <a
                  className="mr-2 btn btn-success"
                  onClick={() => toast.success("Success Toast")}
                >
                  Toast Success
                </a>
              </div>
              <div className="mr-2 mb-2">
                <a
                  className="mr-2 btn btn-warning"
                  onClick={() => toast.warning("Warning Toast")}
                >
                  Toast Warning
                </a>
              </div>
              <div className="mr-2 mb-2">
                <a
                  className="mr-2 btn btn-danger"
                  onClick={() => toast.error("Error Toast")}
                >
                  Toast Danger
                </a>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </main>
  );
};

export default HomeDashboard;
