import React from 'react';
import '../assets/styles/projects.css'
import {Header, Sidebar} from './Frame'
import {Projects} from './ProjectsTable'

const Dashboard: React.FC = () => {
    return (
      <>
        <Header />
        <main className="main">
          <Sidebar />
          <Projects />
        </main>
      </>
    )
    }
  
  export default Dashboard;
  