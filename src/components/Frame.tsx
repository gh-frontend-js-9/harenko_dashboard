import React from 'react';
import ModalWindow from './projects/ProjectModalWindow'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
    return (
        <header className="header">
            <a className="header-logo" ></a>
            <div className="user-block">
                <ModalWindow />
                <a className="user-block_search-btn" ></a>
                <a className="user-block_notification-btn" ></a>
                <div className="user-profile-block">
                    <div className="user-profile-block_user-photo"></div>
                    <a className="user-profile-block_user-menu-btn" ></a>
                </div>
            </div>
        </header>
    )
}

export const Sidebar: React.FC = () => {
    return (
        <div className="user-panel-block">
            <div className="panel-btn-block">
                <a className="panel-btn-block_home-btn" ></a>
                <Link className="panel-btn-block_menu-btn" to="/dashboard/projects"></Link>
                <a className="panel-btn-block_trending-btn" ></a>
                <Link className="panel-btn-block_message-btn" to="/dashboard/messages"></Link>
                <a className="panel-btn-block_friends-btn" ></a>
            </div>
        </div>
    )
}