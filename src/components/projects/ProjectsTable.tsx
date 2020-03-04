import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { ControlPanel } from './ProjectControl';
import { userToken } from '../User';
let moment = require('moment');

type Resp = {
  response: [],
}

type Project = {
  title: string,
  company: string,
  cost: string,
  deadline: string,
  created_at: string,
  timeSpent: string,
  progress: number,
  status: string,
  assigned: {
    name: string,
    position: string
  },
}

export class Projects extends React.Component<object, Resp> {
  constructor(props: object) {
    super(props);
    this.state = {
      response: []
    };
  }

  componentDidMount() {
    fetch('https://geekhub-frontend-js-9.herokuapp.com/api/projects/', {
      method: 'GET',
      mode: 'cors',
      headers: {
          'x-access-token': userToken
      },
  })
  .then(response => response.json())
  .then(response => {
    this.setState({response: response})
  })
  }

  render() {
    const project = this.state.response.map((project: Project) => {
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
      )
    })

    return (
      <div className="screen-block">
        <ControlPanel allProjects={this.state.response.length} />
        <div className="table-area">
          <table>
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
              {project}
            </tbody>
          </table>
        </div>
      </div>

    )
  }
}
