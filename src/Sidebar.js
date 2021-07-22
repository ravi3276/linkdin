import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './Sidebar.css'

function Sidebar() {
    const user = useSelector(selectUser)
    const recentItems=(item)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>
            {item}
            </p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.pexels.com/photos/2647794/pexels-photo-2647794.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />
                <Avatar 
                className="sidebar__avatar"
                src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
            </div>

            <div className="sidebar__status">
                <div className="sidebar__stat">
                    <p>Who Viewed Your Profile</p>
                    <p className="sidebar__statusnumber">254</p>
                </div>

                <div className="sidebar__stat">
                <p>Who Viewed You</p>
                    <p className="sidebar__statusnumber">174</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItems("reactJS")}
                {recentItems("node")}
                {recentItems("aws")}
                {recentItems("native")}

            </div>
        </div>
    )
}

export default Sidebar
