import { useNavigate } from "react-router-dom";
import { DashboardLayout } from "../../../components";
import { faker } from "@faker-js/faker";

export default function Submenu1() {
  const navigate = useNavigate();
  return (
    <main>
      <DashboardLayout>
        <div className="page-content">
          {/* <!-- Page Breadcrumb --> */}
          <div className="page-breadcrumbs">
            <ul className="breadcrumb">
              <li>
                <i className="fa fa-home"></i>
                <a onClick={() => navigate("/dashboard")}>Home</a>
              </li>
              <li className="active">Submenu 1</li>
            </ul>
          </div>
          
          <div className="page-body w-100">
            <div className="well with-header">
              <div className="header bg-warning">DATA PENGGUNA</div>
              <a
                className="btn btn-default purple"
                onClick={() =>
                  navigate("/dashboard/submenu-1/create")
                }
              >
                <i className="fa fa-plus"></i> Add
              </a>

              <table className="table table-bordered table-hover mt-2">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Family</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  {[1, 2, 3, 4, 5].map((item, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{faker.name.firstName()}</td>
                      <td>{faker.name.lastName()}</td>
                      <td>{faker.name.fullName()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </main>
  );
}
