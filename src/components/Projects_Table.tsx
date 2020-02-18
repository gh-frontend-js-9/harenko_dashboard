import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
let moment = require('moment');

let userToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'

type Resp = {
  response: [];
}

export class GetAllProjects extends React.Component<{}, Resp> {
  constructor(props: any) {
    super(props);
    this.state = {
      response: []
    };
  }

  componentDidMount() {
    fetch('https://geekhub-frontend-js-9.herokuapp.com/api/projects/', {
      method: 'GET',
      headers: {
        'x-access-token': userToken
      }
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          response: response,
        })
      });
  }

  render() {
    const project = this.state.response.map((project: any) => {
        return (
        <tr className="table-row">
          <td className="table-title">{project.title}<br />
            <span className="table-subtitle">{project.company}</span></td>
          <td>{project.cost}</td>
          <td>{moment(project.deadline).format('DD MMMM YYYY')}<br />
            <span className="table-subtitle">{moment(project.created_at, 'YYYYMMDD').fromNow()}</span></td>
          <td>{project.timeSpent} hours</td>
          <td className="table-progressbar">{project.progress}%
            <ProgressBar now={project.progress} />
          </td>
          <td>{project.status}</td>
          <td className="table-userinfo">
            <div className="user-profile-block_user-photo"></div>
            <div>
            {project.assigned ? project.assigned.name : 'User'}<br />
            <span className="table-subtitle">{project.assigned ? project.assigned.position : 'Frontend Developer'}</span>
            </div>
            </td>
        </tr>
    )})

    return (
      <>
        {project}
      </>
    )
  }
}



export const ProjectTable: React.FC = () => {
  return (
    <div className="table-area">
      <table id="table">
        <thead className="table-head">
          <tr>
            <th>Project title</th>
            <th>Value</th>
            <th>Deadline</th>
            <th>Time spent</th>
            <th>Progress</th>
            <th>Status</th>
            <th>Assigned to</th>
          </tr>
        </thead>

        <tbody>
          <GetAllProjects />
        </tbody>
      </table>
    </div>
  )
}
