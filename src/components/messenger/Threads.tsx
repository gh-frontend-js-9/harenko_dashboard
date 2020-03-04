import React from 'react'
import { userToken, userName } from '../User'
let moment = require('moment');

type Resp = {
    response: [],
}

export class AllThreads extends React.Component<object, Resp> {
    constructor(props: object) {
        super(props);
        this.state = {
            response: []
        };
    }

    componentDidMount() {
        fetch('https://geekhub-frontend-js-9.herokuapp.com/api/threads?sort=desc', {
            method: 'GET',
            mode: 'cors',
            headers: {
                'x-access-token': userToken
            },
        })
            .then(response => response.json())
            .then(response => {
                this.setState({ response: response })
            })
    }

    render() {
        const threads = this.state.response.map((threads: any) => {
            return (
                <div className="message-block">
                    <div className="message-block_user-area">
                        <div className="message-block_user-info">
                            <a className="message-block_user-photo_first"></a>
                            <span className="message-block_username">
                                {threads.users[0].name == userName ? threads.users[1].name : threads.users[0].name}
                            </span>
                        </div>
                        <span className="message-block_date">{moment(threads.updated_at).format('D MMMM')}</span>
                    </div>
                    <span className="message-block_txt">{threads.message == null ? "*empty*" : threads.message.body}</span>
                </div>
            )
        })
        return (
            <>
                {threads}
            </>
        )
    }
}