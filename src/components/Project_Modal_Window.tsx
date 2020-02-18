import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App'

let userToken: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'

export function ModalWindow() {
    ReactDOM.render(
        <>
            <div className="modal-filter">
                <form className="modal-filter_block">
                    <p className="project-profile-title">New Project</p><br />
                    <label className="project-profile-label">Title: <input className="project-profile-input" type="text" /></label>
                    <label className="project-profile-label">Company: <input className="project-profile-input" type="text" /></label>
                    <label className="project-profile-label">Cost: <input className="project-profile-input" type="text" /></label>
                    <label className="project-profile-label">Deadline: <input className="project-profile-input" type="date" /></label>
                    <div className="project-profile-btn-block">
                        <button className="project-profile-btn" type="submit">Accept</button>
                        <button className="project-profile-btn" onClick={() => {ReactDOM.render (<App />, document.getElementById('root')) }}>Cancel</button>
                    </div>
                </form>
            </div>
        </>,
        document.getElementById('root')
    )
}

function NewProjectSetter() {
    fetch('https://geekhub-frontend-js-9.herokuapp.com/api/projects/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': userToken
          },
          body: JSON.stringify({
             

          }),
    }
    )
}