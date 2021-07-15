import React,{useEffect,useState} from 'react'
import { Avatar } from '@material-ui/core';
import "./SidebarChat.css"
import db from "../firebase"
import { Link } from "react-router-dom"

function SidebarChat({ id, name, addNewChat }) {
    const [img,setImg] = useState(null);
    const [messages, setMessages] = useState("")

    useEffect(() =>{
        if(id) {
            db.collection("Rooms").doc(id).collection("Messages").orderBy("timestamp","desc").onSnapshot((snapshot) => setMessages(snapshot.docs.map(doc => 
                doc.data())))
        }
    })
    console.log(messages)
    useEffect(()=>{
        let num = Math.random() * 5000
        // fetch(`https://avatars.dicebear.com/api/human/aaa${num}.svg`).then(x=>setImg(x))
    },[])
    
    const createChat = () => {
        const roomName = prompt("please enter name for chat room");

        if (roomName){
            db.collection("Rooms").add({
                name: roomName,
            })
        }
    };

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div>
                <div className="sidebarChat">
                    <Avatar src={img && img.url}/>
                    <div className="sidebarChatInfo">
                        <h2>{name}</h2>
                        <p>{messages[0]?.message}</p>
                    </div>
                </div>
            </div>
        </Link>
    ) : (
        <div onClick={createChat}
        className="sidebarChat">
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
