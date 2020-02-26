import React from 'react';
import '../assets/styles/projects.css'
import { Header, Sidebar } from './Frame'
import { ControlPanel } from './Project_Control'
import { ProjectTable } from './Projects_Table'

const Dashboard: React.FC = () => {
    return (
      <>
        <Header />
        <main className="main">
          <Sidebar />
          <div className="screen-block" id="screen">
            <ControlPanel />
            <ProjectTable />
          </div>
        </main>
      </>
    )
  }
  
  export default Dashboard;
  