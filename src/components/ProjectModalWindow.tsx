import React from 'react';
import { userToken, userId } from './User';

export class ModalWindow extends React.Component<any, any> {
    constructor(props: object) {
        super(props);
        this.state = {
            title: '',
            company: '',
            cost: '',
            deadline: '',
            assigned: '',
            isOk: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const name = event.target.name
        this.setState({
            [name]: event.target.value,
            assigned: userId
        });
    }

    handleSubmit(event: any) {
        fetch('https://geekhub-frontend-js-9.herokuapp.com/api/projects/', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': userToken
            },
            body: JSON.stringify(this.state),
        })
        event.preventDefault()
    }

    render() {
        const {title, company, cost, deadline, assigned} = this.props
        return (
            <>
                <button className="user-block_add-btn" onClick={() => this.setState({ isOk: true })}>
                    Add
                    <span className="add-btn_plus">+</span>
                </button>
                {this.state.isOk && (
                    <div>
                        <div className="modal-filter">
                            <form onSubmit={this.handleSubmit} className="modal-filter_block">
                                <p className="project-profile-title">New Project</p><br />
                                <label className="project-profile-label">Title: 
                                <input
                                onChange={this.handleChange}
                                className="project-profile-input" 
                                type="text" 
                                name="title"
                                value={this.state.title}
                                />
                                </label>
                                <label className="project-profile-label">Company: 
                                <input
                                onChange={this.handleChange}
                                className="project-profile-input"
                                type="text" 
                                name="company"
                                value={this.state.company}
                                />
                                </label>
                                <label className="project-profile-label">Cost:
                                <input 
                                onChange={this.handleChange}
                                className="project-profile-input"
                                type="text"
                                name="cost"
                                value={this.state.cost}
                                />
                                </label>
                                <label className="project-profile-label">Deadline:
                                <input
                                onChange={this.handleChange}
                                className="project-profile-input"
                                type="date"
                                name="deadline"
                                value={this.state.deadline}
                                />
                                </label>
                                <div className="project-profile-btn-block">
                                    <button className="project-profile-btn" type="submit">Accept</button>
                                    <button className="project-profile-btn" onClick={() => this.setState({ isOk: false })}>Cancel</button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </>
        )
    }
}