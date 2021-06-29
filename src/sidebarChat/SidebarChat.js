import React,{useEffect,useState} from 'react'
import { Avatar } from '@material-ui/core';
import "./SidebarChat.css"
import db from "../firebase"

function SidebarChat({ id, name, addNewChat }) {
    const [img,setImg] = useState(null);
    
    useEffect(()=>{
        let num = Math.random() * 5000
        // fetch(`https://avatars.dicebear.com/api/human/aaa${num}.svg`).then(x=>setImg(x))
    },[])
    
    const createChat = () => {
        const roomName = prompt("please enter name for chat room");

        if (roomName){
            db.collection("rooms").add({
                name: roomName,
            })
        }
    };

    return !addNewChat ? (
        <div>
            <div className="sidebarChat">
                <Avatar src={img && img.url}/>
                <div className="sidebarChatInfo">
                    <h2>{name}</h2>
                    <p>Last message...</p>
                </div>
            </div>
        </div>
    ) : (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
