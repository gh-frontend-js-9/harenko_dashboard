import React from 'react';
import {Header, Sidebar} from './Frame'
import DashboardRouteMap from './DashboardRoutes'
import '../assets/styles/dashboard.css'

const Dashboard: React.FC = () => {
    return (
      <>
        <Header />
        <main className="main">
          <Sidebar />
          <DashboardRouteMap />
        </main>
      </>
    )
    }
  
  export default Dashboard;
  