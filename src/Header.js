import React from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import WorkIcon from '@material-ui/icons/Work';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import HeaderSideOp from './HeaderSideOp';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img src="http://t0.gstatic.com/images?q=tbn:ANd9GcRMCA3j2A8hfLl9p5UAU5nd9lvqLlNZvqoU4xOsZ192uH4IYS6X" alt="" />
                <div className="header__search">
                    <SearchIcon />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderSideOp Icon={HomeIcon} title="Home"/>
                <HeaderSideOp Icon={SupervisorAccountIcon} title="Network"/>
                <HeaderSideOp Icon={WorkIcon} title="Jobs"/>
                <HeaderSideOp Icon={ChatBubbleIcon} title="Messages"/>
                <HeaderSideOp Icon={NotificationsIcon} title="Notifications"/>
                <HeaderSideOp avatar="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                 title="Me"/>
            </div>
            </div>
    )
}

export default Header 
