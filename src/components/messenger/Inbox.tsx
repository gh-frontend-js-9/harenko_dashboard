import React from 'react'
import { AllThreads } from './Threads'

export class Messenger extends React.Component<object, {}> {
    constructor(props: object) {
        super(props);
        this.state = {
            response: []
        };
    }

    render() {
        return (
            <div className="screen-block">
                <div className="message-control-block">
                    <div className="message-btns-block">
                        <div className="inbox-block">
                            <a className="inbox-block_img"></a>
                            <span className="inbox-block_txt">Inbox</span>
                        </div>
                        <div className="sent-block">
                            <a className="sent-block_img"></a>
                            <span className="sent-block_txt">Sent</span>
                        </div>
                        <div className="trash-block">
                            <a className="trash-block_img"></a>
                            <span className="trash-block_txt">Trash</span>
                        </div>
                    </div>
                    <div className="filter-block">
                        <span className="filter-block_txt">Filter messages:</span>
                        <button className="filter-block_select">Date<div className="filter-block_arrow"></div></button>
                    </div>
                </div>
                <div className="messages-list-block">
                    <div className="messages-scroll-block">
                        <AllThreads />
                    </div>
                    <div className="conversation-btn-block">
                        <button className="conversation-btn-block_btn"><span className="conversation-btn-block_btn_plus">+</span><span className="conversation-btn-block_btn_txt">New conversation</span></button>
                    </div>
                </div>
            </div>
        )
    }
}