import React from 'react'
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import PhotoIcon from '@material-ui/icons/Photo';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
                <div className="feed__inputContainer">
                    <div className="feed__input">
                    <CreateIcon />
                    <form>
                    <input type="text" placeholder="Start a Post"/>
                    <button type="submit">Send</button>
                    </form>
                    </div>

                    <div className="feed__icons">
                        <InputOption Icon={PhotoIcon} title="Photo" color="#7085f9"/>
                        <InputOption Icon={VideoLibraryIcon} title="Video" color="orange"/>
                        <InputOption Icon={EventNoteIcon} title="Event" color="grey"/>
                        <InputOption Icon={AssignmentIcon} title="Write article" color="green"/>
                    </div>
                </div>
                    <Post
                        name="ravi"
                        description="react developer"
                        msg="heyyy am currently looking for a job on react"
                        photoUrl=""
                    />
        </div>
    )
}

export default Feed
