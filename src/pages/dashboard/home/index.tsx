import React from 'react'
import { DashboardLayout } from '../../../components'

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
          </div>
        </div>
      </DashboardLayout>
    </main>
  )
}

export default HomeDashboard