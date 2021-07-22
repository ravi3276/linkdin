import React, { useState,useEffect } from 'react'
import "./Feed.css";
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import PhotoIcon from '@material-ui/icons/Photo';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import EventNoteIcon from '@material-ui/icons/EventNote';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Post from './Post';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';

import db from './firebase';
import { selectUser } from './features/userSlice';
import { useSelector } from 'react-redux';
function Feed() {
    const user = useSelector(selectUser)
    const [input,setInput] = useState('');
    const[posts,setPosts] =useState([]);

    useEffect(() => {
       db.collection('posts').orderBy('timestamp','desc').onSnapshot((snapshot) => setPosts(snapshot.docs.map((doc)=>({
           id: doc.id,
           data: doc.data(),
       }))))
    }, [])
        // console.log(posts)
    const sendPost=(e)=>{
        e.preventDefault();
            db.collection('posts').add({
                        name:"ravi",
                        description:"react developer",
                        msg:input,
                        photoUrl:"https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                        timestamp:firebase.firestore.FieldValue.serverTimestamp()
            })
            setInput('')
    }
    return (
        <div className="feed">
                <div className="feed__inputContainer">
                    <div className="feed__input">
                    <CreateIcon />
                    <form className="feed__form">
                    <input type="text" value={input} onChange={e =>setInput(e.target.value)} placeholder="Start a Post"/>
                    <button onClick={sendPost} type="submit">Send</button>
                    </form>
                    </div>

                    <div className="feed__icons">
                        <InputOption Icon={PhotoIcon} title="Photo" color="#7085f9"/>
                        <InputOption Icon={VideoLibraryIcon} title="Video" color="orange"/>
                        <InputOption Icon={EventNoteIcon} title="Event" color="grey"/>
                        <InputOption Icon={AssignmentIcon} title="Write article" color="green"/>
                    </div>
                </div>
                <FlipMove>
                {
                    posts.map(({id,data:{name,description,msg,photoUrl,timestamp}})=>(
                       <Post 
                        key={id}
                        name={name}
                        description={description}
                        msg={msg}
                        photoUrl={photoUrl}
                        // timestamp={timestamp}
                       />
                    ))
                }

                </FlipMove>
                    
        </div>
    )
}

export default Feed
