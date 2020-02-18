import React from 'react';

export const ControlPanel: React.FC = () => {
    return (
        <div className="project-control-block">
        <div className="project-btns-block">
            <span className="projects-block_txt">All Projects</span>
            <span className="workflow-block_txt">Workflow</span>
        </div>
        <div className="filter-block">
            <span className="filter-block_txt">Show projects:</span>
            <button className="filter-block_select">All<div className="filter-block_arrow"></div></button>
    </div>
    </div>
    )
}