import React from 'react';
import './assets/styles/projects.css'
import { Header, Sidebar } from './components/Frame'
import { ControlPanel } from './components/Project_Control'
import { ProjectTable } from './components/Projects_Table'

const App: React.FC = () => {
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

export default App;
