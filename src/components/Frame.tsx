import React from 'react';
import {ModalWindow} from './Project_Modal_Window'

export const Header: React.FC = () => {
    return (
        <header className="header">
        <a className="header-logo" href="#"></a>
        <div className="user-block">
            <button onClick={ModalWindow} className="user-block_add-btn">Add<span className="add-btn_plus">+</span></button>
            <a className="user-block_search-btn" href="#"></a>
            <a className="user-block_notification-btn" href="#"></a>
            <div className="user-profile-block">
                <div className="user-profile-block_user-photo"></div>
                <a className="user-profile-block_user-menu-btn" href="#"></a>
            </div>
        </div>
    </header>
    )
}

export const Sidebar: React.FC = () => {
    return (
        <div className="user-panel-block">
            <div className="panel-btn-block">
            <a className="panel-btn-block_home-btn" href="#"></a>
            <a className="panel-btn-block_menu-btn" href="#"></a>
            <a className="panel-btn-block_trending-btn" href="#"></a>
            <a className="panel-btn-block_message-btn" href="#"></a>
            <a className="panel-btn-block_friends-btn" href="#"></a>
            </div>
        </div>
    )
}