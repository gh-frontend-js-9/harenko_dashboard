import React from 'react';

type ProjectsNumber = {
    allProjects: number
}

export class ControlPanel extends React.Component<ProjectsNumber> {
    constructor(props: ProjectsNumber) {
        super(props);
    }
    render() {
        return (
            <div className="project-control-block">
                <div className="project-btns-block">
                    <span className="projects-block_txt">All Projects({this.props.allProjects})</span>
                    <span className="workflow-block_txt">Workflow</span>
                </div>
                <div className="filter-block">
                    <span className="filter-block_txt">Show projects:</span>
                    <button className="filter-block_select">All<div className="filter-block_arrow"></div></button>
                </div>
            </div>
        )
    }

}